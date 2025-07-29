// models/User.js
const mongoose = require('mongoose');

// --- MongoDB User Schema (if using Mongoose) ---
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please add a username'],
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    // You can add more user profile fields here
    // e.g., age, weight, height, goals
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

// --- Firebase User Management (conceptual) ---
// If using Firebase Authentication, you don't typically create a 'User' model
// in your backend in the same way as MongoDB. Firebase handles user accounts.
// You might store additional user profile data in Firestore or Realtime DB.
/*
const createUserInFirestore = async (uid, email, username) => {
  const db = admin.firestore();
  await db.collection('users').doc(uid).set({
    email,
    username,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });
};
*/

module.exports = User; // Export Mongoose model
// module.exports = { createUserInFirestore }; // Or export Firebase helper functions
