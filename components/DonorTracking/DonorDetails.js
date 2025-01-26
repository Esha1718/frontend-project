import React, { useState, useEffect } from 'react';

const DonorDetails = () => {
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        // Simulate fetching donation data from an API
        const fetchDonations = async () => {
            const mockDonations = [
                { id: 1, item: 'Food Supplies', status: 'Delivered', date: '2024-12-01' },
                { id: 2, item: 'Medical Kits', status: 'In Transit', date: '2024-12-05' },
                { id: 3, item: 'Clothing', status: 'Pending', date: '2024-12-07' },
            ];
            setDonations(mockDonations);
        };

        fetchDonations();
    }, []);

    return (
        <div className="donor-details">
            <h2>Your Donations</h2>
            <ul>
                {donations.map(donation => (
                    <li key={donation.id} className={donation-item donation-${donation.status.toLowerCase().replace(' ', '-')}}>
                        <div><strong>{donation.item}</strong></div>
                        <div>Status: {donation.status}</div>
                        <div>Date: {donation.date}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DonorDetails;