import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex sticky justify-between w-full items-center px-12 py-4  top-0 left-0 right-0 z-10 text-white  bg-black">
      <div>
        <h1 className="text-3xl font-bold">Studio Ghibli</h1>
      </div>
      <div className="hidden md:flex gap-5 items-center">
        {/* Links for desktop */}
        <Link className="font-medium text-base" href="/">
          Home
        </Link>
        <Link className="font-medium text-base" href="/movies">
          Movies
        </Link>
        <Link className="font-medium text-base" href="/about">
          About us
        </Link>
        <Link className="font-medium text-base" href="/gallery">
          Gallery
        </Link>

        <button className="bg-black border-2 border-white font-bold rounded text white px-8 py-2">
          Download Movies
        </button>
      </div>
      {/* Hamburger menu for mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white">
          {/* Hamburger icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black text-white">
          <div className="flex flex-col gap-2 items-center">
            <Link className="font-medium text-base" href="/" onClick={toggleMenu}>
              Home
            </Link>
            <Link className="font-medium text-base" href="/movies" onClick={toggleMenu}>
              Movies
            </Link>
            <Link className="font-medium text-base" href="/about" onClick={toggleMenu}>
              About us
            </Link>
            <Link className="font-medium text-base" href="/gallery" onClick={toggleMenu}>
              Gallery
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
