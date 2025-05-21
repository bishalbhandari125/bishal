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

function Home() {
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
    <section className="w-screen h-screen bg-black text-white flex items-center justify-center px-6 md:px-24 overflow-hidden">
      <div className="w-full max-w-6xl flex flex-col items-center text-center gap-6">

        {/* Hi there */}
        <h1 className="text-4xl md:text-5xl text-yellow-400 font-medium">Hi there,</h1>

        {/* Floating image */}
        <motion.div
          className="w-52 h-52 rounded-full overflow-hidden"
          animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <img src={heroImage} alt="Bishal Bhandari" className="w-full h-full object-cover" />
        </motion.div>

        {/* Typewriter Name */}
        <div className="text-5xl md:text-7xl font-extrabold text-yellow-300">
          <Typewriter
            options={{
              strings: ["I am Bishal Bhandari"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        {/* Title */}
        <p className="text-2xl md:text-3xl text-yellow-200 font-semibold">Full Stack Developer</p>

        {/* Social Links */}
        <div className="flex gap-6 text-5xl mt-1">
          <a href="https://github.com/" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="https://figma.com/" target="_blank" rel="noreferrer"><FaFigma /></a>
        </div>
                
                {/* Skills Scroll Area with Fading Edges */}
<div className="relative w-full py-8 overflow-hidden">

  {/* Fading Edges */}
  <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black via-black/50 to-transparent z-10 pointer-events-none" />
  <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black via-black/50 to-transparent z-10 pointer-events-none" />

  {/* Inline Marquee Animation */}
  <div
    className="flex gap-16 whitespace-nowrap w-max"
    style={{
      animation: "marquee 50s linear infinite"
    }}
  >
    {[...skills, ...skills].map((skill, idx) => (
      <div
        key={idx}
        className="flex items-center gap-3 px-4 text-white hover:text-yellow-300 transition text-4xl md:text-4xl"
      >
        <div className="text-5xl">{skill.icon}</div>
        <span>{skill.name}</span>
      </div>
    ))}
  </div>

  {/* Custom Keyframes */}
  <style>
    {`
      @keyframes marquee {
        0%   { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
    `}
  </style>
</div>



        {/* CTA Buttons */}
        <div className="flex gap-6 mt-4 flex-wrap justify-center">
          <a
            href="#contact"
            className="px-8 py-4 border border-white text-lg rounded-lg text-white font-semibold hover:bg-white hover:text-black transition duration-300"
          >
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-8 py-4 border border-purple-500 text-lg rounded-lg text-purple-400 font-semibold hover:bg-purple-500 hover:text-white transition duration-300"
          >
            View Resume
          </a>
        </div>

      </div>
    </section>
  );
}

export default Home;
