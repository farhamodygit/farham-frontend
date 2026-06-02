import {
  FaUserGraduate,
  FaCode,
  FaLightbulb,
  FaChartLine
} from "react-icons/fa";

function About() {
  return (

    <section className="min-h-screen bg-section text-text-main py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>

            <p className="text-primary uppercase tracking-[4px] font-semibold">
              About Me
            </p>

            <h1 className="text-5xl md:text-6xl font-black mt-5 leading-tight bg-gradient-to-r from-text-main to-primary bg-clip-text text-transparent">

              Passionate About Technology & Innovation

            </h1>

            <p className="mt-8 text-text-secondary text-lg leading-9 max-w-xl">

              I am a passionate and motivated university student
              at the Eastern African Statistical Training Center
              (EASTC) with strong interests in 
              data science, software development and cloud computing.

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

            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark rounded-[2.5rem] blur-2xl opacity-20"></div>
              <div className="relative rounded-[2.5rem] bg-white border border-border shadow-2xl flex flex-col items-center justify-center p-10">

                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center text-6xl shadow-2xl shadow-primary/30 text-white">

                  <FaUserGraduate />

                </div>

                <h2 className="text-3xl font-black mt-8 text-center text-text-main">

                  FARAHAM MOH'D JUMA

                </h2>

                <p className="text-primary mt-3 text-lg font-semibold tracking-wide">

                  Data Scientist & Software Developer

                </p>

                <p className="text-text-secondary text-center mt-6 leading-8 text-sm">

                  Dedicated to building modern digital solutions
                  and continuously improving technical skills
                  in software engineering and data technology.

                </p>

              </div>
            </div>

          </div>

        </div>

        {/* MODERN CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">

          {/* CARD 1 */}
          <div className="group bg-white border border-border rounded-3xl p-8 hover:-translate-y-2 transition duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/15">

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center text-3xl mb-6 text-white group-hover:scale-110 transition duration-300">

              <FaCode />

            </div>

            <h2 className="text-2xl font-bold mb-4 text-text-main">

              Web Development

            </h2>

            <p className="text-text-secondary leading-8">

              Creating responsive and modern web applications
              using current technologies and best UI/UX practices.

            </p>

          </div>

          {/* CARD 2 */}
          <div className="group bg-white border border-border rounded-3xl p-8 hover:-translate-y-2 transition duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/15">

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center text-3xl mb-6 text-white group-hover:scale-110 transition duration-300">

              <FaChartLine />

            </div>

            <h2 className="text-2xl font-bold mb-4 text-text-main">

              Data Analytics

            </h2>

            <p className="text-text-secondary leading-8">

              Using analytical tools and programming languages
              to explore data and generate valuable insights.

            </p>

          </div>

          {/* CARD 3 */}
          <div className="group bg-white border border-border rounded-3xl p-8 hover:-translate-y-2 transition duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/15">

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center text-3xl mb-6 text-white group-hover:scale-110 transition duration-300">

              <FaLightbulb />

            </div>

            <h2 className="text-2xl font-bold mb-4 text-text-main">

              Problem Solving

            </h2>

            <p className="text-text-secondary leading-8">

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