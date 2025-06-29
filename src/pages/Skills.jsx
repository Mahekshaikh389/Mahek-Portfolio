// const skills = [
//   { name: "HTML", icon: "/icons/icons8-html-48.png" },
//   { name: "CSS", icon: "/icons/icons8-css-48.png" },
//   { name: "Docker", icon: "/icons/icons8-docker-48.png" },
//   { name: "Javascript", icon: "/icons/icons8-javascript-48.png" },
//   { name: "MongoDB", icon: "/icons/icons8-mongodb-24.png" },
//   { name: "Python", icon: "/icons/icons8-python-48.png" },
//   { name: "React", icon: "/icons/icons8-react-32.png" },
//   { name: "React-Native", icon: "/icons/icons8-react-native-48.png" },
//   { name: "Redux", icon: "/icons/icons8-redux-50.png" },
//   { name: "SQL", icon: "/icons/icons8-sql-60.png" },
//   { name: "Tailwind-CSS", icon: "./icons/icons8-tailwind-css-48.png" },
//   { name: "VS-Code", icon: "/icons/icons8-vs-code-48.png" },
//   { name: "Power BI", icon: "/icons/icons8-power-bi-48.png" },
//   { name: "AWS", icon: "/icons/icons8-aws-48.png" },
//   { name: "NodeJs", icon: "/icons/icons8-nodejs-48.png" },
// ];

// export default function Skills() {
//   return (
//     <section id="skills" className="">
//       <div className="max-w-6xl mx-auto text-center mb-30">
//         <h2 className="text-4xl font-bold mb-8  text-[#d1c2f2]  inline-block">Skills</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-10">
//           {skills.map((skill) => (
//             <div 
//               key={skill.name}
//               className="flex flex-col items-center justify-center p-4 bg-[#110d24] bg-linear-45 from [#141c29] via-[#141c29] to-[#9c79e8] rounded-lg hover:-rotate-x-40 transition-transform"
//             >
//               <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-3" />
//               <p className="text-sm text-white">{skill.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }























import { useState, useEffect, useRef } from "react";

const skills = [
  { name: "HTML", icon: "/icons/icons8-html-48.png", category: "Frontend" },
  { name: "CSS", icon: "/icons/icons8-css-48.png", category: "Frontend" },
  { name: "JavaScript", icon: "/icons/icons8-javascript-48.png", category: "Frontend" },
  { name: "React", icon: "/icons/icons8-react-32.png", category: "Frontend" },
  { name: "Tailwind CSS", icon: "./icons/icons8-tailwind-css-48.png", category: "Frontend" },
  { name: "Redux", icon: "/icons/icons8-redux-50.png", category: "Frontend" },
  { name: "Node.js", icon: "/icons/icons8-nodejs-48.png", category: "Backend" },
  { name: "Express.js", icon: "/icons/icons8-express-js.svg", category: "Backend" },
  { name: "MongoDB", icon: "/icons/icons8-mongodb-24.png", category: "Database" },
  { name: "SQL", icon: "/icons/icons8-sql-60.png", category: "Database" },
  { name: "Python", icon: "/icons/icons8-python-48.png", category: "Backend" },
  { name: "React Native", icon: "/icons/icons8-react-native-48.png", category: "Mobile" },
  { name: "Docker", icon: "/icons/icons8-docker-48.png", category: "DevOps" },
  { name: "AWS", icon: "/icons/icons8-aws-48.png", category: "Cloud" },
  { name: "VS Code", icon: "/icons/icons8-vs-code-48.png", category: "Tools" },
  { name: "Power BI", icon: "/icons/icons8-power-bi-48.png", category: "Analytics" },
];

export default function Skills() {
  const [visibleCards, setVisibleCards] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef(null);

  const categories = ["All", "Frontend", "Backend", "Database", "Mobile", "DevOps", "Cloud", "Tools", "Analytics"];

  const filteredSkills = activeFilter === "All" 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate cards one by one
            filteredSkills.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...new Set([...prev, index])]);
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [filteredSkills]);

  // Reset animations when filter changes
  useEffect(() => {
    setVisibleCards([]);
    const timer = setTimeout(() => {
      filteredSkills.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards(prev => [...new Set([...prev, index])]);
        }, index * 50);
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [activeFilter]);

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .skill-card {
            backdrop-filter: blur(10px);
            border: 1px solid rgba(156, 121, 232, 0.2);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .skill-card:hover {
            transform: translateY(-8px) scale(1.05);
            border-color: rgba(156, 121, 232, 0.5);
            box-shadow: 0 20px 40px rgba(156, 121, 232, 0.15), 0 0 20px rgba(156, 121, 232, 0.1);
          }

          .skill-card:hover .skill-icon {
            transform: scale(1.1) rotate(5deg);
          }

          .skill-icon {
            transition: transform 0.3s ease;
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
          }

          .filter-btn {
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
          }

          .filter-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
            transition: left 0.5s ease;
          }

          .filter-btn:hover::before {
            left: 100%;
          }

          .animate-in {
            animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }

          .animate-out {
            opacity: 0;
            transform: translateY(20px);
          }

          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(30px) scale(0.9);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .section-title {
            background: linear-gradient(135deg, #d1c2f2, #9c79e8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            position: relative;
          }

          .section-title::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 3px;
            background: linear-gradient(90deg, #9c79e8, #d1c2f2);
            border-radius: 2px;
          }

          .floating-bg {
            position: absolute;
            opacity: 0.1;
            pointer-events: none;
            animation: float 6s ease-in-out infinite;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
        `
      }} />
      
      <section id="skills" className="py-20 px-6 relative overflow-hidden" ref={sectionRef}>
        {/* Floating background elements */}
        <div className="floating-bg top-10 left-10 w-32 h-32 bg-[#9c79e8] rounded-full blur-3xl"></div>
        <div className="floating-bg bottom-20 right-10 w-48 h-48 bg-[#d1c2f2] rounded-full blur-3xl" style={{animationDelay: '3s'}}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title text-5xl font-bold mb-6 inline-block">
              Technical Skills
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              A comprehensive toolkit of modern technologies and frameworks I use to build 
              scalable, efficient, and user-friendly applications.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`filter-btn px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-[#9c79e8] to-[#d1c2f2] text-white shadow-lg shadow-[#9c79e8]/25'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6">
            {filteredSkills.map((skill, index) => (
              <div
                key={`${skill.name}-${activeFilter}`}
                className={`skill-card group relative p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl text-center ${
                  visibleCards.includes(index) ? 'animate-in' : 'animate-out'
                }`}
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                {/* Skill Icon */}
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#9c79e8]/20 to-[#d1c2f2]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="skill-icon w-12 h-12 mx-auto relative z-10" 
                  />
                </div>
                
                {/* Skill Name */}
                <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-[#d1c2f2] transition-colors duration-300">
                  {skill.name}
                </h3>
                
                {/* Category Badge */}
                <span className="inline-block px-2 py-1 text-xs font-medium bg-[#9c79e8]/20 text-[#d1c2f2] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {skill.category}
                </span>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#9c79e8]/10 to-[#d1c2f2]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Technologies", value: skills.length },
              { label: "Years Experience", value: "1+" },
              { label: "Projects Built", value: "10+" },
              { label: "Always Learning", value: "∞" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#9c79e8]/30 transition-all duration-300">
                <div className="text-3xl font-bold text-[#d1c2f2] mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}