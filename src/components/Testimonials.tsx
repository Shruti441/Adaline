const testimonials = [
  {
    name: 'Jane Doe',
    role: 'CTO at CompanyX',
    quote: 'Adaline.ai transformed how we deploy language models. Absolutely amazing!',
    img: '/testimonial1.jpg', // place a sample image in /public
  },
  {
    name: 'John Smith',
    role: 'AI Researcher',
    quote: 'The tools and analytics make model iteration so much faster and easier.',
    img: '/testimonial2.jpg',
  },
]

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">What our users say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {testimonials.map(({ name, role, quote, img }) => (
          <div key={name} className="bg-white rounded-lg p-8 shadow-lg">
            <p className="italic text-gray-700 mb-6">"{quote}"</p>
            <div className="flex items-center space-x-4">
              <img src={img} alt={name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <p className="font-semibold">{name}</p>
                <p className="text-gray-500 text-sm">{role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
