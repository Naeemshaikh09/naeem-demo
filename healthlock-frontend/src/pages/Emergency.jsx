import QRCode from 'react-qr-code'

export default function Emergency() {
  const data = {
    name: 'Demo Patient',
    bloodGroup: 'O+',
    allergies: ['Penicillin'],
    conditions: ['Asthma'],
    contact: '+91-99999-99999'
  }
  const value = JSON.stringify({
    n: data.name,
    bg: data.bloodGroup,
    a: data.allergies,
    c: data.conditions,
    m: data.contact,
  })

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-md border border-slate-200 rounded-xl p-6">
        <h1 className="text-xl font-semibold">Emergency QR</h1>
        <p className="text-slate-500 mt-1">Scan to view critical info</p>
        <div className="mt-6 bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-center">
          <QRCode value={value} size={200} />
        </div>
        <div className="mt-6 text-sm text-slate-600">
          <div><span className="font-medium">Name:</span> {data.name}</div>
          <div><span className="font-medium">Blood Group:</span> {data.bloodGroup}</div>
          <div><span className="font-medium">Allergies:</span> {data.allergies.join(', ')}</div>
          <div><span className="font-medium">Conditions:</span> {data.conditions.join(', ')}</div>
          <div><span className="font-medium">Contact:</span> {data.contact}</div>
        </div>
      </div>
    </div>
  )
}