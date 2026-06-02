import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaFileExcel
} from "react-icons/fa";

import { SiR } from "react-icons/si";

function Skills() {

  const skills = [

    {
      name: "Python",
      icon: <FaPython />,
      color: "from-primary to-primary-dark",
      description:
        "Developing applications, automation tools and data analysis projects using Python."
    },

    {
      name: "R Programming",
      icon: <SiR />,
      color: "from-primary to-primary-dark",
      description:
        "Performing statistical analysis, data visualization and analytical reporting."
    },

    {
      name: "HTML5",
      icon: <FaHtml5 />,
      color: "from-primary to-primary-dark",
      description:
        "Creating modern and responsive website structures using HTML5."
    },

    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      color: "from-primary to-primary-dark",
      description:
        "Designing attractive user interfaces with modern styling and animations."
    },

    {
      name: "Microsoft Excel",
      icon: <FaFileExcel />,
      color: "from-primary to-primary-dark",
      description:
        "Managing data, spreadsheets and performing advanced calculations efficiently."
    }

  ];

  return (

    <section className="min-h-screen bg-section text-text-main py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-16">

          <p className="text-primary uppercase tracking-[4px] font-semibold">
            Professional Skills
          </p>

          <h1 className="text-5xl md:text-6xl font-black mt-4 bg-gradient-to-r from-text-main to-primary bg-clip-text text-transparent">

            My Skills & Expertise

          </h1>

          <p className="text-text-secondary mt-6 max-w-2xl mx-auto text-lg leading-8">

            Here are some of the technical skills and tools
            I use to develop modern systems, websites
            and innovative digital solutions.

          </p>

        </div>

        {/* SKILLS CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="group bg-white border border-border rounded-3xl p-8 hover:-translate-y-2 transition duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/15"
            >

              {/* ICON */}
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center text-4xl mb-6 shadow-lg text-white group-hover:scale-110 transition duration-300`}>

                {skill.icon}

              </div>

              {/* TITLE */}
              <h2 className="text-2xl font-bold mb-4 text-text-main">

                {skill.name}

              </h2>

              {/* DESCRIPTION */}
              <p className="text-text-secondary leading-8">

                {skill.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Skills;