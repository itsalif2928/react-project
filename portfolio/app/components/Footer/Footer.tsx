import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              Alif<span className="text-emerald-500">Rahman</span>
            </h3>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Full Stack Developer focused on building fast, modern and
              user-friendly web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-emerald-500">About</a></li>
              <li><a href="#services" className="hover:text-emerald-500">Services</a></li>
              <li><a href="#skills" className="hover:text-emerald-500">Skills</a></li>
              <li><a href="#projects" className="hover:text-emerald-500">Projects</a></li>
              <li><a href="#contact" className="hover:text-emerald-500">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                className="p-3 bg-gray-800 rounded-full hover:bg-emerald-600 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                className="p-3 bg-gray-800 rounded-full hover:bg-emerald-600 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                className="p-3 bg-gray-800 rounded-full hover:bg-emerald-600 transition"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">

          <p className="text-gray-400">
            © {new Date().getFullYear()} Alif Rahman. All rights reserved.
          </p>

          <p className="flex items-center gap-1 text-gray-400">
            Built with <FaHeart className="text-red-500" /> using Next.js & Tailwind CSS
          </p>

        </div>
      </div>
    </footer>
  );
}
