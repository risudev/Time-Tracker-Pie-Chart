import TimeChart from '@/components/TimeChart';
import TimeForm from '@/components/TimeForm';
import React, { useEffect, useState } from 'react';

type Task = {
    activity: string;
    hours: number;
    color: string;
};

const Home = () => {
    //const [chartData, setChartData] = useState<{ activity: string; hours: number }[]>([]);
    const [tasks, setTasks] = useState<Task[]>([]);

    // Load from LocalStorage
    useEffect(() => {
        const saved = localStorage.getItem('student-tasks');
        if (saved) {
            setTasks(JSON.parse(saved));
        }
    }, []);

    // Save to LocalStorage
    useEffect(() => {
        localStorage.setItem('student-tasks', JSON.stringify(tasks));
    }, [tasks]);

    const totalHours = tasks.reduce((sum, tasks) => sum + tasks.hours, 0);


    const handleAdd = (activity: string, hours: number, color: string) => {
        if (totalHours + hours > 24) {
            alert("You cannot exceed 24 hours in a day");
            return;
        }

        const newTask: Task = { activity, hours, color };
        setTasks([...tasks, newTask]);
    };

    // const chartData = {
    //     labels: tasks.map(task => task.activity),
    //     datasets: [
    //         {
    //             data: tasks.map(task => task.hours),
    //             backgroundColor: tasks.map(task => task.color),
    //         },
    //     ],
    // };

    // const handleDelete = (index: number) => {
    //     const updated = [...tasks];
    //     updated.splice(index, 1);
    //     setTasks(updated);
    // };

    
    return (
        <div className='max-w-md mx-auto p-6 mt-10 bg-[white] text-black rounded-lg shadow-lg space-y-6'>
            <h1 className='text-2xl font-bold'>🎯 Student Task Tracker</h1>
            <p>Total Hours Tracked: <strong>{totalHours}/24</strong></p>
            <TimeForm onAdd={handleAdd} />

            {tasks.length >0 && <TimeChart data={tasks} />}
            
        </div>
    );
};

export default Home;