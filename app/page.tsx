export default function Home() {
  return (
    <div className="bg-zinc-50 dark:bg-black min-h-screen">
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 mb-8">
            Building beautiful and functional web experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-zinc-900 hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-zinc-300 dark:border-zinc-700 text-base font-medium rounded-full text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-8">
            About Me
          </h2>
          <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400">
            <p>
              I'm a passionate developer focused on creating elegant solutions
              to complex problems. With expertise in modern web technologies,
              I bring ideas to life through clean code and thoughtful design.
            </p>
            <p>
              My journey in software development has equipped me with a diverse
              skill set and a deep understanding of user-centered design
              principles. I'm always eager to learn new technologies and take
              on challenging projects.
            </p>
            <div className="pt-6">
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Git'].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-12 text-center">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="bg-white dark:bg-zinc-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-zinc-200 dark:border-zinc-800"
              >
                <div className="h-48 bg-zinc-300 dark:bg-zinc-700"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                    Project {project}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                    A brief description of the project and the technologies
                    used to build it.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="text-sm font-medium text-zinc-900 dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
                    >
                      View Project →
                    </a>
                    <a
                      href="#"
                      className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="max-w-2xl mx-auto w-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-8 text-center">
            Get In Touch
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12 text-center">
            I'm always open to new opportunities and collaborations.
            Feel free to reach out!
          </p>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-zinc-900 dark:text-zinc-50 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:focus:ring-zinc-400"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-900 dark:text-zinc-50 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:focus:ring-zinc-400"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-zinc-900 dark:text-zinc-50 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:focus:ring-zinc-400"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-zinc-900 hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-zinc-600 dark:text-zinc-400">
            © 2025 My Portfolio. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
