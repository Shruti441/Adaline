const stats = [
  { label: 'Companies', value: '100+' },
  { label: 'Models deployed', value: '2500+' },
  { label: 'Requests processed', value: '1M+' },
]

export default function Stats() {
  return (
    <section className="bg-indigo-600 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex justify-around text-center">
        {stats.map(({ label, value }) => (
          <div key={label}>
            <p className="text-4xl font-bold">{value}</p>
            <p className="uppercase tracking-widest mt-2">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
