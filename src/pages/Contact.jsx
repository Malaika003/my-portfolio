export default function Contact() {
  return (
    <section className="py-24 px-6 relative min-h-screen" id="contact">
      {/* Dark Blue Background - Same as Projects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 z-0"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-300 text-sm font-semibold tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">Let's Connect</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Have a project idea or want to collaborate? I'd love to hear from you</p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          
          {/* Email Card */}
          <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-blue-400 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors">
              <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Email Me</h3>
            <a href="mailto:m99252420@gmail.com" className="text-blue-600 hover:text-blue-700 font-medium break-all">
              m99252420@gmail.com
            </a>
          </div>

          {/* Phone Card */}
          <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-blue-400 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors">
              <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Call Me</h3>
            <a href="tel:03107067167" className="text-blue-600 hover:text-blue-700 font-medium text-lg">
              0310 7067167
            </a>
          </div>

          {/* LinkedIn Card */}
          <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-blue-400 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors">
              <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">LinkedIn</h3>
            <a 
              href="https://linkedin.com/in/malaika-saeed/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              linkedin.com/in/malaika-saeed
            </a>
          </div>
        </div>

        {/* Profile + CV Download Box */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border-white/20 text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <span className="text-3xl font-bold text-white">MS</span>
          </div>
          <h3 className="text-3xl font-bold text-white mb-2">Malaika Saeed</h3>
          <p className="text-blue-300 font-semibold mb-6">Frontend Developer & University Student</p>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Currently building projects with React & Tailwind while learning Node.js for backend development. 
            Open to freelance work, collaborations, and new learning opportunities.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:m99252420@gmail.com?subject=Project Inquiry" 
              className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
            >
              Send Message
            </a>

            {/* CV Download Button */}
            <a 
              href="/Malaika_Saeed_CV.pdf"
              download="Malaika_Saeed_CV.pdf"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border-2 border-blue-400 transition-all duration-300 hover:border-blue-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}