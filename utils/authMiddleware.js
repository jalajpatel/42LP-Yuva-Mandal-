// utils/authMiddleware.js
import jwt from 'jsonwebtoken';
import User from '@/models/user';
import dbConnect from '@/utils/dbConnect';

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ success: false, message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    await dbConnect();
    req.user = await User.findById(decoded.userId);
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: 'Invalid token' });
  }
};

export default authMiddleware;
