import React from "react";

function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Left side: Logo */}
        <h1 className="text-2xl font-bold text-gray-800">Shabd-Setu</h1>

        {/* Right side: Buttons */}
        <div className="flex items-center space-x-4">
          <button className="bg-sky-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-sky-700 transition">
            Write
          </button>
          <button className="text-gray-600 hover:text-sky-600 transition">
            Login
          </button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-900 transition">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
