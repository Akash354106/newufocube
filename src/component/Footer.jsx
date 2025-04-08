import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {

  const navItems = [
    { name: "BLOG", path: "/blog" },
    { name: "PORTFOLIO", path: "/portfolio" },
    { name: "ABOUT US", path: "/about" },
    { name: "CONTACT US", path: "/contact" }
  ];



  return (
    <footer className="bg-black text-white px-4 md:px-10 py-5 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <ul className="flex flex-wrap gap-3 text-xs md:text-sm font-medium">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.path}
                className="text-white hover:text-yellow-400 transition-colors duration-200 ease-in-out"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>


        <div className="flex gap-4 text-[27px] text-black justify-center md:justify-end">
          <a href="https://www.facebook.com/ufocube" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="bg-slate-300 hover:cursor-pointer hover:bg-green-600 p-1 rounded-full transition-all" />
          </a>
          <a href="https://www.instagram.com/ufocube03" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="bg-slate-300 hover:cursor-pointer hover:bg-green-600 p-1 rounded-full transition-all" />
          </a>
          <a href="https://www.youtube.com/@ufocube3" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="bg-slate-300 hover:cursor-pointer hover:bg-green-600 p-1 rounded-full transition-all" />
          </a>
          <a href="https://x.com/ufocube03" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="bg-slate-300 hover:cursor-pointer hover:bg-green-600 p-1 rounded-full transition-all" />
          </a>
          <a href="https://x.com/ufocube03" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="bg-slate-300 hover:cursor-pointer hover:bg-green-600 p-1 rounded-full transition-all" />
          </a>
        </div>

      </div>

      <hr className="my-3 border-gray-600 w-[300px] mx-auto" />

      <div className="text-center">
        <p className="text-sm md:text-base">
          Copyright 2025 | Designed By
          <span className="text-yellow-500 ml-1 font-medium">UFOCube</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
