import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  let Links = [
    { name: "Menu", link: "/menu" },
    { name: "Events", link: "/Events" },
    { name: "Gallery", link: "/Gallery" },
    { name: "About", link: "/About" },
    { name: "Contact", link: "/Contact" },
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
      <div className="flex md:flex-row justify-between items-center w-full h-[80px] px-6">
        <div className="flex justify-center items-center z-[100]">
          <img className="w-36" src={logo} alt="" />
        </div>
        <nav className="hidden md:flex md:text-sm mt-4">
          <ul className="flex flex-row justify-center items-center gap-6 md:gap-2 lg:gap-8">
            {Links.map((link) => (
              <li key={link.name} className="cursor-pointer hover:text-primary">
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:flex md:px-2 md:py-2 mt-4">
          <button className="px-4 py-4 rounded-tl-xl rounded-br-xl bg-primary hover:bg-orange-500 text-white">
            Book A Table
          </button>
        </div>
        <div className="flex items-center md:hidden z-[100]">
          <button onClick={() => (isNavOpen ? handleCloseNav() : handleOpenNav())} className="text-2xl">
            <FontAwesomeIcon icon={isNavOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isNavOpen && (
        <div className={`absolute z-10 bg-orange-300 top-0 left-0 flex justify-center items-center h-full w-full ${isAnimating ? 'anim' : 'anim-closed'}`}>
          <div className={isAnimating ? '' : 'anim-closed'}>
            <nav>
              <ul className="flex flex-col items-center gap-4 text-white text-2xl">
                {Links.map((link) => (
                  <li key={link.name} className="cursor-pointer">
                    <a href={link.link}>{link.name}</a>
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
