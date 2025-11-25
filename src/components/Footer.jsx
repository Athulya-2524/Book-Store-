import React from 'react'
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaArrowRight } from "react-icons/fa";

function Footer() {
    return (
         <footer className="bg-[#0d1321] text-white px-6 py-12 md:px-20">
      
      {/* Top Section */}
      <div className="grid md:grid-cols-3 gap-12">

        {/* ABOUT US */}
        <div>
          <h2 className="text-lg font-semibold mb-4">ABOUT US</h2>
          <p className="text-gray-300 leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Porro dolorum laudantium earum fugit fugiat eius voluptas 
            aperiam numquam, quos, ratione non laborum sed facere ab 
            nesciunt enim, quo necessitatibus vero!
          </p>
        </div>

        {/* NEWS LETTER */}
        <div>
          <h2 className="text-lg font-semibold mb-4">NEWS LETTER</h2>
          <p className="text-gray-300 mb-4">Stay updated with our latest trends</p>

          <div className="flex">
            <input
              type="text"
              placeholder="Email ID"
              className="w-full bg-white px-3 py-2 text-black rounded-l-md"
            />
            <button className="bg-yellow-500 px-4 flex items-center justify-center rounded-r-md">
              <FaArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* FOLLOW US */}
        <div>
          <h2 className="text-lg font-semibold mb-4">FOLLOW US</h2>
          <p className="text-gray-300 mb-4">Let us be social</p>

          <div className="flex items-center gap-5 text-xl">
            <FaInstagram className="cursor-pointer hover:text-yellow-400" />
            <FaFacebookF className="cursor-pointer hover:text-yellow-400" />
            <FaLinkedinIn className="cursor-pointer hover:text-yellow-400" />
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="w-full text-center text-sm text-gray-300 mt-10 border-t border-gray-700 pt-4">
        Copyright © 2023 All rights reserved | This website is made with love by <span className="text-yellow-400 font-semibold">Luminar Technolab</span>
      </div>
    </footer>
    )
}

export default Footer