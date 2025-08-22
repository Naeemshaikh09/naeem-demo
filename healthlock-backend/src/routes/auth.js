import { Router } from 'express'
import jwt from 'jsonwebtoken'

const router = Router()

router.post('/request-otp', async (req, res) => {
  const { phone } = req.body || {}
  if (!phone) return res.status(400).json({ error: 'phone required' })
  // Stub: integrate Twilio Verify / MSG91 here
  return res.json({ ok: true })
})

router.post('/verify-otp', async (req, res) => {
  const { phone, code, role = 'patient' } = req.body || {}
  if (!phone || !code) return res.status(400).json({ error: 'phone and code required' })
  // Stub OTP verification success
  const token = jwt.sign({ sub: phone, role }, process.env.JWT_SECRET || 'dev-secret', { expiresIn: '7d' })
  return res.json({ token })
})

export default router