import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        
        {/* Logo/Name Left Side */}
        <Link to="/" className="text-xl font-semibold text-gray-800">
          Malaika Saeed
        </Link>

        {/* Links + Button Right Side */}
        <div className="flex items-center gap-8">
          <Link to="/" className="text-gray-600 hover:text-purple-600 transition">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-purple-600 transition">About</Link>
          <Link to="/skills" className="text-gray-600 hover:text-purple-600 transition">Skills</Link>
          <Link to="/projects" className="text-gray-600 hover:text-purple-600 transition">Projects</Link>
          <Link to="/contact" className="text-gray-600 hover:text-purple-600 transition">Contact</Link>
          
          {/* Hire Me Button */}
          <Link to="/contact" className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-medium">
            Hire Me
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar