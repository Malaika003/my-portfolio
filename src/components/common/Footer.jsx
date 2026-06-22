function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 ">
      <div className="max-w-7xl mx-auto px-8 py-8 text-center">
        <p className="text-lg font-semibold text-white mb-2">Malaika Saeed</p>
        <p className="text-sm mb-4">Front-End Developer</p>
        
        {/* Social Icons - GitHub, LinkedIn, Email */}
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com" target="_blank" className="hover:text-white transition">GitHub</a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-white transition">LinkedIn</a>
          <a href="mailto:yourmail@gmail.com" className="hover:text-white transition">Email</a>
        </div>
        
        <p className="text-xs border-t border-gray-800 pt-4">
          © 2026 Malaika Saeed. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer