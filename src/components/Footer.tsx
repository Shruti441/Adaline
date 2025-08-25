export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-white font-bold mb-4">Adaline</h3>
          <p>Building the future of LLM operations.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Products</h4>
          <ul>
            {['Iterate', 'Evaluate', 'Deploy', 'Monitor'].map(item => (
              <li key={item} className="py-1 hover:text-white cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Resources</h4>
          <ul>
            {['Docs', 'Blog', 'Pricing', 'Support'].map(item => (
              <li key={item} className="py-1 hover:text-white cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul>
            {['About Us', 'Careers', 'Contact'].map(item => (
              <li key={item} className="py-1 hover:text-white cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-center text-sm mt-10">&copy; {new Date().getFullYear()} Adaline.ai. All rights reserved.</p>
    </footer>
  )
}
