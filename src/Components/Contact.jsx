import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <div id='Contact' className="bg-black w-screen h-screen">
      <div>
        <p className="pt-20 font-extrabold text-5xl text-amber-500 flex items-center justify-center">Contact</p>
        <div className="flex items-center justify-center mt-40 gap-5">
          <div className="border-4 border-blue-400 rounded-3xl w-60 h-40 flex flex-col items-center justify-center text-white text-center p-4 space-y-4">
            <p className="font-extrabold">Phone</p>
            <a href="tel:+1234567890" className="flex items-center space-x-2 hover:text-green-300">
              <FaPhone size={24} />
              <span>9876543211</span>
            </a>
            </div>
           
          <div className="border-4 border-blue-400 rounded-3xl w-60 h-40 flex flex-col items-center justify-center text-white text-center p-4 space-y-4">
            <p className="font-extrabold">Mail</p>
            <a href="mailto:example@example.com" className="flex items-center space-x-2 hover:text-green-300">
              <FaEnvelope size={24} />
              <span>abi@01.com</span>
            </a>
          </div>
          <div className="border-4 border-blue-400 rounded-3xl w-60 h-40 flex flex-col items-center justify-center text-white text-center p-4 space-y-4">
            <p className="font-extrabold">Linkdin</p>
            <a href="https://linkedin.com" target="_blank"  className="flex items-center space-x-2 hover:text-green-300">
              <FaLinkedin size={24} />
              <span>abiabi</span>
            </a>
          </div>
          </div>
        </div>
      </div>
    
  );
}

export default Contact;
