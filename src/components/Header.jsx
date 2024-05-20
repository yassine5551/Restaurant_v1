import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import ButtonComp from "./ButtonComp";

const Header = () => {
  let Links = [
    {
      name: "Menu",
      link: "/menu",
    },
    {
      name: "Events",
      link: "/Events",
    },
    {
      name: "Gallery",
      link: "/Gallery",
    },
    {
      name: "About",
      link: "/About",
    },
    {
      name: "Contact",
      link: "/Contact",
    },
  ];
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <div className="flex  md:flex-row justify-between items-center w-full h-[100px] px-6 ">
        <div className="flex justify-center items-center">
          <img className="w-36" src={logo} alt="" />
        </div>
        <nav className="hidden md:flex md:text-sm  mt-4">
          <ul className="flex flex-row justify-center items-center gap-6 md:gap-2 lg:gap-8 ">
            {Links.map((link) => (
              <li key={link.name} className="cursor-pointer hover:text-primary">
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:flex md:px-2 md:py-2">
          <ButtonComp txt1="Book A Table"/>
        </div>
        <div className="flex items-center md:hidden">
          <button onClick={() => setIsNavOpen(!isNavOpen)} className="text-2xl">
            <FontAwesomeIcon icon={isNavOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isNavOpen && (
        <div className="md:hidden bg-orange-500 w-full py-4  rounded  ">
          <nav>
            <ul className="flex flex-col items-center gap-4 text-white">
              {Links.map((link) => (
                <li key={link.name} className="cursor-pointer">
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
              <li>
                <button className="mt-4 px-4 py-2 rounded-tl-xl rounded-br-xl bg-red-500 hover:bg-orange-500  text-white ">
                  Book A Table
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
