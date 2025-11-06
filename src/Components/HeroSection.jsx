import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const roles = [
    "Software Developer",
    "UI/UX Designer",
    "Graphic Designer",
    "Web Developer",
    "App Developer",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);

  // ✨ Typing animation + role switching
  useEffect(() => {
    const currentRole = roles[currentIndex];
    if (letterIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentRole[letterIndex]);
        setLetterIndex(letterIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }

    // 🔁 Change role every 2 seconds
    const changeTimeout = setTimeout(() => {
      setDisplayText("");
      setLetterIndex(0);
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearTimeout(changeTimeout);
  }, [letterIndex, currentIndex, roles]);

  // 📝 Function to open resume
  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1dUFuMp7W7B0JI2Qy2upKUtU9eCD7oZ1o/view?usp=sharing",
      "_blank"
    );
  };

  // 🧑‍💻 Function to open GitHub
  const handleGitHubClick = () => {
    window.open("https://github.com/nnikhill", "_blank");
  };

  return (
    <section className="flex flex-col items-center justify-center text-center h-screen px-6 bg-gradient-to-b from-gray-900 via-purple-950 to-gray-900 transition-colors duration-500">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-gray-100 mb-6">
        I’m{" "}
        <span className="relative text-purple-400 inline-block">
          {displayText}
          {/* Stylish underline */}
          <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 rounded-full animate-pulse"></span>
        </span>
      </h2>

      {/* Paragraph */}
      <p className="text-gray-400 text-base md:text-lg max-w-2xl mb-8 leading-relaxed">
        I’m passionate about crafting engaging digital experiences that combine
        creativity with clean code. My focus is on building user-friendly,
        visually appealing, and efficient web solutions.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={handleResumeClick}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
        >
          View Resume
        </button>

        <button
          onClick={handleGitHubClick}
          className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-purple-600"
        >
          Visit GitHub
        </button>
      </div>
    </section>
    
  );
};

export default HeroSection;
