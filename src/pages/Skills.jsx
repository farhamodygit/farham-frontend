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
      color: "from-yellow-400 to-blue-500",
      description:
        "Developing applications, automation tools and data analysis projects using Python."
    },

    {
      name: "R Programming",
      icon: <SiR />,
      color: "from-blue-500 to-indigo-600",
      description:
        "Performing statistical analysis, data visualization and analytical reporting."
    },

    {
      name: "HTML5",
      icon: <FaHtml5 />,
      color: "from-orange-500 to-red-500",
      description:
        "Creating modern and responsive website structures using HTML5."
    },

    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      color: "from-cyan-500 to-blue-600",
      description:
        "Designing attractive user interfaces with modern styling and animations."
    },

    {
      name: "Microsoft Excel",
      icon: <FaFileExcel />,
      color: "from-green-500 to-emerald-600",
      description:
        "Managing data, spreadsheets and performing advanced calculations efficiently."
    }

  ];

  return (

    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-950 text-white py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-16">

          <p className="text-emerald-400 uppercase tracking-[4px] font-semibold">
            Professional Skills
          </p>

          <h1 className="text-4xl md:text-5xl font-black mt-4">

            My Skills & Expertise

          </h1>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-8">

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
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:-translate-y-3 transition duration-300 shadow-xl hover:shadow-cyan-500/10"
            >

              {/* ICON */}
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center text-4xl mb-6 shadow-lg`}>

                {skill.icon}

              </div>

              {/* TITLE */}
              <h2 className="text-2xl font-bold mb-4">

                {skill.name}

              </h2>

              {/* DESCRIPTION */}
              <p className="text-gray-400 leading-8">

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