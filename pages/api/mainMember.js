import dbConnect from '@/utils/dbConnect';
import MainMember from '@/models/MainMember';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  await dbConnect();

  const { name, mobileNumber, village, shakh, currentAddress } = req.body;

  try {
    // Check if main member already exists
    const existingMember = await MainMember.findOne({ mobileNumber });
    if (existingMember) {
      return res.status(400).json({ success: false, message: 'Mobile number already in use' });
    }

    // Create new main member
    const mainMember = new MainMember({
      name,
      mobileNumber,
      village,
      shakh,
      currentAddress,
    });
    await mainMember.save();
    res.status(201).json({ success: true, message: 'Main member created successfully' });
  } catch (error) {
    console.error('Error creating main member:', error); // Improved error logging
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
}
