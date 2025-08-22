import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    phone: { type: String, index: true, unique: true, required: true },
    name: { type: String },
    role: { type: String, enum: ['patient', 'doctor', 'admin'], required: true },
  },
  { timestamps: true }
)

export default mongoose.models.User || mongoose.model('User', userSchema)