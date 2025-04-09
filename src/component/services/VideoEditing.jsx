import React from "react";
import { ScissorsIcon } from "lucide-react";

const VideoEditing = () => {
  return (
    <>
     <div className="bg-black p-[19px] lg:p-[30px]">dasd</div>
    <section className="bg-gradient-to-r from-indigo-50 via-blue-50 to-white py-20 px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left Content */}
        <div className="space-y-6 text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            High-Quality <span className="text-indigo-600">Video Editing</span> Services
          </h1>
          <p className="text-lg text-gray-700">
            We create stunning, professional, and engaging videos that amplify your brand message across platforms.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 text-lg rounded-xl shadow-md flex items-center justify-center">
              <ScissorsIcon className="mr-2" size={20} /> Edit My Video
            </button>
            <button className="border border-indigo-600 text-indigo-600 hover:bg-indigo-100 px-6 py-3 text-lg rounded-xl">
              Watch Samples
            </button>
          </div>

          <div className="flex flex-wrap gap-4 pt-6 text-sm text-gray-600">
            <div className="bg-white px-4 py-2 rounded-xl shadow-sm">🎥 Reels & YouTube Edits</div>
            <div className="bg-white px-4 py-2 rounded-xl shadow-sm">💻 Corporate Videos</div>
            <div className="bg-white px-4 py-2 rounded-xl shadow-sm">🧠 Storytelling Experts</div>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="videoedit.jpg"
            alt="Video Editing"
            className="w-[400px] md:w-[500px] rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
    </>
  );
};

export default VideoEditing;
