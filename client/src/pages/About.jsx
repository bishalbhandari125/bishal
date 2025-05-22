function About() {
  return (
    <section id="about" className="w-screen min-h-screen bg-gray-100 text-black flex flex-col items-center justify-center px-6 py-20">
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      
      <p className="max-w-3xl text-lg text-center mb-6">
        Hello! I’m Bishal Bhandari — a passionate full stack developer with a love for turning ideas into functional web applications.
        I enjoy crafting clean, efficient code and continuously learning new technologies in web development.
      </p>

      <div className="text-left max-w-2xl space-y-3 text-lg">
        <h3 className="text-xl font-semibold text-yellow-600">Education</h3>
        <ul className="list-disc list-inside">
          <li>
            🎓 Bachelor's in Computer Science and Information Technology (CSIT)  
            <br />from Tribhuvan University, Nepal
          </li>
          <li>
            📚 Currently pursuing Postgraduate studies in Full Stack Software Development
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
