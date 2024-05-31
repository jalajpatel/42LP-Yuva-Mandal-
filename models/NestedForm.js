import mongoose from 'mongoose';

const { Schema } = mongoose;

const MemberSchema = new Schema({
  fullName: { type: String, required: true },
  relationshipWithMainPerson: { type: String, required: true },
  mosaal: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  collegeName: { type: String, required: true },
  address1: { type: String, required: true },
  nokari: { type: String, required: true },
  maritalStatus: { type: String, required: true },
  dob: { type: Date, required: true },
  photoUrl: { type: String },
});

const NestedFormSchema = new Schema({
  members: [MemberSchema],
}, { timestamps: true });

export default mongoose.models.NestedForm || mongoose.model('NestedForm', NestedFormSchema);
