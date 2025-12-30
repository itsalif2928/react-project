"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "John Smith",
    role: "Startup Founder",
    message:
      "Alif is an excellent developer. He delivered a clean, fast, and modern website exactly as promised.",
    image: "/testimonials/client1.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    message:
      "Great communication and high-quality work. Highly recommended for any web project.",
    image: "/testimonials/client2.jpg",
  },
  {
    name: "Michael Lee",
    role: "Business Owner",
    message:
      "Very professional and skilled. The project was delivered on time with great attention to detail.",
    image: "/testimonials/client3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-gray-800">
            What <span className="text-emerald-600">Clients Say</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Feedback from people I’ve worked with.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-emerald-600 text-3xl mb-4" />

              {/* Message */}
              <p className="text-gray-600 leading-relaxed mb-6">
                “{item.message}”
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
