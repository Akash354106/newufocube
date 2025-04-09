import React from "react";

const Blog = () => {
  const blogs = [
    {
      title: "Top 5 Web Design Trends in 2025",
      desc: "Explore the latest web design innovations shaping modern websites.",
      img: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
      date: "April 5, 2025",
    },
    {
      title: "How to Boost ROI with Digital Marketing",
      desc: "Proven strategies to convert clicks into loyal customers.",
      img: "dglmrkt.jpg",
      date: "April 2, 2025",
    },
    {
      title: "Why Mobile Apps are Essential for Business Growth",
      desc: "Learn how businesses leverage mobile apps for customer engagement.",
      img: "appdevlop.jpg",
      date: "March 29, 2025",
    },
  ];

  return (
    <> <div className="bg-black p-[19px] lg:p-[30px]">dasd</div>
    <section className="py-20 pt-3 px-6 md:px-20 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Latest Blog Posts</h2>
        <p className="text-gray-600 mt-2">Insights, stories & updates from the UFOcube team.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img src={blog.img} alt={blog.title} className="w-full h-52 object-cover" />
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h3>
              <p className="text-gray-600 text-sm">{blog.desc}</p>
              <button className="mt-4 text-blue-600 font-medium hover:underline">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Blog;
