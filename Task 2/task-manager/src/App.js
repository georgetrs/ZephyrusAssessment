import React, { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
    const [tasks, setTasks] = useState([]);

    // Load tasks from localStorage on component mount
    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(savedTasks);
    }, []);

    // Save tasks to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task) => {
        const newTask = { ...task, id: Date.now() }; // Unique ID using timestamp
        setTasks((prev) => [...prev, newTask]);
    };

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    };

    const updateTask = (updatedTask) => {
        const updatedTasks = tasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
        );
        setTasks(updatedTasks);
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <TaskForm onAddTask={addTask} />
            <TaskList tasks={tasks} onDeleteTask={deleteTask} onUpdateTask={updateTask} />
        </div>
    );
};

export default App;
