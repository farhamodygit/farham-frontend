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
      color: "from-primary to-primary-dark",
      description:
        "Developed a smart recommendation system for digital marketplaces that helps users discover products based on preferences and user behavior.",
      technologies: ["Python", "Machine Learning", "Data Analysis"]
    },

    {
      title: "Hostel Management System",
      icon: <FaBuilding />,
      color: "from-primary to-primary-dark",
      description:
        "Designed and developed a hostel management system for managing student accommodation, room allocation and hostel records efficiently.",
      technologies: ["HTML", "CSS", "JavaScript"]
    }

  ];

  return (

    <section className="min-h-screen bg-section text-text-main py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* TITLE SECTION */}
        <div className="text-center mb-16">

          <p className="text-primary uppercase tracking-[4px] font-semibold">
            My Portfolio
          </p>

          <h1 className="text-5xl md:text-6xl font-black mt-4 bg-gradient-to-r from-text-main to-primary bg-clip-text text-transparent">

            Featured Projects

          </h1>

          <p className="text-text-secondary mt-6 max-w-3xl mx-auto text-lg leading-8">

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
              className="group bg-white border border-border rounded-3xl p-8 hover:-translate-y-2 transition duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/15"
            >

              {/* ICON */}
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${project.color} flex items-center justify-center text-4xl mb-8 shadow-lg text-white group-hover:scale-110 transition duration-300`}>

                {project.icon}

              </div>

              {/* TITLE */}
              <h2 className="text-3xl font-bold mb-5 text-text-main">

                {project.title}

              </h2>

              {/* DESCRIPTION */}
              <p className="text-text-secondary leading-8 text-lg">

                {project.description}

              </p>

              {/* TECHNOLOGIES */}
              <div className="flex flex-wrap gap-3 mt-8">

                {project.technologies.map((tech, i) => (

                  <span
                    key={i}
                    className="bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium"
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