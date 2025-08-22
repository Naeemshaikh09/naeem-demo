import { useState } from 'react'
import { apiForm } from '../api/client'

export default function FileUploader({ onUploaded }) {
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (!file) return
    setLoading(true)
    try {
      const form = new FormData()
      form.append('file', file)
      const { data } = await apiForm.post('/api/records/upload', form)
      onUploaded?.(data)
    } catch (err) {
      setError(err?.response?.data?.error || err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
      <input type="file" onChange={(e)=>setFile(e.target.files?.[0]||null)} className="block w-full text-sm text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100" />
      <button disabled={loading} className="px-4 py-2 rounded-md bg-teal-600 text-white disabled:opacity-50">{loading ? 'Uploading…' : 'Upload'}</button>
      {error && <div className="text-sm text-red-600">{error}</div>}
    </form>
  )
}