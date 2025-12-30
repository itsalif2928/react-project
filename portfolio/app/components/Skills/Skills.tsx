"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJs, FaPython } from "react-icons/fa";

const skills = [
  { name: "HTML", level: 95, icon: <FaHtml5 className="text-orange-600" size={35} /> },
  { name: "CSS / Tailwind", level: 90, icon: <FaCss3Alt className="text-blue-600" size={35} /> },
  { name: "JavaScript", level: 85, icon: <FaJs className="text-yellow-500" size={35} /> },
  { name: "React / Next.js", level: 88, icon: <FaReact className="text-cyan-500" size={35} /> },
  { name: "Node.js", level: 80, icon: <FaNodeJs className="text-green-600" size={35} /> },
  { name: "Python", level: 75, icon: <FaPython className="text-indigo-600" size={35} /> },
];

export default function Skills() {
  return (
    <section className="w-full py-20 bg-white" id="skills">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-gray-800">
            My <span className="text-emerald-600">Skills</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Technologies I work with to build modern and scalable web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-200"
            >
              <div className="flex items-center gap-4 mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold text-gray-800">
                  {skill.name}
                </h3>
              </div>

              <div className="w-full bg-gray-200 h-3 rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, delay: index * 0.1 }}
                  className="h-3 rounded-full bg-emerald-600"
                />
              </div>

              <p className="text-right text-gray-600 text-sm mt-2 font-medium">
                {skill.level}%
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
