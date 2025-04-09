import React from "react";

const AboutUs = () => {
  return (
    <> <div className="bg-black p-[19px] lg:p-[30px]">dasd</div>
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Image */}
        <div className="md:w-1/2">
          <img
            src="shortAbout.jpg"
            alt="About UFOcube"
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Right Text */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            About <span className="text-blue-600">UFOcube</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            UFOcube is a creative tech agency specializing in web design, development, digital marketing, app creation, video editing, and graphics design.
            We help brands unlock their potential through innovative, user-focused solutions.
          </p>
          <p className="text-gray-600 text-base">
            Our mission is simple — to build beautiful, functional, and result-driven digital experiences. With a passionate team and proven strategies, we help businesses grow online and leave an impact.
          </p>
          <div className="mt-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded-xl shadow-md">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default AboutUs;
