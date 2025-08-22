import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Login() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [role, setRole] = useState('patient')
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')
  const [stage, setStage] = useState('request')

  const requestOtp = (e) => {
    e.preventDefault()
    setStage('verify')
  }
  const verifyOtp = (e) => {
    e.preventDefault()
    navigate(role === 'doctor' ? '/doctor' : '/patient')
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow rounded-xl p-6">
        <h1 className="text-xl font-semibold text-slate-800">{t('login')}</h1>
        <p className="text-slate-500 text-sm mt-1">Role-based OTP login</p>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {['patient','doctor','admin'].map(r => (
            <button key={r} onClick={() => setRole(r)} className={`py-2 rounded border ${role===r? 'bg-teal-600 text-white border-teal-600':'border-slate-300 hover:bg-slate-50'}`}>
              {r.charAt(0).toUpperCase()+r.slice(1)}
            </button>
          ))}
        </div>

        {stage==='request' ? (
          <form onSubmit={requestOtp} className="mt-6 space-y-3">
            <input className="w-full px-3 py-2 rounded border border-slate-300" placeholder="+91XXXXXXXXXX" value={phone} onChange={e=>setPhone(e.target.value)} />
            <button className="w-full py-2 rounded bg-teal-600 text-white">Request OTP</button>
          </form>
        ) : (
          <form onSubmit={verifyOtp} className="mt-6 space-y-3">
            <input className="w-full px-3 py-2 rounded border border-slate-300" placeholder="Enter OTP" value={otp} onChange={e=>setOtp(e.target.value)} />
            <button className="w-full py-2 rounded bg-teal-600 text-white">Verify</button>
          </form>
        )}

        <div className="mt-6 flex justify-between text-sm">
          <Link to="/" className="text-slate-500 hover:text-slate-700">Back</Link>
          <Link to="/emergency" className="text-teal-700 hover:text-teal-800">{t('emergency')}</Link>
        </div>
      </div>
    </div>
  )
}