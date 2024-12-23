import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "http://localhost:3500/api", // Your API base URL
});

// Add an interceptor to handle expired access tokens
axiosInstance.interceptors.response.use(
  (response) => response, // Pass successful responses through
  async (error) => {
    const originalRequest = error.config;

    // If the error is due to an expired access token
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Prevent endless retry loops

      try {
        // Request a new access token using the refresh token
        const refreshResponse = await axios.post("http://localhost:3500/api/refresh", null, {
          withCredentials: true, // Ensure cookies are sent
        });

        const newAccessToken = refreshResponse.data.accessToken;

        // Save the new access token in localStorage
        localStorage.setItem("accessToken", newAccessToken);

        // Update the Authorization header of the original request
        axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${newAccessToken}`;
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

        // Retry the original request
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // If the refresh token also fails, log the user out
        console.error("Refresh token expired. Logging out.", refreshError);
        localStorage.removeItem("accessToken");
        window.location.href = "/login"; // Redirect to login page
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error); // Pass other errors through
  }
);

export default axiosInstance;
