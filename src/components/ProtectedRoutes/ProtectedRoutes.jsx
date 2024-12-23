import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, tokenKey = "verificationToken", redirectTo = "/login" }) => {
  // Get the token from storage
  //protected route component gets token key frm session storage and uses it to access verify route
  const token = sessionStorage.getItem(tokenKey);

  if (!token) {
    // Redirect if the token is missing
    return <Navigate to={redirectTo} />;
  }

  return children; // Render the protected component
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  tokenKey: PropTypes.string,
  redirectTo: PropTypes.string,
};

export default ProtectedRoute;
