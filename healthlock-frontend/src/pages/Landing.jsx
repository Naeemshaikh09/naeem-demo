import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { getHealth } from '../api/health'

export default function Landing() {
  const { t, i18n } = useTranslation()
  const [healthy, setHealthy] = useState(false)
  useEffect(() => { getHealth().then(() => setHealthy(true)).catch(()=>setHealthy(false)) }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-slate-800">
      <header className="max-w-6xl mx-auto flex items-center justify-between p-6">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-teal-600 text-white font-bold">HL</span>
          <span className="font-semibold text-xl">{t('appName')}</span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'hi' : 'en')} className="px-3 py-1.5 rounded-md border border-slate-200 hover:bg-slate-50">
            {i18n.language === 'en' ? 'हिन्दी' : 'English'}
          </button>
          <Link to="/login" className="px-4 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700">{t('login')}</Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center p-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Secure, India-first health record locker
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Upload, manage, and share medical records with doctors. Emergency QR for critical info. Hindi summaries.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/patient" className="px-5 py-3 rounded-lg bg-teal-600 text-white shadow hover:bg-teal-700">{t('ctaSecure')}</Link>
            <Link to="/emergency" className="px-5 py-3 rounded-lg border border-slate-300 hover:bg-slate-50">{t('emergency')}</Link>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="md:justify-self-end">
          <div className="relative bg-white/70 backdrop-blur rounded-2xl shadow-lg p-6 border border-slate-100">
            <div className="h-48 w-72 bg-gradient-to-tr from-sky-100 via-teal-50 to-white rounded-xl animate-pulse" />
            <div className="mt-4 h-2 w-2/3 bg-slate-200 rounded" />
            <div className="mt-2 h-2 w-1/2 bg-slate-200 rounded" />
          </div>
        </motion.div>
      </main>
    </div>
  )
}