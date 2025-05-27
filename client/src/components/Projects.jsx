import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom"; // for view more routing
import projects from "../data/projectsData";

// Dummy project data
// const projects = [
//   {
//     id: 1,
//     title: "Portfolio Website",
//     description: "A responsive portfolio built using React, Vite, and TailwindCSS.",
//     image: "https://via.placeholder.com/400x240",
//     github: "https://github.com/",
//     live: "https://yourportfolio.com"
//   },
//   {
//     id: 2,
//     title: "Blog Platform",
//     description: "Full-stack MERN blog application with Markdown support and admin dashboard.",
//     image: "https://via.placeholder.com/400x240",
//     github: "https://github.com/",
//     live: "#"
//   },
//   {
//     id: 3,
//     title: "Task Manager",
//     description: "Kanban-style task manager app with drag-and-drop support.",
//     image: "https://via.placeholder.com/400x240",
//     github: "https://github.com/",
//     live: "#"
//   },
//   {
//     id: 4,
//     title: "E-commerce Site",
//     description: "Modern e-commerce frontend with cart and checkout features.",
//     image: "https://via.placeholder.com/400x240",
//     github: "https://github.com/",
//     live: "#"
//   },
// ];

function Projects() {
  return (
    <section id="projects" className="w-full min-h-screen bg-black text-white py-20 px-6 md:px-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition p-4 flex flex-col">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">{project.title}</h3>
            <p className="text-sm text-gray-300 flex-grow">{project.description}</p>

            <div className="flex gap-4 mt-4 text-xl">
              <a href={project.github} target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-600">
                <FaGithub />
              </a>
              <a href={project.live} target="_blank" rel="noreferrer" className="text-green-400 hover:text-green-600">
                <FaExternalLinkAlt />
              </a>
            </div>

            <Link
              to={`/projects/${project.id}`}
              className="mt-6 inline-block text-center bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 rounded-lg transition"
            >
              View More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
