import { useState } from 'react';

function Experience() {
  const [view, setView] = useState('education'); // Toggle state

  const education = [
    {
      title: "BSc. CSIT – Tribhuvan University",
      subtitle: "Kathmandu, Nepal",
      date: "2017 – 2021",
      icon: "🎓",
      details: "Bachelor's in Computer Science and Information Technology",
    },
    {
      title: "Postgraduate Diploma – Full Stack Development",
      subtitle: "Currently Pursuing",
      date: "2024 – Present",
      icon: "📚",
      details: "Focusing on modern web technologies and scalable applications.",
    },
  ];

  const experience = [
    {
      title: "Freelance Web Developer",
      subtitle: "Remote",
      date: "2022 – Present",
      icon: "💻",
      details: "Built websites and apps for startups and local businesses using MERN stack.",
    },
    {
      title: "Intern – Software Developer",
      subtitle: "Tech Firm Nepal",
      date: "2021 – 2022",
      icon: "🛠️",
      details: "Worked on frontend UI for internal tools with React and Tailwind.",
    },
    {
      title: "Open Source Contributor",
      subtitle: "GitHub Projects",
      date: "2023 – Present",
      icon: "🌍",
      details: "Contributed to several open-source tools and libraries in React and Node.js.",
    }
  ];

  const renderTimeline = (items) => (
    <div className="space-y-6">
      {items.map((item, idx) => (
        <div key={idx} className="border-l-4 border-yellow-400 pl-6 relative">
          <span className="absolute left-[-1.2rem] top-0 text-2xl">{item.icon}</span>
          <h4 className="text-xl font-bold text-yellow-200">{item.title}</h4>
          <p className="text-sm text-gray-400 italic">{item.subtitle}</p>
          <p className="text-sm text-gray-500">{item.date}</p>
          <p className="text-md text-white mt-1">{item.details}</p>
        </div>
      ))}
    </div>
  );

  return (
    <section id="experience" className="w-full min-h-screen bg-black text-white py-20 px-6 md:px-16 flex flex-col justify-center">
      <h2 className="text-4xl font-bold text-center text-yellow-400 mb-10">
        Education & Experience
      </h2>

      {/* Toggle for Small Screens */}
      <div className="md:hidden flex justify-center mb-8 gap-4">
        <button
          onClick={() => setView('education')}
          className={`px-4 py-2 rounded-full text-sm font-semibold border ${view === 'education' ? 'bg-yellow-400 text-black' : 'border-yellow-400 text-yellow-400'}`}
        >
          Education
        </button>
        <button
          onClick={() => setView('experience')}
          className={`px-4 py-2 rounded-full text-sm font-semibold border ${view === 'experience' ? 'bg-yellow-400 text-black' : 'border-yellow-400 text-yellow-400'}`}
        >
          Experience
        </button>
      </div>

      {/* Small screen: show selected */}
      <div className="md:hidden max-w-2xl mx-auto">
        {view === 'education' ? (
          <>
            <h3 className="text-2xl font-semibold mb-6 text-yellow-300">🎓 Education</h3>
            {renderTimeline(education)}
          </>
        ) : (
          <>
            <h3 className="text-2xl font-semibold mb-6 text-yellow-300">💼 Experience</h3>
            {renderTimeline(experience)}
          </>
        )}
      </div>

      {/* Large screen: show both */}
      <div className="hidden md:grid grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-yellow-300">🎓 Education</h3>
          {renderTimeline(education)}
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-yellow-300">💼 Experience</h3>
          {renderTimeline(experience)}
        </div>
      </div>
    </section>
  );
}

export default Experience;
