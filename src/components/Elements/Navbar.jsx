import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleNavbar = () => {
    setShow(!show);
  };

  const closeNavbar = () => {
    setShow(false);
  };

  return (
    <>
      <header className="fixed w-full z-50 py-6 bg-white shadow-md">
        <nav className="flex items-center justify-between container mx-auto px-6 w-full">
          <div>
            <a
              href="#home"
              className="text-2xl font-bold text-primary leading-tight"
            >
              Fachri Muzaki
            </a>
          </div>
          <ul className="md:flex hidden items-center justify-between gap-8">
            <li className="text-primary lg:text-lg text-sm font-semibold">
              <a href="#home">Home</a>
            </li>
            <li className="text-primary lg:text-lg text-sm font-semibold">
              <a href="#about">About Me</a>
            </li>
            <li className="text-primary lg:text-lg text-sm font-semibold">
              <a href="#project">Project</a>
            </li>
            <li className="text-primary lg:text-lg text-sm font-semibold">
              <a href="#skills">Skills</a>
            </li>
            <li className="text-primary lg:text-lg text-sm font-semibold">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <GiHamburgerMenu
            className="text-3xl md:hidden block text-primary cursor-pointer"
            onClick={handleNavbar}
          />
        </nav>
      </header>
      <div
        className={`fixed top-0 left-0 h-screen w-[40%] bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          show ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-start justify-center h-full gap-6 px-6 text-lg font-semibold text-primary">
          <li>
            <a href="#home" onClick={closeNavbar}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeNavbar}>
              About Me
            </a>
          </li>
          <li>
            <a href="#project" onClick={closeNavbar}>
              Project
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeNavbar}>
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeNavbar}>
              Contact
            </a>
          </li>
        </ul>
      </div>
      {show && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={closeNavbar}
        ></div>
      )}
    </>
  );
};

export default Navbar;
