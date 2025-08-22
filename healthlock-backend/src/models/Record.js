import mongoose from 'mongoose'

const recordSchema = new mongoose.Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true },
    filename: String,
    mimeType: String,
    size: Number,
    storageKey: String,
    storageProvider: { type: String, enum: ['local', 's3', 'firebase'], default: 'local' },
    ivHex: String,
    sha256Hex: String,
  },
  { timestamps: true }
)

export default mongoose.models.Record || mongoose.model('Record', recordSchema)