// models/Workout.js
const mongoose = require('mongoose');

// --- MongoDB Workout Schema (if using Mongoose) ---
const workoutSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    type: {
      type: String,
      required: [true, 'Please add a workout type'],
    },
    duration: {
      type: Number,
      required: [true, 'Please add workout duration in minutes'],
    },
    caloriesBurned: {
      type: Number,
      required: [true, 'Please add calories burned'],
    },
    date: {
      type: Date,
      default: Date.now,
    },
    // Add more fields like distance, heartRate, notes, etc.
  },
  {
    timestamps: true,
  }
);

const Workout = mongoose.model('Workout', workoutSchema);

// --- Firebase Workout Management (conceptual) ---
// If using Firebase Firestore, you'd interact directly with collections
/*
const addWorkoutToFirestore = async (userId, workoutData) => {
  const db = admin.firestore();
  await db.collection('users').doc(userId).collection('workouts').add({
    ...workoutData,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });
};
const getWorkoutsFromFirestore = async (userId) => {
  const db = admin.firestore();
  const snapshot = await db.collection('users').doc(userId).collection('workouts').orderBy('date', 'desc').get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
*/

module.exports = Workout; // Export Mongoose model
// module.exports = { addWorkoutToFirestore, getWorkoutsFromFirestore }; // Or export Firebase helper functions
