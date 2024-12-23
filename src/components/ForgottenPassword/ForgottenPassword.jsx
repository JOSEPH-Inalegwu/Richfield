import React, { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email)
    try {
      const response = await axios.post("http://localhost:3500/api/reset/request-verification", { email });
      const { token } = response.data; // Assuming the backend sends a token
      if (response.status === 200) {
        sessionStorage.setItem("resetToken", token); // Save token in sessionStorage
        console.log("Token saved:", token);
        alert("Password reset link sent to your email!");
      } else {
        alert("Email not found. Please try again.");
      }
    } catch (error) {
      console.error("Error sending reset link:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Forgot Password
        </h1>
        <p className="text-center text-gray-600 mb-4">
          Enter your email to reset your password
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 font-medium mb-1">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
