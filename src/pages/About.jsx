import {
  FaUserGraduate,
  FaCode,
  FaLightbulb,
  FaChartLine
} from "react-icons/fa";

function About() {
  return (

    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-950 text-white py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>

            <p className="text-cyan-400 uppercase tracking-[4px] font-semibold">
              About Me
            </p>

            <h1 className="text-4xl md:text-5xl font-black mt-5 leading-tight">

              Passionate About Technology & Innovation

            </h1>

            <p className="mt-8 text-gray-400 text-lg leading-9">

              I am a passionate and motivated university student
              at the Eastern African Statistical Training Center
              (EASTC) with strong interests in software development,
              data science and cloud computing.

              <br /><br />

              I possess practical skills in Python,
              R Programming, HTML, CSS and Microsoft Excel.

              <br /><br />

              I enjoy solving real-world problems using technology
              and developing innovative systems that improve
              efficiency, productivity and user experience.

            </p>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center">

            <div className="w-[350px] h-[350px] rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl flex flex-col items-center justify-center p-10">

              <div className="w-28 h-28 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-5xl shadow-lg shadow-cyan-500/20">

                <FaUserGraduate />

              </div>

              <h2 className="text-3xl font-bold mt-8 text-center">

                FARAHAM MOH'D JUMA

              </h2>

              <p className="text-cyan-400 mt-3 text-lg">

                Software Developer

              </p>

              <p className="text-gray-400 text-center mt-5 leading-8">

                Dedicated to building modern digital solutions
                and continuously improving technical skills
                in software engineering and data technology.

              </p>

            </div>

          </div>

        </div>

        {/* MODERN CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">

          {/* CARD 1 */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:-translate-y-3 transition duration-300 shadow-xl hover:shadow-cyan-500/10">

            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-4xl mb-6">

              <FaCode />

            </div>

            <h2 className="text-2xl font-bold mb-4">

              Web Development

            </h2>

            <p className="text-gray-400 leading-8">

              Creating responsive and modern web applications
              using current technologies and best UI/UX practices.

            </p>

          </div>

          {/* CARD 2 */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:-translate-y-3 transition duration-300 shadow-xl hover:shadow-blue-500/10">

            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-4xl mb-6">

              <FaChartLine />

            </div>

            <h2 className="text-2xl font-bold mb-4">

              Data Analytics

            </h2>

            <p className="text-gray-400 leading-8">

              Using analytical tools and programming languages
              to explore data and generate valuable insights.

            </p>

          </div>

          {/* CARD 3 */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:-translate-y-3 transition duration-300 shadow-xl hover:shadow-emerald-500/10">

            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center text-4xl mb-6">

              <FaLightbulb />

            </div>

            <h2 className="text-2xl font-bold mb-4">

              Problem Solving

            </h2>

            <p className="text-gray-400 leading-8">

              Passionate about solving real-world challenges
              through innovative and efficient digital solutions.

            </p>

          </div>

        </div>

      </div>

    </section>

  );
}

export default About;