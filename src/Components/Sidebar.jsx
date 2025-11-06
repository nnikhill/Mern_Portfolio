import React from "react";
import { X, Mail, Phone, Calendar, MapPin, Linkedin, Github, Instagram } from "lucide-react";
import nikhilPic from "../assets/nikhilpic.jpg";
const Sidebar = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-end">
      <aside className="bg-white dark:bg-gray-900 w-80 sm:w-96 h-full shadow-2xl p-6 overflow-y-auto relative animate-slideIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-purple-600"
        >
          <X size={22} />
        </button>

        {/* Profile Info */}
        <div className="text-center mt-8">
          <img
            src={nikhilPic}
            alt="Nikhil Sharma"
            className="w-24 h-24 mx-auto rounded-full border-4 border-purple-500 shadow-md"
          />
          <h2 className="text-2xl font-semibold mt-3 text-purple-700 dark:text-purple-400">
            Nikhil Sharma
          </h2>
          <p className="text-gray-600 dark:text-gray-300">Software Engineer</p>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 my-6"></div>

        {/* Contact Details */}
        <ul className="space-y-5">
          <li className="flex items-center gap-3">
            <Mail className="text-purple-600 w-5 h-5" />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <a href="mailto:nnikhill2004@gmail.com" className="text-gray-800 dark:text-gray-200 hover:text-purple-600">
                nnikhill2004@gmail.com
              </a>
            </div>
          </li>

          <li className="flex items-center gap-3">
            <Phone className="text-purple-600 w-5 h-5" />
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <a href="tel:+917992271483" className="text-gray-800 dark:text-gray-200 hover:text-purple-600">
                +91 799-227-1483
              </a>
            </div>
          </li>

          <li className="flex items-center gap-3">
            <Calendar className="text-purple-600 w-5 h-5" />
            <div>
              <p className="text-sm text-gray-500">Birthday</p>
              <p className="text-gray-800 dark:text-gray-200">Nov 13, 2004</p>
            </div>
          </li>

          <li className="flex items-center gap-3">
            <MapPin className="text-purple-600 w-5 h-5" />
            <div>
              <p className="text-sm text-gray-500">Location</p>
              <p className="text-gray-800 dark:text-gray-200">JMT Koderma, Jharkhand, India</p>
            </div>
          </li>
        </ul>

        <div className="border-t border-gray-200 dark:border-gray-700 my-6"></div>

        {/* Social Links */}
        <div className="flex justify-center gap-5">
          <a
            href="https://www.linkedin.com/in/nikhil-sharma-80039a252"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-purple-100 dark:bg-gray-700 rounded-full hover:bg-purple-200"
          >
            <Linkedin className="text-purple-700 dark:text-purple-300 w-5 h-5" />
          </a>
          <a
            href="https://github.com/nnikhill/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-purple-100 dark:bg-gray-700 rounded-full hover:bg-purple-200"
          >
            <Github className="text-purple-700 dark:text-purple-300 w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-purple-100 dark:bg-gray-700 rounded-full hover:bg-purple-200"
          >
            <Instagram className="text-purple-700 dark:text-purple-300 w-5 h-5" />
          </a>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
