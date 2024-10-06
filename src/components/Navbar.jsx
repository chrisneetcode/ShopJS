import { IoMdMenu } from "react-icons/io";
import logo from "../assets/logo.png";
import { useState } from "react";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">Your Logo</span>
          </div>
          <ul className="hidden lg:flex ml-14 font-bold text-transform: uppercase space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a
              href="#"
              className="bg-gradient-to-r from-green-300 to-teal-400 py-2 px-3 rounded-md font-bold text-transform: uppercase text-black"
            >
              Check Out
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <IoMdMenu /> : <IoMdMenu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a
                href="#"
                className="bg-gradient-to-r from-green-300 to-teal-400 py-2 px-3 rounded-md font-bold text-transform: uppercase text-black"
              >
                Check Out
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
