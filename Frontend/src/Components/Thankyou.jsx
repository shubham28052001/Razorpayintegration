
import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">
      <h1 className="text-3xl font-bold text-green-600 mb-4">🎉 Thank You!</h1>
      <p className="text-gray-700 mb-6">Your contribution was successful. We appreciate your support! 🙏</p>
      <Link
        to="/"
        className="bg-[#00C0BC] hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold transition"
      >
        Go to Main Page
      </Link>
    </div>
  );
};

export default ThankYou;
