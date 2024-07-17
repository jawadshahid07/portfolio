import React from 'react';

function Header() {
  return (
    <header className="fixed w-full p-5 bg-primary shadow-3xl flex justify-center text-white">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#hero" className="hover:text-gray-400">Home</a>
          </li>
          <li>
            <a href="#education" className="hover:text-gray-400">Education</a>
          </li>
          <li>
            <a href="#experience" className="hover:text-gray-400">Experience</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-400">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
