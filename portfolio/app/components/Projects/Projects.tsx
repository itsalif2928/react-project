"use client";

import { motion } from "framer-motion";
import { section } from "framer-motion/client";
import { title } from "process";
const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js and Tailwind CSS.",
    image: "/projects/portfolio.jpg",
    tech: ["Next.js", "Tailwind"],
    live: "#",
    github: "#",
  },
  {
    title: "E-Commerce Website",
    description: "Full stack e-commerce app with authentication and payments.",
    image: "/projects/ecommerce.jpg",
    tech: ["React", "Node.js"],
    live: "#",
    github: "#",
  },
  {
    title: "Dashboard App",
    description: "Admin dashboard with charts, tables and analytics.",
    image: "/projects/dashboard.jpg",
    tech: ["Next.js", "Chart.js"],
    live: "#",
    github: "#",
  },
  {
    title: "Landing Page",
    description: "High-converting landing page for a startup.",
    image: "/projects/landing.jpg",
    tech: ["HTML", "CSS", "JS"],
    live: "#",
    github: "#",
  },
];

export default function Projects() {
    return(
        <section id = "projects" className="w-full py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
        <h2 className="text-4xl font-bold text-gray-800">
        My <span className="text-emerald-600">Projects</span>
        </h2>
        <p className="text-gray-600 mt-2">
        Some of the work I’ve built using modern web technologies.
        </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
                <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm"
                  >
                    Live
                  </a>
                   <a
                    href={project.github}
                    target="_blank"
                    className="bg-white text-gray-800 px-4 py-2 rounded-lg text-sm"
                  >
                    Code
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

            