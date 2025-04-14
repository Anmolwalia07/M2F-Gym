import React, { useEffect } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import jwtDecode from 'jwt-decode'; // Use default import for jwt-decode

const ProtectedRoute = ({ component: Component, requiredRole, ...rest }) => {
  const [cookies] = useCookies([]); // This will fetch all cookies
  console.log(cookies)
  let userRole = null;
  if (cookies.token) {
    try {
      const decodedToken = jwtDecode(cookies.token);
      userRole = decodedToken.role; // Extract the role from the token
      console.log(userRole)
    } catch (error) {
      console.error('Invalid token', error);
    }
  }
  if(userRole==="User"){
    requiredRole[0]="User";
  }
  const isAuthenticated = !!cookies.token; // Check if the token exists
  const hasRequiredRole = requiredRole ? userRole === (requiredRole[0]) : true; // Check if user has required role
  if (!isAuthenticated || !hasRequiredRole) {
    return <Navigate to="/login" />; // Redirect to login if not authenticated or not authorized
  }

  return <Component {...rest} />; // Render the component if authenticated and authorized
};

export default ProtectedRoute;
