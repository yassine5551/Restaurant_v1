import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  let Links = [
    { name: "Home", to: "/" },
    { name: "Menu", to: "/menu" },
    {name:'About us', to:'/about'},
    { name: "Our chef", to: "/chefs" },
    { name: "Gallery", to: "/Gallery" },
    { name: "Contact", to: "/contact" },
  ];

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOpenNav = () => {
    setIsNavOpen(true);
    setIsAnimating(true);
  };

  const handleCloseNav = () => {
    setIsAnimating(false);
    setTimeout(() => setIsNavOpen(false), 2500); // Duration of the close animation
  };

  return (
    <>
      <div className=" flex md:flex-row justify-between items-center w-full h-[80px] px-6 ">
        <div
          className={`${
            isNavOpen ? "fixed top-5 z-[1000]" : ""
          } " flex justify-center items-center z-[1000]"`}
        >
          <img className="w-36" src={logo} alt="" />
        </div>
        <nav className="hidden md:flex md:text-sm mt-4">
          <ul className="flex flex-row justify-center items-center gap-6 md:gap-2 lg:gap-8">
            {Links.map((link) => (
              <li
                key={link.name}
                className="cursor-pointer hover:text-primary font-[500]"
              >
                <Link to={link.to} smooth={true} duration={500}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:flex md:px-2 md:py-2 mt-4">
          <button className="px-4 py-4 rounded-tl-xl rounded-br-xl bg-primary hover:bg-orange-500 text-white">
            Book A Table
          </button>
        </div>
        <div
          className={`${
            isNavOpen ? "fixed top-5 right-10 z-[1000]" : ""
          }  "flex items-center justify-center md:hidden z-[100]"`}
        >
          <button
            onClick={() => (isNavOpen ? handleCloseNav() : handleOpenNav())}
            className="text-2xl"
          >
            <FontAwesomeIcon icon={isNavOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isNavOpen && (
        <div
          className={`fixed bottom-0 z-10 bg-orange-300 top-0 left-0 flex justify-center items-center h-full w-full  ${
            isAnimating ? "anim" : "anim-closed"
          }`}
        >
          <div className={isAnimating ? "" : "anim-closed"}>
            <nav>
              <ul className="flex flex-col items-center gap-4 text-white text-2xl">
                {Links.map((link) => (
                  <li key={link.name} className="cursor-pointer">
                    <Link to={link.link}>{link.name}</Link>
                  </li>
                ))}
                <li>
                  <button className="mt-4 px-4 py-2 rounded-tl-xl rounded-br-xl bg-orange-500 hover:bg-orange-500 text-white">
                    Book A Table
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
