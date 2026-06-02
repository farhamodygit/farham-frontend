
import { Link } from "react-router-dom";
import ProfileUpload from "../components/ProfileUpload";

function Home() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-section text-text-main">

      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary-dark/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <div>

          {/* Welcome Badge */}
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md mb-6">
            <span className="text-primary text-sm font-semibold tracking-[3px] uppercase">
              Welcome To My Portfolio
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">

            <span className="text-slate-700">
              Hello, I'm
            </span>

            <br />

            <span className="bg-gradient-to-r from-primary via-primary-dark to-slate-900 bg-clip-text text-transparent">
              FARAHAM
            </span>

            <br />

            <span className="text-slate-800 text-4xl md:text-5xl font-semibold">
              MOH'D JUMA
            </span>

          </h1>

          {/* Decorative Line */}
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full mt-6"></div>

          {/* Role */}
          <h2 className="mt-8 text-2xl md:text-3xl font-semibold text-slate-800">
            Data Science Student • Data Analyst • Machine Learning Enthusiast
          </h2>

          {/* Description */}
          <p className="mt-8 text-text-secondary text-lg leading-9 max-w-2xl">

            I am a dedicated and ambitious Data Science student pursuing a
            Bachelor's Degree in Data Science at the Eastern Africa Statistical
            Training Centre (EASTC).

            <br /><br />

            My passion lies in transforming raw data into meaningful insights
            that support decision-making and solve real-world challenges.
            I enjoy working with data analysis, statistical modeling,
            machine learning, and data visualization to uncover patterns
            and generate valuable knowledge.

            <br /><br />

            Through academic projects and continuous learning, I have developed
            skills in data management, analytical thinking, and modern
            technologies used in the field of data science.

            <br /><br />

            My goal is to become a highly skilled data professional capable
            of leveraging data-driven solutions to create positive impact
            across industries and communities.

          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-4 mt-10">

            <div className="bg-white/70 backdrop-blur-md px-5 py-3 rounded-2xl shadow-md">
              <h3 className="font-bold text-primary text-xl">
                Data Science
              </h3>
              <p className="text-sm text-slate-600">
                Bachelor's Degree
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-md px-5 py-3 rounded-2xl shadow-md">
              <h3 className="font-bold text-primary text-xl">
                EASTC
              </h3>
              <p className="text-sm text-slate-600">
                University Student
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-md px-5 py-3 rounded-2xl shadow-md">
              <h3 className="font-bold text-primary text-xl">
                Machine Learning
              </h3>
              <p className="text-sm text-slate-600">
                Data Enthusiast
              </p>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex gap-5 mt-12 flex-wrap">

            <Link to="/projects">
              <button className="bg-gradient-to-r from-primary to-primary-dark px-8 py-4 rounded-full text-lg font-semibold text-white shadow-xl hover:scale-105 transition-all duration-300">
                View Projects
              </button>
            </Link>

            <Link to="/contact">
              <button className="px-8 py-4 rounded-full text-lg font-semibold border border-primary/30 bg-white/50 backdrop-blur-md text-primary hover:bg-primary hover:text-white transition-all duration-300">
                Contact Me
              </button>
            </Link>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">

          <div className="relative">

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark rounded-[2.5rem] blur-2xl opacity-20 scale-105"></div>

            {/* Profile Card */}
            <div className="relative w-full max-w-md p-10 rounded-[2.5rem] bg-white/70 backdrop-blur-xl border border-white/50 shadow-2xl">

              <div className="flex justify-center">
                <ProfileUpload
                  sizeClass="w-72 h-72"
                  hideUpload
                />
              </div>

              <div className="text-center mt-8">

                <h2 className="text-2xl font-bold text-slate-800">
                  FARAHAM MOH'D JUMA
                </h2>

                <p className="text-primary font-medium mt-2">
                  Data Science Student | EASTC
                </p>

                <div className="flex justify-center flex-wrap gap-2 mt-4">

                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                    Data Analysis
                  </span>

                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                    Statistics
                  </span>

                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                    Machine Learning
                  </span>

                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                    Data Visualization
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;

