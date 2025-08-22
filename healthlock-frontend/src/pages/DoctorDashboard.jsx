export default function DoctorDashboard() {
  const rows = []
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <h1 className="text-xl font-semibold">Doctor Dashboard</h1>
      <p className="text-slate-500 mt-1">Request and view shared patient records</p>
      <div className="mt-6 bg-white border border-slate-200 rounded-lg overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-3">Patient</th>
              <th className="px-4 py-3">Record</th>
              <th className="px-4 py-3">Shared Until</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td className="px-4 py-6 text-slate-500" colSpan={4}>No records yet.</td>
              </tr>
            ) : rows.map((r, i) => (
              <tr key={i}>
                <td className="px-4 py-3">{r.patient}</td>
                <td className="px-4 py-3">{r.record}</td>
                <td className="px-4 py-3">{r.until}</td>
                <td className="px-4 py-3"><button className="px-3 py-1.5 rounded bg-teal-600 text-white">Download</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}