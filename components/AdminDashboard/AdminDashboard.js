import React, { useEffect, useState } from 'react';
import './AdminDashboard.css';
import AdminStatistics from './AdminStatistics';
import { fetchDashboardData } from '../../api/api'; // Assuming you have an API for fetching data

const AdminDashboard = () => {
    const [dashboardData, setDashboardData] = useState({
        totalDonors: 0,
        totalRefugees: 0,
        totalFieldWorkers: 0,
        totalDonations: 0,
        loading: true,
    });

    // Fetch data when the component mounts
    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchDashboardData();
                setDashboardData({
                    totalDonors: data.donors,
                    totalRefugees: data.refugees,
                    totalFieldWorkers: data.fieldWorkers,
                    totalDonations: data.donations,
                    loading: false,
                });
            } catch (error) {
                console.error("Error fetching dashboard data:", error);
                setDashboardData(prevState => ({ ...prevState, loading: false }));
            }
        };

        loadData();
    }, []);

    if (dashboardData.loading) {
        return <div className="loading">Loading Dashboard...</div>;
    }

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <div className="dashboard-overview">
                <div className="dashboard-card">
                    <h3>Total Donors</h3>
                    <p>{dashboardData.totalDonors}</p>
                </div>
                <div className="dashboard-card">
                    <h3>Total Refugees</h3>
                    <p>{dashboardData.totalRefugees}</p>
                </div>
                <div className="dashboard-card">
                    <h3>Total Field Workers</h3>
                    <p>{dashboardData.totalFieldWorkers}</p>
                </div>
                <div className="dashboard-card">
                    <h3>Total Donations</h3>
                    <p>${dashboardData.totalDonations}</p>
                </div>
            </div>
            <AdminStatistics statistics={dashboardData} />
        </div>
    );
};

export default AdminDashboard;