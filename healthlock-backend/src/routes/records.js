import { Router } from 'express'
import multer from 'multer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { generateKeyAndIv, encryptBuffer, sha256Hex } from '../utils/crypto.js'

const router = Router()
const storage = multer.memoryStorage()
const upload = multer({ storage })

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const uploadDir = path.join(__dirname, '../../uploads')
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true })

router.post('/upload', upload.single('file'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'file required' })
  const { buffer, originalname, mimetype, size } = req.file
  const { key, iv } = generateKeyAndIv()
  const encrypted = encryptBuffer(buffer, key, iv)
  const digestHex = sha256Hex(buffer)
  const keyHex = key.toString('hex')
  const ivHex = iv.toString('hex')
  const storageKey = `${Date.now()}-${originalname.replace(/\s+/g, '_')}.enc`
  const dest = path.join(uploadDir, storageKey)
  fs.writeFileSync(dest, encrypted)

  // In production, store key/iv securely (KMS/HSM). Here, return for demo.
  res.json({ ok: true, filename: originalname, mimetype, size, storageKey, keyHex, ivHex, sha256Hex: digestHex })
})

export default router