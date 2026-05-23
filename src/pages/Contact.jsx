import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

function Contact() {
  return (

    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-950 text-white py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* TITLE SECTION */}
        <div className="text-center mb-16">

          <p className="text-cyan-400 uppercase tracking-[4px] font-semibold">
            Contact Information
          </p>

          <h1 className="text-4xl md:text-5xl font-black mt-4">

            Get In Touch

          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-8">

            Feel free to contact me for collaborations,
            project discussions, opportunities or any
            professional communication.

          </p>

        </div>

        {/* CONTACT CARD CENTER */}
        <div className="flex justify-center">

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 shadow-2xl max-w-2xl w-full hover:shadow-cyan-500/10 transition duration-300">

            <h2 className="text-3xl font-bold mb-10 text-center">

              Contact Details

            </h2>

            {/* PHONE 1 */}
            <div className="flex items-center gap-5 mb-8 bg-slate-800/50 p-5 rounded-2xl border border-white/5 hover:border-cyan-400/20 transition duration-300">

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-2xl shadow-lg">

                <FaPhoneAlt />

              </div>

              <div>

                <p className="text-gray-400">
                  Phone Number
                </p>

                <h3 className="text-xl font-semibold">
                  0676271749
                </h3>

              </div>

            </div>

            {/* PHONE 2 */}
            <div className="flex items-center gap-5 mb-8 bg-slate-800/50 p-5 rounded-2xl border border-white/5 hover:border-emerald-400/20 transition duration-300">

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center text-2xl shadow-lg">

                <FaPhoneAlt />

              </div>

              <div>

                <p className="text-gray-400">
                  Alternative Number
                </p>

                <h3 className="text-xl font-semibold">
                  0611491749
                </h3>

              </div>

            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-5 mb-8 bg-slate-800/50 p-5 rounded-2xl border border-white/5 hover:border-blue-400/20 transition duration-300">

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-2xl shadow-lg">

                <FaEnvelope />

              </div>

              <div>

                <p className="text-gray-400">
                  Email Address
                </p>

                <h3 className="text-xl font-semibold break-all">
                  farhammohdjuma@gmail.com
                </h3>

              </div>

            </div>

            {/* LOCATION */}
            <div className="flex items-center gap-5 bg-slate-800/50 p-5 rounded-2xl border border-white/5 hover:border-pink-400/20 transition duration-300">

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl shadow-lg">

                <FaMapMarkerAlt />

              </div>

              <div>

                <p className="text-gray-400">
                  Location
                </p>

                <h3 className="text-xl font-semibold">
                  Dar es Salaam, Tanzania
                </h3>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Contact;