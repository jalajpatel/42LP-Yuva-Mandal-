// pages/api/family-details/[mobileNumber].js

import dbConnect from '@/utils/dbConnect';
import NestedForm from '@/models/NestedForm';

const handler = async (req, res) => {
  const { mobileNumber } = req.query;

  await dbConnect();

  try {
    const nestedForm = await NestedForm.findOne({ 'members.mobileNumber': mobileNumber });
    if (!nestedForm) {
      return res.status(404).json({ success: false, message: 'No family details found' });
    }

    res.status(200).json({ success: true, data: nestedForm });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export default handler;
