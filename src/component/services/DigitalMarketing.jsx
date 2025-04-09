import React from "react";
import { MegaphoneIcon } from "lucide-react";

const DigitalMarketing = () => {
  return (
    <> <div className="bg-black p-[19px] lg:p-[30px]">dasd</div>
    <section className="bg-gradient-to-r from-orange-50 via-yellow-50 to-white py-20 px-6 md:px-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <div className="space-y-6 text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Result-Driven <span className="text-orange-600">Digital Marketing</span> Services
          </h1>
          <p className="text-lg text-gray-700">
            From SEO to social media, we create digital strategies that grow your traffic, leads & sales.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 text-lg rounded-xl shadow-md flex items-center justify-center">
              <MegaphoneIcon className="mr-2" size={20} /> Start Campaign
            </button>
            <button className="border border-orange-600 text-orange-600 hover:bg-orange-100 px-6 py-3 text-lg rounded-xl">
              Case Studies
            </button>
          </div>

          <div className="flex flex-wrap gap-4 pt-6 text-sm text-gray-600">
            <div className="bg-white px-4 py-2 rounded-xl shadow-sm">📈 Growth Hacking Experts</div>
            <div className="bg-white px-4 py-2 rounded-xl shadow-sm">💡 Paid Ads + Organic SEO</div>
            <div className="bg-white px-4 py-2 rounded-xl shadow-sm">🎯 Performance Tracking</div>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="dglmrkt.jpg"
            alt="Digital Marketing"
            className="w-[400px] md:w-[500px] rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
    </>
  );
};

export default DigitalMarketing;
