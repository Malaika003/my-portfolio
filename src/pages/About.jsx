export default function About() {
  return (
    <section className="bg-white py-20 px-8" id="about">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side Image - Width bari, shift khatam */}
        <div className="flex justify-end">
          <img
            src="/about.jpeg"
            alt="Malaika Saeed"
            className="rounded-lg shadow-lg w-full max-w-lg h-80 object-cover"
          />
        </div>

        {/* Right Side Text - Left margin add */}
        <div className="ml-4">
          <h2 className="text-4xl font-bold mb-6 text-blue-600">
            About Me
          </h2>

          <p className="text-lg leading-relaxed mb-4 text-gray-700">
            I'm a Front-End Developer and a graduation student. I enjoy building responsive and user-friendly websites. My main technologies are HTML, CSS, JavaScript, React.js and Tailwind CSS.
          </p>

          <p className="text-lg leading-relaxed mb-8 text-gray-700">
            I am continuously learning new web technologies and improving my development skills and problem-solving abilities.
          </p>

          <a 
            href="/cv.pdf" 
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-700 transition"
          >
            Download CV
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}