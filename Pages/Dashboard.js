import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const userRole = "admin"; // Mock role - replace with dynamic user role

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <p>Welcome to your personalized dashboard!</p>
      {userRole === "admin" && <p>Admin-specific data goes here.</p>}
      {userRole === "user" && <p>User-specific data goes here.</p>}
    </div>
  );
};

export default Dashboard;