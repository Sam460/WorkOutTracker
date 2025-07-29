// routes/dataRoutes.js
const express = require('express');
const router = express.Router();
const { getWorkouts, addWorkout, updateWorkout, deleteWorkout } = require('../controllers/dataController');
const { verifyToken } = require('../config/jwt'); // Import verifyToken

// Middleware to protect routes (conceptual)
const protect = (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = verifyToken(token); // Use your verifyToken function
      if (!decoded) {
        return res.status(401).json({ message: 'Not authorized, token failed' });
      }
      // In a real app, you'd fetch the user from DB based on decoded.id
      // For this conceptual example, we'll just attach the ID
      req.user = { id: decoded.id };
      next();
    } catch (error) {
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }
  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

router.route('/workouts')
  .get(protect, getWorkouts)
  .post(protect, addWorkout);

router.route('/workouts/:id')
  .put(protect, updateWorkout)
  .delete(protect, deleteWorkout);

module.exports = router;
