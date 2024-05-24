import ButtonComp from "./ButtonComp";
import ButtonComp2 from "./ButtonComp2";
import chef from "../assets/chef.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck";
const ChefSection = () => {
  const skills = [
    {
      
      text: "Lorem ipsum dolor sit",
    },
    {
      
      text: "Lorem ipsum dolor sit",
    },
    {
      
      text: "Lorem ipsum dolor sit",
    },
    {
      
      text: "Lorem ipsum dolor sit",
    },
    {
      
      text: "Lorem ipsum dolor sit",
    },
    {
      
      text: "Lorem ipsum dolor sit",
    },
  ];
  return (
    <>
      <div className="flex md:flex-row flex-col-reverse justify-between gap-[5rem]  mt-[150px] items-center ">
        {/* leftSide */}
        <div className="flex flex-col relative ">
          <div className="flex flex-col gap-8 ">
            <h1 className="tracking-wide font-bold text-4xl lg:text-5xl leading-normal mb-2 md:mb-6 text-secondary ">
            Our Expects 
              <span className="text-primary"> Chef</span>
            </h1>
            <p className="text-sm text-smT">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br /> sed do eiusmod tempor incididunt <br /> ut labore et dolore
              magna aliqua.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div key={skill.text} className=" p-4">
                  <span><FontAwesomeIcon icon={faCircleCheck}  className="text-primary font-bold text-xl text-center mr-1" /></span> {skill.text}
                </div>
              ))}
            </div>

            <div className="flex gap-6 justify-center ">
              <ButtonComp2 txt2="Menu" />

              <ButtonComp txt1="Book A Table" />
            </div>
          </div>
        </div>
        {/* rightSide */}
        <div className="relative">
          <div className="md:w-[400px] w-[300px] relative">
            <img src={chef} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChefSection;
