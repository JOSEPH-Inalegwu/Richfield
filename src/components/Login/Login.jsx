import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    try {
      //axios instance is a file that checks if the refresh token is valid...if it is'nt it requests for a new token
      const response = await axiosInstance.post("/login", formData);

      const { accessToken } = response.data;

      // Store JWT in localStorage
      localStorage.setItem("jwt", accessToken);

      alert("Login successful!");
      navigate("/"); // Redirect to the dashboard or any protected route
    } catch (error) {
      console.error("Error during login:", error);

      // Handle errors and set appropriate message
      if (error.response && error.response.data) {
        setError(error.response.data.message || "Login failed. Please try again.");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Richfield Farm & Smokehouse
        </h1>
        <div className="overflow-y-auto max-h-96 p-2">
          <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">
            Welcome Back!
          </h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
          <div className="flex justify-between items-center mt-4">
            <Link
              to="/forgotten-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot password?
            </Link>
            <Link
              to="/signup"
              className="text-sm text-blue-600 hover:underline"
            >
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
