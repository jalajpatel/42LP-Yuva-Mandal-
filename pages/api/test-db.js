// pages/api/test-db.js

import dbConnect from '@/utils/dbConnect';

export default async function handler(req, res) {
  try {
    await dbConnect();
    res.status(200).json({ success: true, message: 'Database connection successful' });
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).json({ success: false, message: 'Database connection failed', error: error.message });
  }
}
