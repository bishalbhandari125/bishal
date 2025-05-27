import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import {
  FaGithub, FaLinkedin, FaTwitter, FaFigma,
  FaReact, FaNodeJs, FaJava, FaDatabase
} from "react-icons/fa";
import {
  SiMongodb, SiExpress, SiTailwindcss, SiDotnet, SiMysql
} from "react-icons/si";
import heroImage from "../assets/bishal1.jpg"; // update with your image

function Hero() {
  const skills = [
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaJava />, name: "Java" },
    { icon: <SiDotnet />, name: "ASP.NET" },
    { icon: <FaDatabase />, name: "SQL" },
    { icon: <SiMysql />, name: "MySQL" },
  ];

  return (

<section id="hero" className="w-screen min-h-screen bg-black text-white px-6 md:px-16 py-20 flex flex-col items-center gap-14">

  {/* Top Content: Image + Description */}
  <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start gap-12">

    {/* LEFT: Floating Image */}
    <motion.div
      className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-yellow-400"
      animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
      transition={{ repeat: Infinity, duration: 3 }}
    >
      <img src={heroImage} alt="Bishal Bhandari" className="w-full h-full object-cover" />
    </motion.div>

    {/* RIGHT: Description & Socials */}
    <div className="flex flex-col gap-5 text-center md:text-left max-w-2xl">
      <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400">
        <Typewriter
          options={{
            strings: ["Hi, I'm Bishal Bhandari"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>

      <p className="text-xl md:text-2xl text-yellow-200 font-semibold">
        Full Stack Developer
      </p>

      <p className="text-lg md:text-xl text-gray-300">
        I'm a full stack developer passionate about building modern, scalable web applications.
        I love clean code, intuitive design, and continuous learning in the tech world.
      </p>

      {/* Social Icons */}
      <div className="flex gap-6 justify-center md:justify-start text-3xl mt-2">
        <a href="https://github.com/" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FaTwitter /></a>
        <a href="https://figma.com/" target="_blank" rel="noreferrer"><FaFigma /></a>
      </div>
    </div>
  </div>

  {/* Skills Marquee - Same Width */}
  <div className="w-full max-w-6xl relative overflow-hidden py-8">

    {/* Fading Edges */}
    <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black via-black/50 to-transparent z-10 pointer-events-none" />
    <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black via-black/50 to-transparent z-10 pointer-events-none" />

    {/* Scrolling Skills */}
    <div className="flex gap-16 whitespace-nowrap w-max px-4 animate-marquee">
      {[...skills, ...skills].map((skill, idx) => (
        <div
          key={idx}
          className="flex items-center gap-3 px-4 text-white hover:text-yellow-300 transition text-2xl md:text-3xl"
        >
          <div className="text-4xl">{skill.icon}</div>
          <span>{skill.name}</span>
        </div>
      ))}
    </div>

    {/* Marquee Keyframes */}
    <style>
      {`
        @keyframes marquee {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}
    </style>
  </div>
</section>
  );
}

export default Hero;
