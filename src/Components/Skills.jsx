import React from "react";

const Skills = () => {
  // Outer circle icons
  const outerSkills = [
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/node.js/339933" },
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
    { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter/02569B" },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
    { name: "CSS3", icon: "https://cdn.simpleicons.org/css3/1572B6" },
  ];

  // Inner circle icons
  const innerSkills = [
    { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus/00599C" },
    { name: "Java", icon: "https://cdn.simpleicons.org/java/007396" },
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
    { name: "Canva", icon: "https://cdn.simpleicons.org/canva/00C4CC" },
    { name: "Photoshop", icon: "https://cdn.simpleicons.org/adobephotoshop/31A8FF" },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-gradient-to-b from-black via-purple-950 to-gray-900 text-white relative overflow-hidden"
    >
      {/* Animated Gradient Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-purple-700/10 to-purple-900/30 blur-3xl opacity-30 animate-pulse"></div>

      <div className="relative max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-purple-400 mb-14 tracking-wide">
          Skills & Tools
        </h2>

        <div className="flex flex-col items-center justify-center relative">
          {/* Outer Circle (Rotating Animation) */}
          <div className="relative outer-circle w-[380px] h-[380px] md:w-[460px] md:h-[460px] flex items-center justify-center animate-slow-spin">
            {outerSkills.map((skill, idx) => {
              const angle = (360 / outerSkills.length) * idx;
              return (
                <div
                  key={skill.name}
                  className="skill-item absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `rotate(${angle}deg) translate(190px) rotate(${-angle}deg)`,
                  }}
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-900 border border-purple-600 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] flex items-center justify-center hover:scale-110 transition-all duration-300">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-8 h-8 md:w-9 md:h-9 object-contain"
                    />
                  </div>
                </div>
              );
            })}

            {/* Inner Circle (Slower Rotation) */}
            <div className="absolute inner-circle w-[260px] h-[260px] md:w-[320px] md:h-[320px] flex items-center justify-center animate-slower-spin">
              {innerSkills.map((skill, idx) => {
                const angle = (360 / innerSkills.length) * idx;
                return (
                  <div
                    key={skill.name}
                    className="skill-item absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      transform: `rotate(${angle}deg) translate(130px) rotate(${-angle}deg)`,
                    }}
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-900 border border-purple-600 shadow-[0_0_15px_rgba(168,85,247,0.25)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] flex items-center justify-center hover:scale-110 transition-all duration-300">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-7 h-7 md:w-8 md:h-8 object-contain"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center Label */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <h3 className="text-purple-300 font-semibold text-lg md:text-xl">
                My Tech Stack
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Tools & Technologies
              </p>
            </div>
          </div>

          {/* Caption */}
          <p className="mt-10 text-center text-gray-300 max-w-2xl leading-relaxed">
            I specialize in creating full-stack solutions using these technologies — blending frontend creativity, backend logic, and design precision.
          </p>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slow-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes slower-spin {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .animate-slow-spin {
          animation: slow-spin 40s linear infinite;
        }

        .animate-slower-spin {
          animation: slower-spin 60s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
