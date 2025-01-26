import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1>404 - Page Not Found</h1>
      <p>We couldn't find what you're looking for.</p>
      <Link to="/" className="btn primary">Go Home</Link>
    </div>
  );
};

export default NotFound;