const features = [
  {
    title: 'Iterate',
    desc: 'Create, test and improve your prompts and datasets.',
    icon: (
      <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M12 20l9-5-9-5-9 5 9 5z" />
        <path d="M12 12v8" />
        <path d="M12 12l6-3" />
        <path d="M6 9l6 3" />
      </svg>
    )
  },
  {
    title: 'Evaluate',
    desc: 'Analyze performance with rich visualizations and feedback.',
    icon: (
      <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx={12} cy={12} r={10} />
        <path d="M12 6v6l4 2" />
      </svg>
    )
  },
  {
    title: 'Deploy',
    desc: 'Seamlessly deploy your LLM applications at scale.',
    icon: (
      <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M3 12l9-9 9 9M4 12v8a4 4 0 004 4h8a4 4 0 004-4v-8" />
        <path d="M9 21v-6h6v6" />
      </svg>
    )
  },
  {
    title: 'Monitor',
    desc: 'Keep track of your models’ health and performance over time.',
    icon: (
      <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx={12} cy={12} r={10} />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    )
  },
]

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
        {features.map(({ title, desc, icon }) => (
          <div key={title} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition cursor-pointer">
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
