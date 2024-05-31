// pages/api/main-members.js

import dbConnect from '@/utils/dbConnect';
import MainMember from '@/models/MainMember';

export default async function handler(req, res) {
  const { method, query } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        if (query.mobileNumber) {
          // If mobileNumber query parameter is provided, fetch the main member and their nested forms
          const mainMember = await MainMember.findOne({ mobileNumber: query.mobileNumber }).populate('nestedForms');
          if (!mainMember) {
            return res.status(404).json({ message: 'Main member not found' });
          }
          return res.status(200).json(mainMember);
        } else {
          // If mobileNumber query parameter is not provided, fetch all main members
          const mainMembers = await MainMember.find({});
          return res.status(200).json(mainMembers);
        }
      } catch (error) {
        console.error('Error fetching main members:', error);
        return res.status(500).json({ message: 'Internal server error' });
      }
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
