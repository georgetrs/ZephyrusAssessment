import React, { useState } from 'react';

const TaskList = ({ tasks, onDeleteTask, onUpdateTask }) => {
    const [editingTask, setEditingTask] = useState(null);
    const [editValues, setEditValues] = useState({ title: '', description: '', dueDate: '' });

    const handleEditClick = (task) => {
        setEditingTask(task.id);
        setEditValues(task);
    };

    const handleSaveClick = () => {
        onUpdateTask(editValues);
        setEditingTask(null);
        setEditValues({ title: '', description: '', dueDate: '' });
    };

    const handleCancelClick = () => {
        setEditingTask(null);
        setEditValues({ title: '', description: '', dueDate: '' });
    };

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    {editingTask === task.id ? (
                        <>
                            <input
                                type="text"
                                value={editValues.title}
                                onChange={(e) => setEditValues({ ...editValues, title: e.target.value })}
                            />
                            <textarea
                                value={editValues.description}
                                onChange={(e) => setEditValues({ ...editValues, description: e.target.value })}
                            ></textarea>
                            <input
                                type="date"
                                value={editValues.dueDate}
                                onChange={(e) => setEditValues({ ...editValues, dueDate: e.target.value })}
                            />
                            <button onClick={handleSaveClick}>Save</button>
                            <button onClick={handleCancelClick}>Cancel</button>
                        </>
                    ) : (
                        <>
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                            <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
                            <button onClick={() => onDeleteTask(task.id)}>Delete</button>
                            <button onClick={() => handleEditClick(task)}>Edit</button>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
