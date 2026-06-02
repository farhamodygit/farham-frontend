import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp
} from "react-icons/fa";

function Contact() {
  return (

    <section className="min-h-screen bg-section text-text-main py-20 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[4px] font-semibold">
            Contact Me
          </p>

          <h1 className="text-5xl md:text-6xl font-black mt-5 leading-tight bg-gradient-to-r from-text-main to-primary bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h1>

          <p className="text-text-secondary mt-6 max-w-2xl mx-auto text-lg leading-8">
            I'm always excited to connect with passionate developers, collaborators, and innovators. Reach out via WhatsApp for quick discussions or email for detailed projects.
          </p>
        </div>

        {/* CTA BUTTONS */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <a
            href="https://wa.me/255676271749?text=Hello%20Faraham"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary-dark px-8 py-4 text-white font-semibold shadow-lg hover:shadow-2xl hover:shadow-primary/30 transition duration-300 hover:-translate-y-1"
          >
            <FaWhatsapp className="mr-3 text-lg" /> Start WhatsApp Chat
          </a>
          <a
            href="mailto:farhammohdjuma@gmail.com"
            className="inline-flex items-center justify-center rounded-full border-2 border-primary bg-white px-8 py-4 text-primary font-semibold hover:bg-primary hover:text-white transition duration-300 hover:-translate-y-1"
          >
            <FaEnvelope className="mr-3 text-lg" /> Send Email
          </a>
        </div>

        {/* CONTACT CARDS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* CARD 1 - PRIMARY WHATSAPP */}
          <a
            href="https://wa.me/255676271749?text=Hello%20Faraham"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-3xl bg-white border border-border p-8 shadow-lg transition duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-full -mr-12 -mt-12 group-hover:scale-150 transition duration-500"></div>
            
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-primary-dark text-white text-3xl shadow-lg group-hover:scale-110 transition duration-300 relative z-10">
              <FaWhatsapp />
            </div>
            
            <p className="mt-6 uppercase tracking-[2px] text-xs font-bold text-primary">
              WhatsApp
            </p>
            <h3 className="mt-3 text-xl font-black text-text-main">
              0676271749
            </h3>
            <p className="mt-3 text-text-secondary leading-6 text-sm">
              Quick messaging and real-time conversations.
            </p>
          </a>

          {/* CARD 2 - ALTERNATIVE WHATSAPP */}
          <a
            href="https://wa.me/255611491749?text=Hello%20Faraham"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-3xl bg-white border border-border p-8 shadow-lg transition duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-full -mr-12 -mt-12 group-hover:scale-150 transition duration-500"></div>
            
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-primary-dark text-white text-3xl shadow-lg group-hover:scale-110 transition duration-300 relative z-10">
              <FaWhatsapp />
            </div>
            
            <p className="mt-6 uppercase tracking-[2px] text-xs font-bold text-primary">
              Alternative
            </p>
            <h3 className="mt-3 text-xl font-black text-text-main">
              0611491749
            </h3>
            <p className="mt-3 text-text-secondary leading-6 text-sm">
              Backup contact for continuous availability.
            </p>
          </a>

          {/* CARD 3 - EMAIL */}
          <a
            href="mailto:farhammohdjuma@gmail.com"
            className="group relative rounded-3xl bg-white border border-border p-8 shadow-lg transition duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-full -mr-12 -mt-12 group-hover:scale-150 transition duration-500"></div>
            
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-primary-dark text-white text-3xl shadow-lg group-hover:scale-110 transition duration-300 relative z-10">
              <FaEnvelope />
            </div>
            
            <p className="mt-6 uppercase tracking-[2px] text-xs font-bold text-primary">
              Email
            </p>
            <h3 className="mt-3 text-lg font-black text-text-main break-all">
              farhammohdjuma@gmail.com
            </h3>
            <p className="mt-3 text-text-secondary leading-6 text-sm">
              Professional inquiries and detailed projects.
            </p>
          </a>

          {/* CARD 4 - LOCATION */}
          <div className="group relative rounded-3xl bg-white border border-border p-8 shadow-lg transition duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-full -mr-12 -mt-12 group-hover:scale-150 transition duration-500"></div>
            
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-primary-dark text-white text-3xl shadow-lg group-hover:scale-110 transition duration-300 relative z-10">
              <FaMapMarkerAlt />
            </div>
            
            <p className="mt-6 uppercase tracking-[2px] text-xs font-bold text-primary">
              Location
            </p>
            <h3 className="mt-3 text-xl font-black text-text-main">
              Dar es Salaam
            </h3>
            <p className="mt-3 text-text-secondary leading-6 text-sm">
              Tanzania. Open to local and remote work.
            </p>
          </div>
        </div>
      </div>

    </section>

  );
}

export default Contact;