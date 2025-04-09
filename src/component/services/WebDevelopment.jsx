import React from "react";
import { CodeIcon } from "lucide-react";

const WebDevelopment = () => {
  return (
    <> <div className="bg-black p-[19px] lg:p-[30px]">dasd</div>
    <section className="bg-gradient-to-r from-gray-50 via-blue-50 to-white py-20 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Robust <span className="text-blue-600">Web Development</span> Services
          </h1>
          <p className="text-lg text-gray-700">
            Build fast, scalable, and secure websites with modern technologies tailored to your business goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded-xl shadow-md flex items-center justify-center">
              <CodeIcon className="mr-2" size={20} /> Get a Quote
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 text-lg rounded-xl">
              Our Tech Stack
            </button>
          </div>

          <div className="flex flex-wrap gap-4 pt-6 text-sm text-gray-600">
            <div className="bg-white px-4 py-2 rounded-xl shadow-sm">⚙️ Full Stack Solutions</div>
            <div className="bg-white px-4 py-2 rounded-xl shadow-sm">🌐 Custom CMS & APIs</div>
            <div className="bg-white px-4 py-2 rounded-xl shadow-sm">🔐 Security First Approach</div>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="webdevelopment.jpg"
            alt="Web Development"
            className="w-[400px] md:w-[500px] rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
    </>
  );
};

export default WebDevelopment;
