"use client";
import { Typewriter } from "react-simple-typewriter";
export default function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left Side - Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Hi, I'm <span className="text-teal-600">Alif Rahman</span><br />
             <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-gray-700">
          <Typewriter
            words={["Full Stack Developer"]}
            loop={0} 
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
          </h1>

          <p className="mt-6 text-gray-600 max-w-xl">
            I build fast, modern and responsive websites using <b>Next.js</b>,{" "}
            <b>React</b> and <b>Tailwind CSS</b>.
          </p>

          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <button className="bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition">
              View My Work
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
              Contact Me
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="w-82 h-82 rounded-full overflow-hidden border-3 border-teal-600 shadow-lg">
            <img
              src="/profile.jpg"
              alt="Alif Rahman"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
