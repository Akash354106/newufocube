import React from "react";
import { SmartphoneIcon } from "lucide-react";

const AppDevelopment = () => {
  return (
    <><div className="bg-black p-[19px] lg:p-[30px]">dasd</div>
    <section className="bg-gradient-to-r from-green-50 via-emerald-50 to-white py-20 px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left Content */}
        <div className="space-y-6 text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Custom <span className="text-green-600">App Development</span> Solutions
          </h1>
          <p className="text-lg text-gray-700">
            We build high-performance Android & iOS apps tailored to your business goals, using modern technologies and design systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-lg rounded-xl shadow-md flex items-center justify-center">
              <SmartphoneIcon className="mr-2" size={20} /> Build Your App
            </button>
            <button className="border border-green-600 text-green-600 hover:bg-green-100 px-6 py-3 text-lg rounded-xl">
              Platforms We Support
            </button>
          </div>

          <div className="flex flex-wrap gap-4 pt-6 text-sm text-gray-600">
            <div className="bg-white px-4 py-2 rounded-xl shadow-sm">📱 Android & iOS</div>
            <div className="bg-white px-4 py-2 rounded-xl shadow-sm">⚙️ Native & Hybrid Apps</div>
            <div className="bg-white px-4 py-2 rounded-xl shadow-sm">🚀 Scalable Backend</div>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="appdevlop.jpg"
            alt="App Development"
            className="w-[400px] md:w-[500px] rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
    </>
  );
};

export default AppDevelopment;
