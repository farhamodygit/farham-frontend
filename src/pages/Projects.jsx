import {
  FaLaptopCode,
  FaBuilding,
  FaArrowRight
} from "react-icons/fa";

function Projects() {

  const projects = [

    {
      title: "Product Recommendation System",
      icon: <FaLaptopCode />,
      color: "from-cyan-500 to-blue-600",
      description:
        "Developed a smart recommendation system for digital marketplaces that helps users discover products based on preferences and user behavior.",
      technologies: ["Python", "Machine Learning", "Data Analysis"]
    },

    {
      title: "Hostel Management System",
      icon: <FaBuilding />,
      color: "from-emerald-500 to-cyan-500",
      description:
        "Designed and developed a hostel management system for managing student accommodation, room allocation and hostel records efficiently.",
      technologies: ["HTML", "CSS", "JavaScript"]
    }

  ];

  return (

    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-950 text-white py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* TITLE SECTION */}
        <div className="text-center mb-16">

          <p className="text-cyan-400 uppercase tracking-[4px] font-semibold">
            My Portfolio
          </p>

          <h1 className="text-4xl md:text-5xl font-black mt-4">

            Featured Projects

          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-8">

            Here are some of the projects I have developed
            using modern technologies and problem-solving
            approaches to create impactful digital solutions.

          </p>

        </div>

        {/* PROJECT CARDS */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:-translate-y-3 transition duration-300 shadow-2xl hover:shadow-cyan-500/10"
            >

              {/* ICON */}
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${project.color} flex items-center justify-center text-4xl mb-8 shadow-lg`}>

                {project.icon}

              </div>

              {/* TITLE */}
              <h2 className="text-3xl font-bold mb-5">

                {project.title}

              </h2>

              {/* DESCRIPTION */}
              <p className="text-gray-400 leading-8 text-lg">

                {project.description}

              </p>

              {/* TECHNOLOGIES */}
              <div className="flex flex-wrap gap-3 mt-8">

                {project.technologies.map((tech, i) => (

                  <span
                    key={i}
                    className="bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium"
                  >

                    {tech}

                  </span>

                ))}

              </div>

              

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Projects;