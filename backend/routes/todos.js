const express = require('express');
const Todo = require('../models/Todo');
const router = express.Router();

// Create a new todo
router.post('/', async (req, res) => {
  const newTodo = new Todo({
    title: req.body.title,
  });
  try {
    const savedTodo = await newTodo.save();
    res.json(savedTodo);
  } catch (error) {
    res.json({ message: error });
  }
});

// Get all todos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.json({ message: error });
  }
});

// Update a todo
router.put('/:id', async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(updatedTodo);
  } catch (error) {
    res.json({ message: error });
  }
});

// Delete a todo
router.delete('/:id', async (req, res) => {
  try {
    const removedTodo = await Todo.findByIdAndRemove(req.params.id);
    res.json(removedTodo);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
