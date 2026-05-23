import { Link } from "react-router-dom";
import ProfileUpload from "./ProfileUpload";

function Navbar() {

  return (

    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-black/70 border-b border-gray-800 shadow-xl">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
         {/* PROFILE IMAGE */}
          <ProfileUpload />

        {/* LEFT SIDE */}
        <div>

          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-wide cursor-pointer">

            FARAHAM MOH'D JUMA

          </h1>

          <p className="text-gray-400 text-sm tracking-widest">

            SOFTWARE DEVELOPER

          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-8">
            

          {/* NAV LINKS */}
          <ul className="flex gap-8 text-lg font-medium">

            <li>
              <Link
                to="/"
                className="relative text-white hover:text-cyan-400 transition duration-300 group"
              >

                Home

                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>

              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="relative text-white hover:text-cyan-400 transition duration-300 group"
              >

                About

                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>

              </Link>
            </li>

            <li>
              <Link
                to="/skills"
                className="relative text-white hover:text-cyan-400 transition duration-300 group"
              >

                Skills

                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>

              </Link>
            </li>

            <li>
              <Link
                to="/projects"
                className="relative text-white hover:text-cyan-400 transition duration-300 group"
              >

                Projects

                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>

              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2 rounded-full text-white hover:scale-105 transition duration-300 shadow-lg hover:shadow-cyan-500/50"
              >

                Contact

              </Link>
            </li>

          </ul>

         

        </div>

      </div>

    </nav>

  );
}

export default Navbar;