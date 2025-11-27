import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import Header from '../components/Header';
import Footer from '../../components/Footer';

function Contacts() {
    return (
      <>
       <Header/>

         <div className="w-full py-10 px-4 md:px-16 lg:px-28">
      {/* Heading */}
      <h2 className="text-center text-3xl font-bold">Contacts</h2>
      <p className="text-center mt-2 max-w-3xl mx-auto text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione, officia delectus 
        consequuntur, dicta libero magni omnis architecto voluptas culpa praesentium ipsum 
        assumenda quasi dolor, nihil rerum fugit expedita corrupti.
      </p>

      {/* Contact Icons Row */}
      <div className="flex flex-col md:flex-row justify-center gap-10 mt-10">
        
        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-3xl" />
          <p className="text-sm">
            123 Main Street, Apt 4B,<br />Anytown, CA 91234
          </p>
        </div>

        <div className="flex items-center gap-3">
          <FaPhoneAlt className="text-3xl" />
          <p className="text-sm">+91 9874561230</p>
        </div>

        <div className="flex items-center gap-3">
          <FaEnvelope className="text-3xl" />
          <p className="text-sm">Bookstore@gmail.com</p>
        </div>
      </div>

      {/* Form + Map Section */}
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        
        {/* Form */}
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h3 className="text-center font-semibold mb-4">Send me Message</h3>

          <input
            type="text"
            placeholder="Name"
            className="w-full border px-3 py-2 text-sm mb-3 rounded"
          />
          <input
            type="email"
            placeholder="Email ID"
            className="w-full border px-3 py-2 text-sm mb-3 rounded"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full border px-3 py-2 text-sm mb-3 rounded"
          ></textarea>

          <button className="w-full bg-black text-white text-sm py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-800">
            Send <FaPaperPlane />
          </button>
        </div>

        {/* Map */}
        <iframe
          title="location"
          className="w-full h-80 rounded-lg shadow"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62826.90684177094!2d76.2998841441427!3d9.97885742312332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d431b09e2e5%3A0x42a0d07930a56dd2!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1701600000000!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>

      </div>
    </div>

    <Footer/>
    </>
    )
    
}

export default Contacts