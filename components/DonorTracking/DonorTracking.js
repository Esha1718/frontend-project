import React from 'react';
import './DonorTracking.css';
import DonorDetails from './DonorDetails';

const DonorTracking = () => {
    return (
        <div className="donor-tracking">
            <header className="donor-tracking-header">
                <h1>Donor Tracking Dashboard</h1>
                <p>Track the status of your donations in real-time.</p>
            </header>
            <main className="donor-tracking-main">
                <DonorDetails />
            </main>
        </div>
    );
};

export default DonorTracking;