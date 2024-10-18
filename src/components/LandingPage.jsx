import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-blue-100 text-center">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to the Mental Health Platform</h1>
      <p className="text-xl text-gray-600 mt-4">
        A safe space for you to manage your emotions and connect with others.
      </p>
      <div className="mt-8 space-x-4">
        <Link to="/signup" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Sign Up
        </Link>
        <Link to="/login" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
          Login
        </Link>
        <Link to="/dashboard" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
          Guest Access
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
