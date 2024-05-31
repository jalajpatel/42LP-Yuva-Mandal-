import mongoose from 'mongoose';

const MainMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true,
    unique: true
  },
  village: {
    type: String,
    required: true
  },
  shakh: {
    type: String,
    required: true
  },
  currentAddress: {
    type: String,
    required: true
  }
});

export default mongoose.models.MainMember || mongoose.model('MainMember', MainMemberSchema);
