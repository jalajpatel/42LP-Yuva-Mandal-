// pages/api/user/nestedForm.js
import connectDB from '../../../utils/dbConnect';
import NestedForm from '../../../models/NestedForm';

connectDB();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { members } = req.body; // Assuming your form data is sent as JSON with a 'members' array
      const nestedForm = new NestedForm({ members });
      const savedForm = await nestedForm.save();
      res.status(201).json({ success: true, data: savedForm });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
