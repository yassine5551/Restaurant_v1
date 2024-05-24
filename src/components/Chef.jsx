
import ButtonComp from "./ButtonComp";
import ButtonComp2 from "./ButtonComp2";
import chef from "../assets/chef.png"
const ChefSection = () => {
  return (
      <>
          <div className="flex md:flex-row flex-col justify-between gap-[5rem]  mt-[150px] items-center ">
        {/* leftSide */}
        <div className="flex flex-col relative ">
          
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
  )
}

export default ChefSection
