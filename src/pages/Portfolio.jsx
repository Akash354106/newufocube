import React from "react";

const projects = [
  {
    title: "E-commerce Website",
    desc: "A modern online store with product filtering, cart, and payment integration.",
    img: "portfolioimg/ecommerce-site.jpg",
  },
  {
    title: "Business Landing Page",
    desc: "Responsive landing page for a startup focused on lead conversion.",
    img: "portfolioimg/landing-page.jpg",
  },
  {
    title: "Mobile App UI",
    desc: "User-friendly app UI designed for both Android and iOS platforms.",
    img: "portfolioimg/mobile-app.jpg",
  },
  {
    title: "Digital Marketing Dashboard",
    desc: "Data-driven dashboard for campaign performance tracking and analytics.",
    img: "portfolioimg/seo-marketing.jpg",
  },
  {
    title: "Video Editing Reel",
    desc: "High-quality video reel project for a YouTube content creator.",
    img: "portfolioimg/video-editing.jpg",
  },
  {
    title: "Graphic Design Portfolio",
    desc: "A curated set of logo, branding, and social media creatives.",
    img: "portfolioimg/graphic-design.jpg",
  },
];

const Portfolio = () => {
  return (
    <><div className="bg-black p-[19px] lg:p-[30px]">dasd</div>
    <section className="py-20 pt-4 px-6 md:px-20 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Our Portfolio</h2>
        <p className="text-gray-600 mt-2">Some of the awesome work we've done for our clients</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
          >
            <img src={project.img} alt={project.title} className="w-full h-auto object-cover p-2" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Portfolio;
