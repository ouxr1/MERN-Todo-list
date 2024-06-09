const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todosRoute = require('./routes/todos');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/todos', todosRoute);

// MongoDB Connection
const DB_URI = 'mongodb://localhost:27017/todos'; // Change this if using environment variables
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
