// pages/api/user/login.js
import dbConnect from '@/utils/dbConnect';
import User from '@/models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }
  console.log("DB pre");
  await dbConnect();
  console.log("DB post");

  const { email, password } = req.body;
  console.log("Received request:", req.body)
  try {
    const user = await User.findOne({ email: email });
    console.log("User found: ", user);
    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }
    
    // Create JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    console.log("Token: ", token);
    res.status(200).json({ success: true, token: token });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}
