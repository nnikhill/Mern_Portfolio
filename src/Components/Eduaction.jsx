import React from "react";
import { BookOpen } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      title: "12th Grade (CH+2 HIGH SCHOOL)",
      year: "2020 — 2022",
      description:
        "Completed higher secondary education with a focus on science and mathematics, building a strong foundation for future technical studies.",
    },
    {
      title:
        "B.Tech in Computer Science and Engineering (PUNJAB TECHNICAL UNIVERSITY)",
      year: "2022 — 2026",
      description:
        "Currently pursuing a Bachelor of Technology in Computer Science and Engineering, gaining hands-on experience in programming, software development, and emerging technologies.",
    },
  ];

  const experienceData = [
    {
      title: "Web Development Workshops Attendee",
      year: "June 2024",
      description:
        "Participated in hands-on workshops focused on HTML, CSS, and Tailwind CSS, gaining practical knowledge in responsive web design and modern UI development.",
    },
    {
      title: "Interview Coordinator (ISB Mohali)",
      year: "Nov 2024",
      description:
        "Assisted in coordinating interview schedules and logistics at the Indian School of Business (ISB) Mohali, ensuring smooth communication between candidates and interview panels.",
    },
  ];

  return (
    <section
      id="education"
      className="py-20 px-6 bg-gradient-to-b from-gray-900 via-purple-950 to-black text-white"
    >
      <div className="max-w-4xl mx-auto">
        {/* 🌟 Main Heading */}
        <h2 className="text-4xl font-bold mb-12 text-center text-purple-400">
          Education
        </h2>

        {/* 🎓 Education Section */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <div className="bg-purple-700/30 p-3 rounded-xl shadow-md">
              <BookOpen className="text-purple-400 w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold text-white ml-4">
              Education
            </h3>
          </div>

          <div className="relative border-l-2 border-purple-700/60 pl-8 ml-4 space-y-10">
            {educationData.map((edu, index) => (
              <div key={index} className="relative">
                {/* Dot */}
                <span className="absolute -left-[10px] top-2 w-4 h-4 bg-purple-500 rounded-full border-2 border-white shadow"></span>

                {/* Card */}
                <div className="bg-gray-900/70 rounded-xl shadow-lg p-5 hover:bg-purple-950/60 hover:shadow-purple-700/40 transition duration-300">
                  <h4 className="font-semibold text-lg text-purple-300">
                    {edu.title}
                  </h4>
                  <span className="block text-sm font-medium text-gray-400 mb-2">
                    {edu.year}
                  </span>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 💼 Experience Section */}
        <div>
          <div className="flex items-center mb-6">
            <div className="bg-purple-700/30 p-3 rounded-xl shadow-md">
              <BookOpen className="text-purple-400 w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold text-white ml-4">
              Experience
            </h3>
          </div>

          <div className="relative border-l-2 border-purple-700/60 pl-8 ml-4 space-y-10">
            {experienceData.map((exp, index) => (
              <div key={index} className="relative">
                {/* Dot */}
                <span className="absolute -left-[10px] top-2 w-4 h-4 bg-purple-500 rounded-full border-2 border-white shadow"></span>

                {/* Card */}
                <div className="bg-gray-900/70 rounded-xl shadow-lg p-5 hover:bg-purple-950/60 hover:shadow-purple-700/40 transition duration-300">
                  <h4 className="font-semibold text-lg text-purple-300">
                    {exp.title}
                  </h4>
                  <span className="block text-sm font-medium text-gray-400 mb-2">
                    {exp.year}
                  </span>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
