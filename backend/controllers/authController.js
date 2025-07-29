// controllers/authController.js
const bcrypt = require('bcryptjs');
const User = require('../models/User'); // For MongoDB
const { generateToken } = require('../config/jwt');
// const admin = require('firebase-admin'); // For Firebase Auth

// @desc    Register new user
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Please enter all fields' });
  }

  // --- MongoDB Logic ---
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    if (user) {
      res.status(201).json({
        _id: user.id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  // --- Firebase Auth Logic (conceptual) ---
  /*
  try {
    const userRecord = await admin.auth().createUser({
      email,
      password,
      displayName: username,
    });
    // Store additional profile data in Firestore if needed
    // await createUserInFirestore(userRecord.uid, email, username);

    // Generate custom token for client-side authentication or return basic user info
    // For JWT based flow, you'd still generate a JWT after Firebase auth success.
    res.status(201).json({
      uid: userRecord.uid,
      email: userRecord.email,
      username: userRecord.displayName,
      token: generateToken(userRecord.uid), // Generate your own JWT
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  */
};

// @desc    Authenticate a user
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // --- MongoDB Logic ---
  try {
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user.id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  // --- Firebase Auth Logic (conceptual) ---
  /*
  try {
    // Firebase client SDK handles direct email/password sign-in.
    // Backend would typically verify ID tokens sent from client after client signs in.
    // This is a simplified example of backend-initiated login (less common for client-side auth)
    // For server-side verification:
    // const idToken = req.headers.authorization.split(' ')[1]; // Assuming Bearer token
    // const decodedToken = await admin.auth().verifyIdToken(idToken);
    // const uid = decodedToken.uid;
    // ... then fetch user data from Firestore/DB.

    // For a direct login attempt on backend (less secure for mobile apps):
    // const userRecord = await admin.auth().getUserByEmail(email);
    // if (userRecord) {
    //   // You cannot directly verify password on backend with Firebase Auth.
    //   // Client-side SDK handles password verification.
    //   // If you're using custom tokens, you'd generate one here.
    //   res.json({
    //     uid: userRecord.uid,
    //     email: userRecord.email,
    //     username: userRecord.displayName,
    //     token: generateToken(userRecord.uid), // Generate your own JWT
    //   });
    // } else {
    //   res.status(400).json({ message: 'Invalid credentials' });
    // }
    res.status(501).json({ message: 'Firebase authentication handled client-side or via ID token verification.' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  */
};

module.exports = { registerUser, loginUser };
