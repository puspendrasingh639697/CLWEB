


import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt, FaYoutube, FaGithub, FaGlobe } from "react-icons/fa";
import { FiClock, FiShield } from "react-icons/fi";
import { MdEngineering, MdSupportAgent } from "react-icons/md";
import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <>



            {/* MAIN FOOTER CONTENT */}
            <footer className="bg-black-900 text-gray-300 w-full py-16">
                <div className="max-w-7xl mx-auto px-6">
                    {/* 🔥 LOGO AND COMPANY INFO SECTION */}
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12 pb-8 border-b border-emerald-900/30">
                        {/* Logo and Company Name - LEFT SIDE */}
                        <div className="flex items-center gap-4 mb-6 lg:mb-0">
                            <div className="w-20 h-20 flex items-center justify-center">
                                <img
                                    src={logo}
                                    alt="Dart Tonlonty Logo"
                                    className="w-20 h-20 object-contain"
                                />
                            </div>

                            <div>
                                <h1 className="text-4xl font-bold text-white">
                                    Dart <span className="text-emerald-400">Technology</span>
                                </h1>

                                <div className="flex items-center gap-4 mt-4">
                                    <div className="flex items-center gap-2">
                                        <FiShield className="text-emerald-400" />
                                        <span className="text-sm text-gray-400">Secure Solutions</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FiClock className="text-emerald-400" />
                                        <span className="text-sm text-gray-400">24/7 Support</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tagline and Features - RIGHT SIDE */}
                        <div className="text-right">
                            <p className="text-2xl font-bold text-white mb-3">
                                Transforming Ideas Into <span className="text-emerald-400">Digital Reality</span>
                            </p>
                            <div className="flex flex-wrap gap-4 justify-end">
                                <div className="flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-lg">
                                    <MdEngineering className="text-emerald-400" />
                                    <span className="text-sm">Expert Engineers</span>
                                </div>
                                <div className="flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-lg">
                                    <MdSupportAgent className="text-emerald-400" />
                                    <span className="text-sm">Dedicated Support</span>
                                </div>
                                <div className="flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-lg">
                                    <FaGlobe className="text-emerald-400" />
                                    <span className="text-sm">Global Reach</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                        {/* Company Description - LEFT SIDE */}
                        <div className="lg:col-span-2">
                            <h3 className="text-xl font-semibold text-green-500 mb-4">About Dart Technology</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                We are a premier software development company specializing in creating
                                cutting-edge digital solutions. Our team of experts combines innovation
                                with technology to deliver exceptional results for businesses worldwide.
                            </p>



                            {/* Social Media Icons */}
                            <div>
                                <h4 className="text-white font-medium mb-3">Follow Us</h4>
                                <div className="flex items-center gap-3">
                                    <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
                                        <FaFacebookF className="text-white text-lg" />
                                    </a>
                                    <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-blue-400 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
                                        <FaTwitter className="text-white text-lg" />
                                    </a>
                                    <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
                                        <FaInstagram className="text-white text-lg" />
                                    </a>
                                    <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-blue-700 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
                                        <FaLinkedinIn className="text-white text-lg" />
                                    </a>
                                    <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
                                        <FaYoutube className="text-white text-lg" />
                                    </a>
                                    <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
                                        <FaGithub className="text-white text-lg" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-xl font-semibold text-green-500 mb-4">Quick Links</h3>
                            <ul className="space-y-3">
                                <li className="hover:text-emerald-400 cursor-pointer transition-colors flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                                    <span>Home</span>
                                </li>
                                <li className="hover:text-emerald-400 cursor-pointer transition-colors flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                                    <span>About Company</span>
                                </li>
                                <li className="hover:text-emerald-400 cursor-pointer transition-colors flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                                    <span>Our Services</span>
                                </li>
                                <li className="hover:text-emerald-400 cursor-pointer transition-colors flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                                    <span>Portfolio</span>
                                </li>
                                <li className="hover:text-emerald-400 cursor-pointer transition-colors flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                                    <span>Careers</span>
                                </li>
                                <li className="hover:text-emerald-400 cursor-pointer transition-colors flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                                    <span>Blog & News</span>
                                </li>
                                <li className="hover:text-emerald-400 cursor-pointer transition-colors flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                                    <span>Contact Us</span>
                                </li>
                            </ul>
                        </div>

                        {/* Our Services */}
                        <div>
                            <h3 className="text-xl font-semibold text-green-500 mb-4">Our Services</h3>
                            <ul className="space-y-3">
                                <li className="hover:text-emerald-400 cursor-pointer transition-colors flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                                    <span>Web Development</span>
                                </li>
                                <li className="hover:text-emerald-400 cursor-pointer transition-colors flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                                    <span>Mobile Apps</span>
                                </li>
                                <li className="hover:text-emerald-400 cursor-pointer transition-colors flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                                    <span>AI & ML Solutions</span>
                                </li>
                                <li className="hover:text-emerald-400 cursor-pointer transition-colors flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                                    <span>Cloud Services</span>
                                </li>
                                <li className="hover:text-emerald-400 cursor-pointer transition-colors flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                                    <span>UI/UX Design</span>
                                </li>
                                <li className="hover:text-emerald-400 cursor-pointer transition-colors flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                                    <span>Digital Marketing</span>
                                </li>
                                <li className="hover:text-emerald-400 cursor-pointer transition-colors flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                                    <span>SEO Services</span>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-xl font-semibold text-green-500 mb-4">Contact Info</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-12 h-12 bg-emerald-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <FaMapMarkerAlt className="text-emerald-400 text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">Our Location</h4>
                                        <p className="text-gray-400 text-sm">D-6, Sector-72, Noida, Uttar Pradesh, India</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-12 h-12 bg-emerald-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <FaPhone className="text-emerald-400 text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">Call Us</h4>
                                        <p className="text-gray-400">+91 6396976781</p>
                                        <p className="text-gray-400 text-sm">Mon-Fri 9AM-6PM</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-12 h-12 bg-emerald-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <FaEnvelope className="text-emerald-400 text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">Email Us</h4>
                                        <p className="text-gray-400">Dart@123gmail.com</p>
                                        <p className="text-gray-400 text-sm">support@4321.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* SVG WAVE - FOOTER KE BOTTOM PAR */}
            <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-visible -mt-2">
                <svg
                    className="block w-full h-[120px]"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.84-30.13,172-41.86
            c82.39-16.72,168.19-17.73,250.45-.39
            c57.84,12.59,112.43,35.25,169.81,47.06
            c118.4,24.58,233.36,2.88,343.16-41.14V120H0V16.48
            C103.29,64.41,213.72,76.75,321.39,56.44Z"
                        fill="#047857"
                    />
                </svg>
            </div>

            {/* COPYRIGHT */}
            <div className="py-4 text-gray-400 text-sm">
                <div className="max-w-7xl mx-auto px-6 flex justify-center items-center">
                    <p className="font-semibold text-center">
                        © 2025 Dart Technology. All rights reserved.
                    </p>
                </div>
            </div>

        </>
    );
};

export default Footer;