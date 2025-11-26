import React from 'react'
import { Link } from 'react-router-dom'
Link

function Pnf() {
    return (
         <div className="w-full h-screen flex flex-col items-center justify-center text-center px-4">
      
      {/* Image */}
      <img
        src=""
        alt="lost"
        className="w-60 mb-6"
      />

      {/* Text */}
      <p className="text-gray-600 text-sm">Oh No !</p>
      <h1 className="text-2xl font-semibold mt-1">Look Like You're Lost</h1>
      <p className="text-gray-500 text-sm mt-2">
        The page you are looking for is not available
      </p>

      {/* Button */}
      <button
        className="mt-6 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
        onClick={() => (window.location.href = "/")}
      >
        BACK HOME
      </button>
    </div>
       
    )
}

export default Pnf