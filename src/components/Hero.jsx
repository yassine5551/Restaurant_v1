import ButtonComp from "./ButtonComp";
import ButtonComp2 from "./ButtonComp2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import heroLogo from "../assets/hero_logo.png";
import heroDish from "../assets/hero_dish.png";
import Maskhero from "../assets/MaskHero.png";


import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Hero = () => {
  return (
    <>
      <div  className="flex md:flex-row flex-col justify-between gap-[5rem]  mt-[150px] items-center ">
        {/* leftSide */}
        <div className="flex flex-col relative ">
          <div className="absolute md:top-[-9rem] top-[-6rem] md:left-[-2rem] left-[1rem]">
            <img src={heroLogo} alt="" width={90} className="spinAnim " />
          </div>
          <div className="flex flex-col gap-8 text-center">
            <h1 className="tracking-wide font-bold text-4xl lg:text-5xl leading-normal mb-2 md:mb-6 text-secondary ">
              We provide the <br />
              <span className="text-primary md:text-4xl text-3xl">best food for you</span>
            </h1>
            <p className="text-sm text-smT text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br /> sed do eiusmod tempor incididunt <br /> ut labore et dolore
              magna aliqua.
            </p>
            <div className="flex gap-5 justify-center md:justify-start">
              <ButtonComp2 txt2="Menu" />

              <ButtonComp txt1="Book A Table" />
            </div>
            <div className="flex gap-12 md:gap-8  md:justify-start items-center justify-center font-bold text-3xl ">
              <FontAwesomeIcon
                icon={faFacebook}
                className="cursor-pointer hover:text-primary"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="cursor-pointer hover:text-primary"
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="cursor-pointer hover:text-primary"
              />
            </div>
          </div>
        </div>
        {/* rightSide */}
        <div className="relative">
          <div className="md:w-[400px] w-[300px] relative">
            <img src={Maskhero} alt="" />
           
          </div>
          <div className="md:w-[200px] w-[150px] absolute md:top-[22rem] md:left-[-7rem] top-[-5rem] left-[-3rem]">
            <img src={heroDish} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
