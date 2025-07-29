// server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { connectMongoDB, connectFirebase } = require('./config/db'); // Import database connection functions
const authRoutes = require('./routes/authRoutes');
const dataRoutes = require('./routes/dataRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to Database (choose one)
connectMongoDB(); // Uncomment if using MongoDB
// connectFirebase(); // Uncomment if using Firebase

// Middleware
app.use(cors()); // Enable CORS for all origins (adjust for production)
app.use(express.json()); // Body parser for JSON data

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/data', dataRoutes);

// Basic root route
app.get('/', (req, res) => {
  res.send('Work-Out Tracker Backend API is running...');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
