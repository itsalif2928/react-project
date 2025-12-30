export default function About() {
  return (
    <section id="about" className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

        {/* Left - Image */}
        <div className="flex-1 flex justify-center md:justify-start">
          <div className="w-72 h-72 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/about.jpg"
              alt="About Alif Rahman"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right - Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-teal-600">Me</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            I’m <b>Alif Rahman</b>, a passionate Full Stack Developer who loves
            building modern and responsive web applications. I focus on clean UI,
            performance, and user-friendly experiences.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            I work with technologies like <b>Next.js</b>, <b>React</b>, <b>Node.js</b>,
            and <b>Tailwind CSS</b>. I'm always learning and improving my skills.
          </p>

          {/* Stats */}
          <div className="flex gap-10 mt-4 justify-center md:justify-start">
            <div>
              <h3 className="text-3xl font-bold text-teal-600">10+</h3>
              <p className="text-gray-500">Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-teal-600">1+</h3>
              <p className="text-gray-500">Years Experience</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-teal-600">100%</h3>
              <p className="text-gray-500">Client Satisfaction</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
