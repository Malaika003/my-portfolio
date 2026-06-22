export default function Projects() {
  const projects = [
    {
      title: "Explore the World",
      description: "A travel and tourism website featuring destination guides, interactive maps, booking system, and user reviews. Built with smooth animations and modern UI.",
      tech: ["React", "Tailwind", "Mapbox API", "Framer Motion"],
      features: ["Interactive Maps", "Booking System", "Destination Guide", "User Reviews"],
      link: "http://tripi-exploretheworld.netlify.app"
    },
    {
      title: "Portfolio Website",
      description: "A modern responsive portfolio with dark/light mode toggle, smooth animations, contact form with email integration, and SEO optimization. Achieved 98% Lighthouse score.",
      tech: ["React", "Tailwind", "Framer Motion", "EmailJS"],
      features: ["Dark Mode", "Smooth Animations", "SEO Optimized", "Fast Performance"],
      link: "#"
    },
    {
      title: "Food Website",
      description: "A modern food delivery website with interactive menu, online ordering, table reservation, and customer reviews. Fully responsive and mobile-first design.",
      tech: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      features: ["Online Ordering", "Menu Filter", "Table Reservation", "Customer Reviews"],
      link: "http://food-app-portal.netlify.app"
    },
    {
      title: "Share My Ride",
      description: "A ride-sharing platform website where users can post rides, find travel companions, and connect with drivers. Includes user authentication and booking system.",
      tech: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      features: ["User Authentication", "Ride Posting", "Search & Filter", "Booking System"],
      link: "#"
    }
  ]

  const experience = [
    { 
      year: "Currently", 
      role: "Frontend Developer & Student", 
      company: "University Projects", 
      desc: "Designing and developing websites for multiple university projects. Focused on clean UI, responsive design, and modern frontend practices using React and Tailwind." 
    },
    { 
      year: "2023 - Present", 
      role: "Self-Taught Developer", 
      company: "Learning Journey", 
      desc: "Started learning web development from scratch. Built projects with HTML, CSS, JavaScript, and gradually moved to React and modern frameworks." 
    },
    { 
      year: "Next Goal", 
      role: "Full-Stack Developer", 
      company: "In Progress", 
      desc: "Currently expanding skills into backend development with Node.js. Excited to build complete end-to-end applications in the near future." 
    }
  ]

  return (
    <section className="py-24 px-6 relative min-h-screen" id="projects">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <p className="text-blue-300 text-sm font-semibold tracking-widest uppercase mb-3">My Work</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">Featured Projects</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Learning, building, and growing one project at a time</p>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-10">My Journey So Far</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {experience.map((exp, i) => (
              <div key={i} className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border-white/10 hover:border-blue-400/50 transition-all duration-300">
                <p className="text-blue-400 text-sm font-semibold mb-2">{exp.year}</p>
                <h4 className="text-xl font-bold text-white mb-1">{exp.role}</h4>
                <p className="text-blue-200 text-sm mb-3">{exp.company}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-blue-400">
              <div className="p-6 h-full flex-col">
                <div className="text-5xl font-bold text-blue-100 mb-3">0{index + 1}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-5 leading-relaxed flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature, i) => (
                    <span key={i} className="flex items-center gap-1 text-xs text-blue-700 bg-blue-50 px-2 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>{feature}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-md">{tech}</span>
                  ))}
                </div>

                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 mt-auto"
                >
                  View Project <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center p-10 bg-white/10 backdrop-blur-md rounded-3xl border-white/20">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Create Something Amazing</h3>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            I'm a passionate frontend developer and university student, constantly learning and building. 
            Currently mastering React and Tailwind, while diving into Node.js for backend development. 
            If you have an idea, let's turn it into a real project together.
          </p>
          <a href="#contact" className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/30">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
