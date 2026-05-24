import { FaCamera, FaRobot, FaLightbulb } from "react-icons/fa";

export default function WhyFarmLens() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">

      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Why <span className="text-green-600">FarmLens?</span>
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

        {/* Card 1 */}
        <div className="group bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2">
          
          <div className="w-14 h-14 flex items-center justify-center bg-green-100 text-green-600 rounded-xl mb-4 group-hover:scale-110 transition">
            <FaCamera className="text-xl" />
          </div>

          <h3 className="text-xl font-semibold mb-2">
            Upload Image
          </h3>

          <p className="text-gray-500 text-sm">
            Simply upload your crop image in seconds and get started instantly.
          </p>

        </div>

        {/* Card 2 */}
        <div className="group bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2">
          
          <div className="w-14 h-14 flex items-center justify-center bg-green-100 text-green-600 rounded-xl mb-4 group-hover:scale-110 transition">
            <FaRobot className="text-xl" />
          </div>

          <h3 className="text-xl font-semibold mb-2">
            AI Analysis
          </h3>

          <p className="text-gray-500 text-sm">
            Our AI model detects diseases instantly with high accuracy.
          </p>

        </div>

        {/* Card 3 */}
        <div className="group bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2">
          
          <div className="w-14 h-14 flex items-center justify-center bg-green-100 text-green-600 rounded-xl mb-4 group-hover:scale-110 transition">
            <FaLightbulb className="text-xl" />
          </div>

          <h3 className="text-xl font-semibold mb-2">
            Smart Solution
          </h3>

          <p className="text-gray-500 text-sm">
            Get actionable treatment suggestions to protect your crops.
          </p>

        </div>

      </div>

    </section>
  );
}