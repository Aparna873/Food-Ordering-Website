import React from "react";
import Phonee from "../assets/icons/phone.png";
import Mail from "../assets/icons/mail.png";
import Loc from "../assets/icons/location.png";

export const Contact = () => {
  return (
    <div className="flex justify-center py-16">
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between px-4">
        {/* Contact Info Section */}
        <div className="flex flex-col md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <div className="mb-8">
            <h1 className="text-2xl md:text-4xl font-bold">CONTACT US</h1>
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-center md:justify-start">
              <img src={Phonee} alt="Phone Icon" className="w-6 h-6 md:w-8 md:h-8 mr-4" />
              <p className="text-sm md:text-lg">+9190909090</p>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <img src={Mail} alt="Mail Icon" className="w-6 h-6 md:w-8 md:h-8 mr-4" />
              <p className="text-sm md:text-lg">contactinfo@gmail.com</p>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <img src={Loc} alt="Location Icon" className="w-6 h-6 md:w-8 md:h-8 mr-4" />
              <p className="text-sm md:text-lg">69 Ceres St San Francisco, California(CA), 98732</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="flex flex-col md:w-1/2 space-y-3">
          <div className="flex space-x-3">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:outline-none"
            rows="4"
          ></textarea>
          <button className="w-full md:w-36 py-2 bg-green-800 text-white rounded-lg hover:bg-orange-600 transition duration-300">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};
