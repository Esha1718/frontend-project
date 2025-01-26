import React, { useState, useEffect } from 'react';

const FieldWorkerTasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // Simulate fetching tasks from an API
        const fetchTasks = async () => {
            const mockTasks = [
                { id: 1, title: 'Deliver Supplies to Zone A', status: 'In Progress' },
                { id: 2, title: 'Survey Refugees in Zone B', status: 'Pending' },
                { id: 3, title: 'Report Water Supply Issues in Zone C', status: 'Completed' },
            ];
            setTasks(mockTasks);
        };

        fetchTasks();
    }, []);

    return (
        <div className="field-worker-tasks">
            <h2>Your Tasks</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id} className={task-item task-${task.status.toLowerCase()}}>
                        <strong>{task.title}</strong> - <span>{task.status}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FieldWorkerTasks;