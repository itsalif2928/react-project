import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
export default function Header() {
    return(
        <header className='w-full py-6 flex items-center justify-between'>
            <div className='text-2xl font-bold text-gray-900'>
                Alif <span className='text-teal-600'>Rahman</span>
            </div>

            {/* Navigation */}
            <nav className='hidden md:flex gap-8 tetx-gray-600 font-medium'>
                <a href="about" className="hover:text-teal-600 transition">About</a>
                <a href="skills" className="hover:text-teal-600 transition">Skills</a>
                <a href="projects" className="hover:text-teal-600 transition">Projects</a>
                <a href="Contract" className="hover:text-teal-600 transition">Contract</a>
            </nav>
            
                 <button className="md:hidden text-gray-700">
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        </button>

        {/* Social + Fiverr Button */}
        <div className="flex items-center gap-4">
            <a href="https://github.com/itsalif2928" target="_blank" className="text-gray-600 hover: text-teal-600 text-xl">
            <FaGithub />
            </a>

               <a href="https://www.linkedin.com/in/md-asif-rahman-alif-3925b3370/" target="_blank" className="text-gray-600 hover: text-teal-600 text-xl">
            <FaLinkedin />
            </a>

               <a href="https://www.facebook.com/iamasif2723" target="_blank" className="text-gray-600 hover: text-teal-600 text-xl">
            <FaFacebook />
            </a>

            {/* Fiverr Button */}
            <a href=""target="_blank" className = "flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition font-medium">
            Let's Talk
           </a>
        </div>
        </header>

    );
}