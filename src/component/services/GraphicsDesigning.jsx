import React from "react";
import { Paintbrush2Icon } from "lucide-react";

const GraphicsDesigning = () => {
  return (
    <> <div className="bg-black p-[19px] lg:p-[30px]">dasd</div>
    <section className="bg-gradient-to-r from-pink-50 via-purple-50 to-white py-20 px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left Content */}
        <div className="space-y-6 text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Stunning <span className="text-pink-600">Graphics Designing</span> Solutions
          </h1>
          <p className="text-lg text-gray-700">
            From logos to branding kits, we create visuals that communicate your brand story and leave a lasting impression.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 text-lg rounded-xl shadow-md flex items-center justify-center">
              <Paintbrush2Icon className="mr-2" size={20} /> Get Design Ideas
            </button>
            <button className="border border-pink-600 text-pink-600 hover:bg-pink-100 px-6 py-3 text-lg rounded-xl">
              View Portfolio
            </button>
          </div>

          <div className="flex flex-wrap gap-4 pt-6 text-sm text-gray-600">
            <div className="bg-white px-4 py-2 rounded-xl shadow-sm">🎨 Logo & Branding</div>
            <div className="bg-white px-4 py-2 rounded-xl shadow-sm">🖼️ Social Media Graphics</div>
            <div className="bg-white px-4 py-2 rounded-xl shadow-sm">📦 Packaging & Posters</div>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="graphic-designer.jpg"
            alt="Graphics Designing"
            className="w-[400px] md:w-[500px] rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
    </>
  );
};

export default GraphicsDesigning;
