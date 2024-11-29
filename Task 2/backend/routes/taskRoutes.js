const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// GET all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
});

// POST a new task
router.post('/', async (req, res) => {
    const { title, description, dueDate } = req.body;
    try {
        const newTask = await Task.create({ title, description, dueDate });
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ error: 'Failed to create task' });
    }
});

// PUT to update a task
router.put('/:id', async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedTask);
    } catch (err) {
        res.status(400).json({ error: 'Failed to update task' });
    }
});

// DELETE a task
router.delete('/:id', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: 'Task deleted' });
    } catch (err) {
        res.status(400).json({ error: 'Failed to delete task' });
    }
});

module.exports = router;
