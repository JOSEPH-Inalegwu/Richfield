import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const VerifyCode = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || ""; // Default to empty string if undefined
  const password = location.state?.password || ""; // Default to empty string if undefined
  const username = location.state?.username || ""; // Default to empty string if undefined

  const handleChange = (e) => {
    setVerificationCode(e.target.value);
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(""); // Clear previous messages
  
    try {
      // Retrieve the token from sessionStorage
      const verificationToken = sessionStorage.getItem("verificationToken");
      console.log("Retrieved token:", verificationToken);
  
      if (!verificationToken) {
        console.log('no verification token')
        setMessage("Verification token is missing. Please try again.");
        setIsLoading(false);
        return;
      }
  
      // Axios POST request
      const response = await axios.post(
        "http://localhost:3500/api/signup/verify-user",
        {
          email,
          password,
          username,
          code: verificationCode,
        },
        {
          headers: {
            Authorization: `Bearer ${verificationToken}`, // Add token to headers
            "Content-Type": "application/json",
          },
        }
      );
  
      // Handle success
      const { accessToken } = response.data; // Extract token from response if needed
      sessionStorage.setItem("verificationToken", accessToken); // Save new token
      setMessage("Verification successful! Redirecting...");
      navigate("/"); // Redirect to the home page
    } catch (error) {
      console.error("Error during verification:", error);
  
      // Handle errors
      if (error.response) {
        setMessage(error.response.data.message || "Verification failed.");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">
          Verify Your Email
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Enter Verification Code
            </label>
            <input
              type="text"
              value={verificationCode}
              onChange={handleChange}
              placeholder="Enter the code sent to your email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            disabled={isLoading}
          >
            {isLoading ? "Verifying..." : "Verify"}
          </button>
        </form>
        {message && (
          <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
        )}
      </div>
    </div>
  );
};

export default VerifyCode;
