import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [isValidToken, setIsValidToken] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Extract token from the URL
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  // Validate token on mount
  useEffect(() => {
    const validateToken = async () => {
      try {
        const response = await axios.post("http://localhost:3500/api/reset/verify-token", {
          token,
        });

        if (response.data.isValid) {
          setIsValidToken(true);
        } else {
          setError("Invalid or expired token.");
        }
      } catch (err) {
        console.error("Error validating token:", err);
        setError("Unable to validate token. Please try again later.");
      }
    };

    if (token) {
      validateToken();
    } else {
      setError("Missing token in the URL.");
    }
  }, [token]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3500/api/reset/reset-password", {
        token,
        password: formData.password,
      });
      console.log('we sent to the server')

      if (response.status === 200) {
        alert("Password reset successfully!");
        navigate("/login");
      } else {
        setError("Failed to reset password. Please try again.");
      }
    } catch (err) {
      console.error("Error resetting password:", err);
      setError("Invalid or expired token.");
    }
  };

  if (!token || error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
            Reset Password
          </h1>
          <p className="text-center text-gray-600 mb-4">{error || "Loading..."}</p>
        </div>
      </div>
    );
  }

  if (!isValidToken) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
            Reset Password
          </h1>
          <p className="text-center text-gray-600 mb-4">
            Invalid or expired token. Please request a new reset link.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Reset Password
        </h1>
        <p className="text-center text-gray-600 mb-4">
          Enter your new password below
        </p>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              New Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your new password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
