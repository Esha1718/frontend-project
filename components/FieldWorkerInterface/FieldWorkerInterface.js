import React from 'react';
import './FieldWorkerInterface.css';
import FieldWorkerTasks from './FieldWorkerTasks';

const FieldWorkerInterface = () => {
    return (
        <div className="field-worker-interface">
            <header className="field-worker-header">
                <h1>Field Worker Dashboard</h1>
                <p>Manage your assigned tasks efficiently and securely.</p>
            </header>
            <main className="field-worker-main">
                <FieldWorkerTasks />
            </main>
        </div>
    );
};

export default FieldWorkerInterface;