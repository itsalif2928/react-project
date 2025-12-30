import { Code, MonitorSmartphone, PenTool, Layers } from "lucide-react";

export default function Services() {
  return (
    <section className="w-full py-20 bg-gray-50" id="services">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            My <span className="text-emerald-600">Services</span>
          </h2>
          <p className="text-gray-600 mt-2">
            I provide high-quality digital services to help brands grow online.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 border border-gray-100">
            <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-5">
              <MonitorSmartphone size={30} className="text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Frontend Development</h3>
            <p className="text-gray-600">
              Building modern, fast, and responsive UI using React, Next.js, Tailwind CSS.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 border border-gray-100">
            <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
              <Code size={30} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Backend Development</h3>
            <p className="text-gray-600">
              Creating secure and scalable APIs with Node.js, Express, MongoDB.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 border border-gray-100">
            <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-5">
              <PenTool size={30} className="text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">UI / UX Design</h3>
            <p className="text-gray-600">
              Designing clean layouts and user-friendly experiences that convert.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-md rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 border border-gray-100">
            <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mb-5">
              <Layers size={30} className="text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Full Stack Solutions</h3>
            <p className="text-gray-600">
              Complete web applications from design to deployment and maintenance.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
