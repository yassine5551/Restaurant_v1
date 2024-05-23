import ButtonComp from "./ButtonComp";
import ButtonComp2 from "./ButtonComp2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import heroLogo from "../assets/hero_logo.png";
import heroDish from "../assets/hero_dish.png";
import Maskhero from "../assets/MaskHero.png";
import zaater from "../assets/zaater_img.png";
import zaaterRow from "../assets/zaater_row_img.png";
import Flower from "../assets/flower_img.png";

import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Hero = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col justify-between gap-[5rem]  mt-[150px] items-center ">
        {/* leftSide */}
        <div className="flex flex-col relative ">
          <div className="absolute md:top-[-9rem] top-[-6rem] md:left-[-2rem] left-[1rem]">
            <img src={heroLogo} alt="" width={90} />
          </div>
          <div className="flex flex-col gap-8 ">
            <h1 className="tracking-wide font-bold text-4xl lg:text-5xl leading-normal mb-2 md:mb-6 text-secondary ">
              We provide the <br />
              <span className="text-primary">best food for you</span>
            </h1>
            <p className="text-sm text-smT">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br /> sed do eiusmod tempor incididunt <br /> ut labore et dolore
              magna aliqua.
            </p>
            <div className="flex gap-5">
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
            <img
              src={zaater}
              className=" absolute bottom-0 right-[-6rem] z-[-1] opacity-45"
              alt=""
            />
            <img
              src={zaaterRow}
              className=" absolute top-[-4rem] left-[-10rem] z-[-1] opacity-45"
              alt=""
            />
            <img
              src={Flower}
              className=" absolute top-[-6rem] right-[-6rem] z-[-1] opacity-45"
              alt=""
            />
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
