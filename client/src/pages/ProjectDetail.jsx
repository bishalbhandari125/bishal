import { useParams, Link } from "react-router-dom";
import projects from "../data/projectsData";

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="w-full min-h-screen bg-black text-white flex items-center justify-center px-6 py-20 text-center">
        <div>
          <h1 className="text-4xl text-yellow-400 font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-400">The project you're looking for doesn't exist.</p>
          <Link to="/" className="mt-6 inline-block bg-yellow-400 text-black font-semibold px-6 py-2 rounded-lg hover:bg-yellow-300 transition">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">{project.title}</h1>
        <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg shadow-xl mb-6" />
        <p className="text-lg text-gray-300 mb-6">{project.description}</p>
        <div className="flex gap-6 justify-center text-xl">
          <a href={project.github} target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-600">GitHub</a>
          <a href={project.live} target="_blank" rel="noreferrer" className="text-green-400 hover:text-green-600">Live Demo</a>
        </div>
        <Link to="/" className="mt-10 inline-block bg-yellow-400 text-black font-semibold px-6 py-2 rounded-lg hover:bg-yellow-300 transition">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ProjectDetail;
