
import logo from "../assets/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  
} from "@fortawesome/free-brands-svg-icons";

import { faCopyright } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:flex lg:justify-between items-center  gap-4  mt-[5rem] mb-6 ">
        <div className="flex flex-col gap-6">
          <img src={logo} alt="" className="w-[180px] cursor-pointer" />
          <p className="text-smT">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, <br />

            officiis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ipsa. <br />dolor
          </p>
          <h3 className="font-bold text-secondary">opening hours</h3>
          <div className="grid lg:grid-cols-3 grid-cols-1 text-smT gap-4">
            <div >
              <p>Monday - Friday</p>
              <p>8:00 am to 9:00 pm </p>
            </div>
            <div >
              <p>Saturday</p>
              <p>8:00 am to 9:00 pm </p>
            </div>
            <div >
              <p>Sunday</p>
              <p>CLOSED</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-secondary">Navigation</h3>
          <ul className="flex flex-col gap-3 text-smT cursor-pointer">
            <li>menu</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Main dishes</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-secondary">Dishes</h3>
          <ul className="flex flex-col gap-3 text-smT cursor-pointer">
            <li>Fish & Viggies</li>
            <li>Tofu Chili</li>
            <li>Egg & Cocumber</li>
            <li>Lumpia w/Suace</li>
          </ul>
        </div>
        <div className="flex flex-col  gap-4">
          <h3 className="font-bold text-secondary md:mt-[-5.5rem]">follow us</h3>
          <div className="flex gap-4">
          <FontAwesomeIcon
                icon={faFacebook}
                className="cursor-pointer hover:text-primary lg:text-2xl text-xl"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="cursor-pointer hover:text-primary lg:text-2xl text-xl"
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="cursor-pointer hover:text-primary lg:text-2xl text-xl"
              />
          </div>
        </div>
        
      </div>
      <hr />
      <div className="flex justify-between items-center mt-6 text-sm">

        <p className="text-smT"><FontAwesomeIcon icon={faCopyright}/> 2022 Restaurants. All Right Reserved. Designed by <span className="font-bold">Isaac</span> </p>
        <div className="text-smT flex gap-2 lg:gap-6 text-[0.8rem] lg:text-sm mb-3">
          <a href="" className="">Terms of Service</a>
          <a href="">Privacy Policy</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
