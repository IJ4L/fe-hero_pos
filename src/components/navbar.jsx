import Hamburger from "hamburger-react";
import React, { useState } from "react";

const Navbar = ({ scrolling }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navBgClass = scrolling || isOpen ? "bg-white border-gray-300" : "bg-transparent";
  const textColorClass = scrolling || isOpen ? "text-secondary" : "text-white";
  const buttonClass = scrolling || isOpen
    ? "bg-secondary text-white border-black"
    : "bg-white text-secondary";

  const logoSrc = scrolling || isOpen
    ? "src/assets/icons/heropos_dark.svg"
    : "src/assets/icons/heropos_light.svg";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav
        className={`fixed w-full flex items-center justify-between top-0 py-4 z-20 transition-all duration-300 ${navBgClass}`}
      >
        <a href="#hero" className="flex space-x-2 items-center pl-8 md:pl-20 lg:pl-20 xl:pl-56 cursor-pointer">
          <img className="size-9 rounded-lg" src={logoSrc} alt="Logo" />
          <p className={`text-md font-normal tracking-wider ${textColorClass}`}>
            HeroPos
          </p>
        </a>

        <ul
          className={`hidden xl:flex space-x-14 text-sm font-semibold ${textColorClass}`}
        >
          <li className="cursor-pointer transform hover:scale-110 transition-transform duration-200">
            <a href="#features">Features</a>
          </li>
          <li className="cursor-pointer transform hover:scale-110 transition-transform duration-200">
            <a href="#examples">Examples</a>
          </li>
          <li className="cursor-pointer transform hover:scale-110 transition-transform duration-200">
            <a href="#preview">Preview</a>
          </li>
        </ul>

        <button
          onClick={toggleMenu}
          className="xl:hidden flex flex-col items-center justify-center space-y-1 pr-8 lg:pr-20"
        >
          <Hamburger
            size={24}
            toggled={isOpen}
            toggle={setIsOpen}
            color={scrolling || isOpen ? "#000" : "#fff"}
          />
        </button>

        <div
          className={`xl:hidden absolute top-20 left-0 w-full flex bg-white shadow-md transition-all duration-500 ${isOpen
            ? "transform translate-y-0 opacity-100"
            : "transform -translate-y-10 opacity-0"
            }`}
        >
          <ul className="space-y-4 flex flex-col py-6 px-4  items-start text-center text-sm font-semibold text-black">
            <li className="cursor-pointer transform hover:scale-110 transition-transform duration-200">
              <a href="#features" onClick={() => setIsOpen(false)}>
                Features
              </a>
            </li>
            <li className="cursor-pointer transform hover:scale-110 transition-transform duration-200">
              <a href="#examples" onClick={() => setIsOpen(false)}>
                Examples
              </a>
            </li>
            <li className="cursor-pointer transform hover:scale-110 transition-transform duration-200">
              <a href="#preview" onClick={() => setIsOpen(false)}>
                Preview
              </a>
            </li>
          </ul>
          <div className="absolute h-full w-full flex justify-start items-end">
            {["#9bb6e8", "#dc94f2", "#bfc8ff", "#ff998a", "#74e8a6"].map((color, index) => (
              <div key={index} className={`h-1 w-1/5 bg-[${color}] bottom-0`} />
            ))}
          </div>
        </div>

        <a href="https://wa.me/+6281241438052?text=Halo ingin tanya - tanya terkait aplikasinya min" className="hidden xl:flex items-center space-x-5 pr-8 md:pr-20 xl:pr-56">
          <p className={`text-sm cursor-pointer ${textColorClass}`}>Feedback</p>
          <button
            className={`text-sm cursor-pointer px-5 py-2 rounded-lg transition-all duration-200 hover:scale-110 ${buttonClass}`}
          >
            Get App
          </button>
        </a>

        {scrolling && !isOpen && (
          <div className="absolute -z-10 h-full w-full flex justify-start items-end">
            {["#9bb6e8", "#dc94f2", "#bfc8ff", "#ff998a", "#74e8a6"].map((color, index) => (
              <div
                key={index}
                className="h-1 w-1/5"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
