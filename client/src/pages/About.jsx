import { motion } from "framer-motion";

function About() {
  const items = [
    "👋 My name is Bishal Bhandari.",
    "💻 I specialize in Full Stack Development.",
    "☁️ I love working with Cloud & DevOps tools.",
    "🚀 Let’s build something amazing together.",
  ];

  return (
    <section className="h-[200vh] bg-gray-100 flex items-center justify-center overflow-hidden">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        <motion.div
          className="flex space-x-16"
          style={{ display: "flex" }}
          animate={{ x: ["0%", "-200%"] }}  // Moves all items to left
          transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
        >
          {items.map((text, index) => (
            <div
              key={index}
              className="min-w-[100vw] flex items-center justify-center text-3xl md:text-5xl font-bold text-black"
            >
              {text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;
