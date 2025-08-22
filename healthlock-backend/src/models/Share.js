import mongoose from 'mongoose'

const shareSchema = new mongoose.Schema(
  {
    record: { type: mongoose.Schema.Types.ObjectId, ref: 'Record', index: true },
    sharedWithDoctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true },
    accessCode: { type: String, index: true },
    expiresAt: { type: Date, index: true },
    revoked: { type: Boolean, default: false },
  },
  { timestamps: true }
)

export default mongoose.models.Share || mongoose.model('Share', shareSchema)