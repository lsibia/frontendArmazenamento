import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">MyApp</h1>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/login" className="hover:underline">Login</Link></li>
          <li><Link to="/signup" className="hover:underline">Sign Up</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
