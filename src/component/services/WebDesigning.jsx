import React from "react";
import { PaintbrushIcon } from "lucide-react";

const WebDesigning = () => {
  return (
    <> <div className="bg-black p-[19px] lg:p-[30px]">dasd</div>
    <section className="bg-gradient-to-r from-purple-50 via-indigo-50 to-white py-20 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side Content */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Creative <span className="text-purple-600">Web Designing</span> Solutions
          </h1>
          <p className="text-lg text-gray-700">
            Stand out online with stunning, responsive, and user-friendly web designs that convert visitors into clients.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 text-lg rounded-xl shadow-md flex items-center justify-center">
              <PaintbrushIcon className="mr-2" size={20} /> Request a Demo
            </button>
            <button className="border border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3 text-lg rounded-xl">
              View Portfolio
            </button>
          </div>

          <div className="flex flex-wrap gap-4 pt-6 text-sm text-gray-600">
            <div className="bg-white px-4 py-2 rounded-xl shadow-sm">🎨 Custom UI/UX</div>
            <div className="bg-white px-4 py-2 rounded-xl shadow-sm">📱 Responsive Design</div>
            <div className="bg-white px-4 py-2 rounded-xl shadow-sm">⚡ Lightning Fast</div>
          </div>
        </div>

        {/* Right Side Image */}
        <div>
          <img
            src="webdesigne.jpg"
            alt="Web Designing"
            className="w-[400px] md:w-[500px] rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
    </>
  );
};

export default WebDesigning;
