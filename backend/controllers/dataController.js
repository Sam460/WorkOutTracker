// controllers/dataController.js
const Workout = require('../models/Workout'); // For MongoDB
// const { addWorkoutToFirestore, getWorkoutsFromFirestore } = require('../models/Workout'); // For Firebase

// @desc    Get all workouts for a user
// @route   GET /api/data/workouts
// @access  Private
const getWorkouts = async (req, res) => {
  // req.user.id comes from the protect middleware (JWT verification)

  // --- MongoDB Logic ---
  try {
    const workouts = await Workout.find({ user: req.user.id }).sort({ date: -1 });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  // --- Firebase Logic (conceptual) ---
  /*
  try {
    const workouts = await getWorkoutsFromFirestore(req.user.id);
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  */
};

// @desc    Add a new workout
// @route   POST /api/data/workouts
// @access  Private
const addWorkout = async (req, res) => {
  const { type, duration, caloriesBurned, date } = req.body;

  if (!type || !duration || !caloriesBurned) {
    return res.status(400).json({ message: 'Please fill all required fields' });
  }

  // --- MongoDB Logic ---
  try {
    const workout = await Workout.create({
      user: req.user.id,
      type,
      duration,
      caloriesBurned,
      date: date || Date.now(),
    });
    res.status(201).json(workout);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  // --- Firebase Logic (conceptual) ---
  /*
  try {
    const newWorkout = { type, duration, caloriesBurned, date: date || new Date() };
    await addWorkoutToFirestore(req.user.id, newWorkout);
    res.status(201).json({ message: 'Workout added successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  */
};

// @desc    Update a workout
// @route   PUT /api/data/workouts/:id
// @access  Private
const updateWorkout = async (req, res) => {
  // --- MongoDB Logic ---
  try {
    const workout = await Workout.findById(req.params.id);

    if (!workout) {
      return res.status(404).json({ message: 'Workout not found' });
    }

    // Ensure the logged in user owns the workout
    if (workout.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'User not authorized' });
    }

    const updatedWorkout = await Workout.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated document
    });

    res.status(200).json(updatedWorkout);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  // --- Firebase Logic (conceptual) ---
  /*
  res.status(501).json({ message: 'Update workout not implemented for Firebase concept.' });
  */
};

// @desc    Delete a workout
// @route   DELETE /api/data/workouts/:id
// @access  Private
const deleteWorkout = async (req, res) => {
  // --- MongoDB Logic ---
  try {
    const workout = await Workout.findById(req.params.id);

    if (!workout) {
      return res.status(404).json({ message: 'Workout not found' });
    }

    // Ensure the logged in user owns the workout
    if (workout.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'User not authorized' });
    }

    await workout.deleteOne(); // Use deleteOne() instead of remove()

    res.status(200).json({ id: req.params.id, message: 'Workout removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  // --- Firebase Logic (conceptual) ---
  /*
  res.status(501).json({ message: 'Delete workout not implemented for Firebase concept.' });
  */
};

module.exports = { getWorkouts, addWorkout, updateWorkout, deleteWorkout };
