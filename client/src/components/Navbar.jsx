import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="w-full px-8 py-4 bg-black text-white flex justify-between items-center fixed top-0 z-50 shadow-md">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-yellow-400">BB</h1>

      {/* Links */}
      <div className="flex gap-6 text-lg">
        <Link to="home" smooth duration={500} className="cursor-pointer hover:text-yellow-400">Home</Link>
        <Link to="about" smooth duration={500} className="cursor-pointer hover:text-yellow-400">About Me</Link>
        <Link to="contact" smooth duration={500} className="cursor-pointer hover:text-yellow-400">Contact</Link>
        <a href="/resume.pdf" target="_blank" className="hover:text-yellow-400">Resume</a>
      </div>
    </nav>
  );
}

export default Navbar;
