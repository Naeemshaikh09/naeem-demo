import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import FileUploader from '../components/FileUploader'

export default function PatientDashboard() {
  const { t } = useTranslation()
  const [files] = useState([])

  return (
    <div className="min-h-screen grid md:grid-cols-[260px_1fr] bg-slate-50">
      <aside className="bg-white border-r border-slate-200 p-4">
        <div className="font-semibold text-teal-700">{t('appName')}</div>
        <nav className="mt-6 space-y-2">
          <Link to="/patient" className="block px-3 py-2 rounded hover:bg-slate-100">Dashboard</Link>
          <a className="block px-3 py-2 rounded hover:bg-slate-100">Records</a>
          <a className="block px-3 py-2 rounded hover:bg-slate-100">Share</a>
          <Link to="/emergency" className="block px-3 py-2 rounded hover:bg-slate-100">Emergency QR</Link>
          <a className="block px-3 py-2 rounded hover:bg-slate-100">Profile</a>
        </nav>
      </aside>
      <main className="p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Patient Dashboard</h1>
          <div className="flex gap-2 items-center">
            <FileUploader onUploaded={(data)=>console.log('uploaded', data)} />
            <button className="px-3 py-2 rounded border border-slate-300">{t('shareAccess')}</button>
            <button className="px-3 py-2 rounded border border-slate-300">{t('revokeAccess')}</button>
          </div>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {files.length === 0 ? (
            <div className="text-slate-500">No records yet. Upload to get started.</div>
          ) : files.map((f, i) => (
            <div key={i} className="bg-white p-4 rounded-lg border border-slate-200">{f.name}</div>
          ))}
        </div>
      </main>
    </div>
  )
}