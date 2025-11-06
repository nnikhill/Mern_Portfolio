import React, { useState } from "react";

// ✅ Import project images
import project1 from "../assets/project-1.jpg";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.jpg";
import project4 from "../assets/project-4.png";
import project5 from "../assets/project-5.png";
import project6 from "../assets/project-6.png";

const projects = [
  { id: 1, title: "Finance App", category: "Web Development", img: project1, link: "https://github.com/nnikhill" },
  { id: 2, title: "Orizon Dashboard", category: "Web Development", img: project2, link: "https://github.com/nnikhill" },
  { id: 3, title: "Fundo Landing Page", category: "Web Design", img: project3, link: "https://github.com/nnikhill" },
  { id: 4, title: "Brawlhalla Game UI", category: "Applications", img: project4, link: "https://github.com/nnikhill" },
  { id: 5, title: "DSM Portfolio", category: "Web Design", img: project5, link: "https://github.com/nnikhill" },
  { id: 6, title: "MetaSpark", category: "Web Design", img: project6, link: "https://github.com/nnikhill" },
];

const categories = ["All", "Web Design", "Applications", "Web Development"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-purple-50 to-purple-100 dark:from-gray-900 dark:via-purple-950 dark:to-gray-900 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <header className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-purple-700 dark:text-purple-300 mb-3">
            My Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            A collection of my recent works — websites, dashboards, and apps.
          </p>
        </header>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-purple-700 text-white border-purple-700 shadow-md"
                  : "bg-white text-purple-700 border-purple-400 hover:bg-purple-100 dark:bg-gray-800 dark:text-purple-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Project Details */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {project.category}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
