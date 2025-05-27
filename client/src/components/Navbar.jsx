import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top + navigate to home if not already there
  const handleHomeClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scroll.scrollToTop(), 50); // wait for page to mount then scroll
    } else {
      scroll.scrollToTop();
    }
  };

  return (
    <nav className="w-full px-8 py-4 bg-black text-white flex justify-between items-center fixed top-0 z-50 shadow-md">
      {/* Logo */}
      <div
        onClick={handleHomeClick}
        className="text-2xl font-bold text-yellow-400 cursor-pointer"
      >
        Bishal.dev
      </div>

      {/* Links */}
      <div className="hidden md:flex gap-6 text-lg">
        <button onClick={handleHomeClick} className="hover:text-yellow-400">
          Home
        </button>
        <ScrollLink to="about" smooth duration={500} offset={-70} className="cursor-pointer hover:text-yellow-400">
          Projects
        </ScrollLink>
        <ScrollLink to="experience" smooth duration={500} offset={-70} className="cursor-pointer hover:text-yellow-400">
          Experience
        </ScrollLink>
        <a href="/resume.pdf" target="_blank" className="hover:text-yellow-400">
          Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
