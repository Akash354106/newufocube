import React from 'react';
import { Link } from 'react-router-dom';

export default function ShortServicesDetails() {
  const shortServices = [
    {
      title: "Digital Marketing",
      description: "Expand your business reach with our result-driven digital marketing strategies.",
      buttonText: "Know More",
      image: "dglmrkt.jpg",
      alt: "Digital Marketing",
      reverse: false,
      link: "/digital-marketing"
    },
    {
      title: "Web Designing",
      description: "We craft visually appealing and user-friendly website designs.",
      buttonText: "Know More",
      image: "webdesigne.jpg",
      alt: "Web Designing",
      reverse: true,
      link: "/web-designing"
    },
    {
      title: "Web Development",
      description: "We offer full-stack web development using React, Node.js, and MongoDB.",
      buttonText: "Know More",
      image: "webdevelopment.jpg",
      alt: "Web Development",
      reverse: false,
      link: "/web-development"
    },
    {
      title: "App Development",
      description: "We build high-performance Android and iOS apps using Flutter & React Native.",
      buttonText: "Know More",
      image: "appdevlop.jpg",
      alt: "App Development",
      reverse: true,
      link: "/app-development"
    },
    {
      title: "Graphics Designing",
      description: "From logos to branding — creative and professional designs.",
      buttonText: "Know More",
      image: "graphic-designer.jpg",
      alt: "Graphics Designing",
      reverse: false,
      link: "/graphics-designing"
    },
    {
      title: "Video Editing",
      description: "Sleek and professional video editing for YouTube and business.",
      buttonText: "Know More",
      image: "videoedit.jpg",
      alt: "Video Editing",
      reverse: true,
      link: "/video-editing"
    },
  ];

  return (
    <div className="bg-slate-200 py-10">
      <div className="flex flex-col items-center text-center lg:m-9 lb:m-5">
        <p className="text-2xl font-bold text-slate-600">What We Do</p>
        <p className="text-6xl font-bold text-green-600 mb-4">Our Services</p>
      </div>
      <div className='py-4 px-9 lg:px-20'>
        <div className="bg-slate-200 py-10 px-4 md:px-16">
          {shortServices.map((shservice, index) => (
            <div
              key={index}
              className={`flex flex-col ${shservice.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 mb-10`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={shservice.image}
                  alt={shservice.alt}
                  className="rounded-2xl shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-3xl text-green-600 font-bold mb-2">{shservice.title}</h3>
                <p className="text-slate-700 text-lg mb-4">{shservice.description}</p>
                <Link to={shservice.link}>
                  <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
                    {shservice.buttonText}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
