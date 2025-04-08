import React, { useEffect, useState } from 'react';
import {
    FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaLinkedinIn,
    FaBars, FaTimes
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [activeDropdownIndex, setActiveDropdownIndex] = useState(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => setIsNavVisible(window.innerWidth >= 1024);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMenu = () => {
        setIsMobileMenuOpen(false);
        setActiveDropdownIndex(null);
    };

    const toggleDropdown = (idx) => {
        setActiveDropdownIndex((prev) => (prev === idx ? null : idx));
    };

    const navItems = [
        { name: "Home", path: "/" },
        {
            name: "OUR SERVICES",
            subItems: [
                { name: "Digital Marketing", path: "/digital-marketing" },
                { name: "Web Designing", path: "/web-designing" },
                { name: "Web Development", path: "/web-development" },
                { name: "App Development", path: "/app-development" },
                { name: "Graphics Designing", path: "/graphics-designing" },
                { name: "Video Editing", path: "/video-editing" }
            ]
        },
        { name: "BLOG", path: "/blog" },
        { name: "PORTFOLIO", path: "/portfolio" },
        { name: "ABOUT US", path: "/about" },
        { name: "CONTACT US", path: "/contact" }
    ];

    return (
        <header className={`fixed top-0 left-0 w-full h-16 lg:h-[85px] z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-black' : 'bg-transparent'}`}>
            <div className="flex items-center justify-between px-4 md:px-8 lg:h-20 text-[13px]">
                <div className="flex items-center md:pt-2">
                    <img src="logo.png" alt="UFOcube Logo" className="w-[150px] md:w-[200px]" />
                </div>

                {/* Desktop Nav */}
                <nav
                    className={`${isNavVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
                        } hidden lg:flex gap-6 text-white font-semibold h-16 mr-4 relative transform transition-all duration-700 ease-out`}
                >
                    {navItems.map((item, idx) => (
                        <div key={idx} className="relative flex items-center px-4 h-full cursor-pointer group">
                            {item.subItems ? (
                                <span className="z-10 lg:text-[12px]">{item.name}</span>
                            ) : (
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `z-10 lg:text-[12px] px-2 py-1 ${isActive ? 'bg-green-800 text-white rounded-md' : ''}`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            )}
                            <div className="absolute inset-0 bg-green-800 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                            {/* Dropdown */}
                            {item.subItems && (
                                <div className="absolute top-full left-0 bg-white text-black rounded shadow-lg z-50 w-[300px] transform transition-all duration-300 ease-in-out origin-top scale-y-0 opacity-0 max-h-0 overflow-hidden group-hover:scale-y-100 group-hover:opacity-100 group-hover:max-h-screen">
                                    {item.subItems.map((subItem, subIdx) => (
                                        <NavLink
                                            key={subIdx}
                                            to={subItem.path}
                                            className={({ isActive }) =>
                                                `block px-4 py-2 text-slate-800 hover:bg-slate-800 hover:text-white ${isActive ? 'bg-green-700 text-white' : ''}`
                                            }
                                        >
                                            {subItem.name}
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Desktop Social Icons */}
                <div className="hidden mm:flex gap-4 text-[27px] text-black">
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


                {/* Mobile Toggle */}
                <div className={`lg:hidden p-2 rounded-md transition-all duration-300 ${isMobileMenuOpen ? 'bg-black' : 'bg-transparent'}`}>
                    <div
                        className={`text-white text-3xl cursor-pointer transition-transform duration-500 ${isMobileMenuOpen ? 'rotate-180' : 'rotate-0'}`}
                        onClick={toggleMenu}
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </div>

            {/* Mobile & Tablet Menu */}
            <div
                className={`lg:hidden bg-black text-white px-6 py-6 space-y-4 transition-all duration-300 ease-in-out origin-top
                ${isMobileMenuOpen ? 'opacity-100 scale-y-100 max-h-screen' : 'opacity-0 scale-y-95 max-h-0 overflow-hidden'}
                `}
            >
                {navItems.map((item, idx) => (
                    <div key={idx} className="relative">
                        <div
                            className="hover:bg-green-800 cursor-pointer border-b border-gray-700 pb-2 rounded-md p-1 flex justify-between items-center"
                            onClick={() => {
                                if (item.subItems) {
                                    toggleDropdown(idx);
                                } else {
                                    closeMenu();
                                }
                            }}
                        >
                            {item.subItems ? (
                                <span>{item.name}</span>
                            ) : (
                                <NavLink
                                    to={item.path || "#"}
                                    onClick={() => {
                                        if (item.subItems) {
                                            toggleDropdown(idx);
                                        } else {
                                            closeMenu();
                                        }
                                    }}
                                    className={({ isActive }) =>
                                        `flex justify-between items-center w-full ${isActive ? 'bg-green-700 text-white px-2 py-1 rounded-md' : ''}`
                                    }
                                >
                                    {item.name}
                                    {item.subItems && (
                                        <span className="ml-auto">{activeDropdownIndex === idx ? "▲" : "▼"}</span>
                                    )}
                                </NavLink>

                            )}
                            {item.subItems && (
                                <span className="ml-auto">{activeDropdownIndex === idx ? "▲" : "▼"}</span>
                            )}
                        </div>

                        {/* Mobile Dropdown */}
                        {item.subItems && (
                            <div className={`w-full bg-white text-black rounded-md mt-1 overflow-hidden shadow-md transform transition-all duration-300 ease-in-out origin-top
                                ${activeDropdownIndex === idx ? "scale-y-100 opacity-100 max-h-[500px]" : "scale-y-95 opacity-0 max-h-0"}
                            `}>
                                {item.subItems.map((subItem, subIdx) => (
                                    <NavLink
                                        key={subIdx}
                                        to={subItem.path}
                                        onClick={closeMenu}
                                        className={({ isActive }) =>
                                            `block px-4 py-3 text-slate-800 hover:bg-slate-800 hover:text-white border-b border-gray-200 cursor-pointer ${isActive ? 'bg-green-700 text-white' : ''}`
                                        }
                                    >
                                        {subItem.name}
                                    </NavLink>
                                ))}
                            </div>
                        )}
                    </div>
                ))}

                {/* Mobile Social Icons */}
                <div className="flex justify-center gap-4 pt-4 text-[22px]">
                    <a href="https://www.facebook.com/ufocube" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className="bg-slate-300 text-black hover:cursor-pointer hover:bg-green-600 p-1 rounded-full transition-all" />
                    </a>
                    <a href="https://www.instagram.com/ufocube03" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="bg-slate-300 text-black hover:cursor-pointer hover:bg-green-600 p-1 rounded-full transition-all" />
                    </a>
                    <a href="https://www.youtube.com/@ufocube3" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="bg-slate-300 text-black hover:cursor-pointer hover:bg-green-600 p-1 rounded-full transition-all" />
                    </a>
                    <a href="https://x.com/ufocube03" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="bg-slate-300 text-black hover:cursor-pointer hover:bg-green-600 p-1 rounded-full transition-all" />
                    </a>
                    <a href="https://x.com/ufocube03" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className="bg-slate-300 text-black hover:cursor-pointer hover:bg-green-600 p-1 rounded-full transition-all" />
                    </a>
                </div>

            </div>
        </header>
    );
}
