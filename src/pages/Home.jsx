import { Link } from "react-router-dom";

function Home() {
  return (

    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-950 text-white">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>

          {/* SMALL TITLE */}
          <p className="text-emerald-400 text-lg font-semibold tracking-[4px] uppercase">
            Welcome To My Portfolio
          </p>

          {/* MAIN HEADING */}
          <h1 className="text-4xl md:text-5xl font-semibold mt-5 leading-tight">

            <span className="text-gray-300">
              Hi, I'm
            </span>

            <br />

            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent font-extrabold tracking-wide">

              FARAHAM MOH'D JUMA

            </span>

          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 text-gray-400 text-lg leading-9 max-w-2xl">

            I am a passionate Software Developer and Data Enthusiast
            currently pursuing my studies at the Eastern African
            Statistical Training Center (EASTC).

            <br /><br />

            I specialize in developing modern and user-friendly web
            applications while solving real-world problems using
            innovative digital solutions and technology.

            <br /><br />

            My goal is to continuously improve my technical skills,
            build impactful systems, and contribute to the growth
            of software development and data technology.

          </p>

          {/* BUTTONS */}
          <div className="flex gap-5 mt-10 flex-wrap">

            {/* PROJECT BUTTON */}
            <Link to="/projects">

              <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-4 rounded-full text-lg font-semibold text-white shadow-lg hover:scale-105 hover:shadow-cyan-400/30 transition duration-300">

                View Projects

              </button>

            </Link>

            {/* CONTACT BUTTON */}
            <Link to="/contact">

              <button className="border-2 border-emerald-400 px-8 py-4 rounded-full text-lg font-semibold text-emerald-300 hover:bg-emerald-400 hover:text-black transition duration-300">

                Contact Me

              </button>

            </Link>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">

          <div className="w-[320px] h-[320px] rounded-full bg-gradient-to-br from-emerald-500 via-cyan-500 to-blue-600 p-2 shadow-2xl shadow-cyan-500/20">

            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center border border-gray-700">

              <h1 className="text-6xl font-extrabold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">

                FJ

              </h1>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Home;