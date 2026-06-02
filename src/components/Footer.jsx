function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-white via-section to-text-main/5 border-t border-border mt-20 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* MAIN CONTENT */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="group">
              <h2 className="text-3xl font-black bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent mb-4">
                FARAHAM
              </h2>
              <p className="mt-4 text-text-secondary leading-7 text-sm group-hover:text-text-main transition duration-300">
                Software Developer & Data Enthusiast building modern, innovative digital solutions with excellence.
              </p>
              <p className="mt-4 text-xs font-semibold text-primary uppercase tracking-widest">
                Based in Dar es Salaam, Tanzania
              </p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-lg font-black text-text-main mb-6 flex items-center">
              <span className="w-2 h-2 bg-gradient-to-r from-primary to-primary-dark rounded-full mr-3"></span>
              Navigation
            </h3>
            <ul className="space-y-4">
              {[
                ["/", "Home"],
                ["/about", "About"],
                ["/skills", "Skills"],
                ["/projects", "Projects"],
              ].map(([path, label]) => (
                <li key={path}>
                  <a
                    href={path}
                    className="text-text-secondary hover:text-primary hover:translate-x-2 transition duration-300 font-medium inline-flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition">→</span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-black text-text-main mb-6 flex items-center">
              <span className="w-2 h-2 bg-gradient-to-r from-primary to-primary-dark rounded-full mr-3"></span>
              Connect
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/255676271749"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition duration-300 font-medium hover:translate-x-2 inline-block group"
                >
                  <span className="text-lg mr-2">💬</span>
                  <span className="group-hover:font-bold">WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:farhammohdjuma@gmail.com"
                  className="text-text-secondary hover:text-primary transition duration-300 font-medium hover:translate-x-2 inline-block group"
                >
                  <span className="text-lg mr-2">📧</span>
                  <span className="group-hover:font-bold">Email</span>
                </a>
              </li>
              <li>
                <p className="text-text-secondary font-medium">
                  <span className="text-lg mr-2">📍</span>
                  Location
                </p>
              </li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-black text-text-main mb-6 flex items-center">
              <span className="w-2 h-2 bg-gradient-to-r from-primary to-primary-dark rounded-full mr-3"></span>
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Tailwind", "Node.js", "Python", "Data Science"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-gradient-to-r from-primary/10 to-primary-dark/10 border border-primary/20 text-primary text-xs font-bold rounded-full hover:border-primary hover:bg-primary/20 transition duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>

        {/* FOOTER BOTTOM */}
        <div className="text-center">
          <p className="text-text-secondary font-bold mb-2">
            © 2026 Faraham Moh'd Juma. All Rights Reserved.
          </p>
          <p className="text-text-secondary text-xs space-x-4">
            <span>✨ Crafted with passion and innovation</span>
            <span className="hidden sm:inline">•</span>
            <span className="block sm:inline">Powered by modern technologies</span>
          </p>
          <p className="text-text-secondary text-xs mt-4 font-medium tracking-wider">
            Building the future, one line of code at a time.
          </p>
        </div>
      </div>

      {/* DECORATIVE GRADIENT BLOB */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl -z-10 opacity-50"></div>
      <div className="absolute bottom-20 left-0 w-32 h-32 bg-gradient-to-t from-primary-dark/5 to-transparent rounded-full blur-3xl -z-10 opacity-40"></div>
    </footer>
  );
}

export default Footer;