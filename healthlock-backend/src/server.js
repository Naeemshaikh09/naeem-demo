import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import rateLimit from 'express-rate-limit'
import { connectMongo } from './config/db.js'
import authRoutes from './routes/auth.js'
import recordRoutes from './routes/records.js'

const app = express()

const PORT = process.env.PORT || 4000
const ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:5173'

app.use(helmet())
app.use(cors({ origin: ORIGIN, credentials: true }))
app.use(express.json({ limit: '10mb' }))
app.use(morgan('dev'))
app.use(rateLimit({ windowMs: 60 * 1000, max: 120 }))

app.get('/health', (req, res) => {
  res.json({ ok: true, service: 'healthlock-backend', time: new Date().toISOString() })
})

app.use('/api/auth', authRoutes)
app.use('/api/records', recordRoutes)

const start = async () => {
  try {
    await connectMongo()
  } catch (err) {
    console.warn('Mongo not connected, continuing in degraded mode:', err?.message)
  }
  app.listen(PORT, () => console.log(`Backend running on :${PORT}`))
}

start()