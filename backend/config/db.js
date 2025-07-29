// config/db.js
const mongoose = require('mongoose');
const admin = require('firebase-admin');
const dotenv = require('dotenv');

dotenv.config();

// --- MongoDB Connection (if using MongoDB) ---
const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

// --- Firebase Connection (if using Firebase) ---
const connectFirebase = () => {
  try {
    // Replace with your Firebase service account key path or content
    // For production, use environment variables or a secure method to load this.
    // Example using a path:
    // const serviceAccount = require(process.env.FIREBASE_SERVICE_ACCOUNT_KEY_PATH);

    // Example using environment variable for JSON content (less secure for large keys)
    // const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY_JSON);


    // If you're using Firebase for authentication and Firestore,
    // you'd initialize the admin SDK like this:
    // admin.initializeApp({
    //   credential: admin.credential.cert(serviceAccount),
    //   databaseURL: "https://<YOUR_PROJECT_ID>.firebaseio.com" // If using Realtime Database
    // });
    // console.log('Firebase Admin SDK Initialized...');

    console.log('Firebase Admin SDK setup placeholder. Configure with your service account credentials.');

  } catch (err) {
    console.error('Firebase initialization error:', err.message);
    process.exit(1);
  }
};

module.exports = { connectMongoDB, connectFirebase }; // Export both, use one.
