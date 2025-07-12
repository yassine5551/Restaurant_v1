import ButtonComp from "./ButtonComp";
import ButtonComp2 from "./ButtonComp2";
import dish from "../assets/3rdSection_dish.png";

// leafs
import leaf1 from "../assets/leaf-1.png";
import leaf2 from "../assets/leaf-2.png";
import leaf3 from "../assets/leaf-3.png";
const Details = () => {
  return (
    <>
      <div id="details" className=" flex md:flex-row flex-col justify-between gap-[5rem]  mt-[90px] items-center ">
        {/* rightSide */}
        <div className="relative ">
          <div className="lg:w-[600px]  w-[300px] relative">
            <img src={dish} alt="" className="autoShow"/>
           
            <img
              src={leaf1}
              alt=""
              className=" leftAppear absolute lg:top-[11rem] top-[5.5rem] lg:left-[0rem]  lg:w-[91px] w-[50px] lg:h-[189px]"
            />
            <img
              src={leaf2}
              alt=""
              className="rightAppear absolute lg:bottom-[-1rem] left-[1rem] bottom-0  w-[104px] lg:w-[209px] lg:h-[133px]"
            />
            <img
              src={leaf3}
              alt=""
              className="rightAppear absolute lg:top-[3.8rem] top-[1.9rem] lg:right-[-4.5rem] right-[-2.5rem] lg:w-[191px] w-[100px] lg:h-[129px]"
            />
          </div>
        </div>
        {/* leftSide */}
        <div className="flex flex-col relative  ">
          <div className="flex flex-col gap-8  ">
            <h1 className="autoShow tracking-wide font-bold text-4xl lg:text-5xl leading-normal mb-2 md:mb-3 text-secondary text-center md:text-left">
              Welcome to Our <br />
              <span className="text-primary">Restaurant</span>
            </h1>
            <p className="autoShow text-sm text-smT text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br /> sed do eiusmod tempor incididunt <br /> ut labore et dolore
              magna aliqua.
            </p>
            {/* buttons */}
            <div className="flex gap-5 leftAppear justify-center md:justify-start">
              <ButtonComp2 txt2="Menu" />

              <ButtonComp txt1="Book A Table" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
