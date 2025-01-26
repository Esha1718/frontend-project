import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to the Decentralized Cloud Security Platform</h1>
        <p>Securing humanitarian data with blockchain resilience.</p>
        <div className="home-actions">
          <Link to="/login" className="btn primary">Login</Link>
          <Link to="/signup" className="btn secondary">Sign Up</Link>
        </div>
      </header>
      <section className="home-features">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Secure Data</h3>
            <p>Ensures data integrity and resilience with blockchain technology.</p>
          </div>
          <div className="feature-item">
            <h3>Role-Based Access</h3>
            <p>Manage access for admins, donors, field workers, and refugees.</p>
          </div>
          <div className="feature-item">
            <h3>Transparent Donations</h3>
            <p>Track donations to ensure they reach the intended recipients.</p>
          </div>
        </div>
      </section>
      <footer className="home-footer">
        <p>Contact us at support@cloudsecurity.org</p>
      </footer>
    </div>
  );
};

export default Home;