"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-gray-800">
            Contact <span className="text-emerald-600">Me</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Let’s discuss your project or just say hello 👋
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-600 leading-relaxed">
              I’m always open to new opportunities, freelance projects, or
              collaboration ideas. Feel free to reach out anytime.
            </p>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-emerald-600 text-xl" />
              <span className="text-gray-700">alif@example.com</span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-emerald-600 text-xl" />
              <span className="text-gray-700">+880 1234 567890</span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-emerald-600 text-xl" />
              <span className="text-gray-700">Bangladesh</span>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            action="mailto:alif@example.com"
            method="POST"
            encType="text/plain"
            className="bg-white p-8 rounded-2xl shadow-md space-y-6"
          >
            <div>
              <label className="block text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                rows={4}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition"
            >
              Send Message
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}
