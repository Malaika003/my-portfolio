import React from 'react';

export default function Skills() {
  const skills = [
    { name: "HTML5", level: "Expert" },
    { name: "CSS3 / Tailwind CSS", level: "Advanced" },
    { name: "JavaScript / ES6+", level: "Advanced" },
    { name: "React.js", level: "Advanced" },
    { name: "PHP", level: "Intermediate" },
    { name: "Responsive Web Design", level: "Expert" },
    { name: "Git & GitHub", level: "Intermediate" },
    { name: "Communication Skills", level: "Excellent" },
    { name: "Problem Solving", level: "Strong" },
  ];

  return (
    <section 
      className="py-20 px-8 relative"
      id="skills"
      style={{
        backgroundImage: "url('/skills.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* White overlay for text readability */}
      <div className="absolute inset-0 bg-white/90"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side - Skills Grid */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-blue-600">
            My Skills
          </h2>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            I blend technical expertise with strong soft skills to build modern, 
            user-friendly web applications. Every project is an opportunity to learn 
            and create something impactful.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="p-4 bg-white/80 backdrop-blur-sm rounded-lg border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-semibold text-gray-800">{skill.name}</h3>
                <p className="text-sm text-blue-600 mt-1">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Description */}
        <div className="flex justify-center">
          <div className="ml-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              What I Do Best
            </h3>
            
            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">▹</span>
                <span><strong>Web Development:</strong> Pixel-perfect, responsive websites using React & Tailwind that work flawlessly on every device</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">▹</span>
                <span><strong>Clean Code:</strong> Writing maintainable, scalable code following modern best practices and clean architecture</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">▹</span>
                <span><strong>Communication:</strong> Excellent collaboration with teams and clients to turn ideas into powerful digital solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">▹</span>
                <span><strong>Continuous Learning:</strong> Always exploring new technologies like Next.js, TypeScript & modern PHP frameworks</span>
              </li>
            </ul>

            <div className="mt-8 p-6 bg-blue-50/90 backdrop-blur-sm rounded-lg border-l-4 border-blue-600 shadow-sm">
              <p className="text-gray-800 italic text-lg">
                "I'm not just coding websites, I'm crafting digital experiences that solve real problems."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}