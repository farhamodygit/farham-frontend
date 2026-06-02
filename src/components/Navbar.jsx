import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import ProfileUpload from "./ProfileUpload";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/95 border-b border-border shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <ProfileUpload />
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-text-main tracking-tight cursor-pointer hover:text-primary transition duration-300">
              FARAHAM
            </h1>
            <p className="text-primary text-xs sm:text-sm tracking-widest font-semibold">
              DATA SCIENTIST 
            </p>
          </div>
        </div>

        <button
          className="md:hidden text-text-main text-xl p-3 rounded-full bg-section hover:bg-primary/10 hover:text-primary transition duration-300"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 text-lg font-medium">
            {[
              ["/", "Home"],
              ["/about", "About"],
              ["/skills", "Skills"],
              ["/projects", "Projects"],
            ].map(([path, label]) => (
              <li key={path}>
                <Link
                  to={path}
                  className="relative text-text-main hover:text-primary transition duration-300 group font-semibold"
                >
                  {label}
                  <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-gradient-to-r from-primary to-primary-dark transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-primary to-primary-dark px-6 py-2 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary/30 transition duration-300 hover:-translate-y-0.5"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border shadow-lg animate-slideDown">
          <ul className="flex flex-col gap-4 px-6 py-6 text-lg font-medium">
            {[
              ["/", "Home"],
              ["/about", "About"],
              ["/skills", "Skills"],
              ["/projects", "Projects"],
            ].map(([path, label]) => (
              <li key={path}>
                <Link
                  onClick={() => setMenuOpen(false)}
                  to={path}
                  className="block text-text-main hover:text-primary hover:translate-x-2 transition duration-300 font-semibold"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                onClick={() => setMenuOpen(false)}
                to="/contact"
                className="block bg-gradient-to-r from-primary to-primary-dark px-6 py-3 rounded-full text-white text-center font-semibold hover:shadow-lg hover:shadow-primary/30 transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
