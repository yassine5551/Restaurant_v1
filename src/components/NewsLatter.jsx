const NewsLatter = () => {
  return (
    <>
      <div className="mt-5 bg-newsImage bg-cover w-full h-[300px] rounded-3xl flex lg:justify-center justify-evenly items-center flex-col  gap-6">
        <div className="text-white flex justify-center  items-center  ">
          <div className="flex flex-col font-semibold lg:text-[35px] text-[20px] text-center">
          <span className="">
            Get Or Promo Code by 
            </span>
            <span>Subscribing To our Newsletter</span>
          </div>
        </div>
        <div className="relative">
          <input placeholder="Enter your email" type="email" className="lg:text-xl px-[1rem]  lg:w-[600px] w-[300px] lg:py-[20px] py-[15px] border-none  outline-none rounded-2xl" />
          <button className="lg:px-[20px] px-[10px]   lg:py-[10px] py:[5px] bg-primary text-white hover:bg-orange-600 text-lg rounded-md outline-none absolute right-[1rem] lg:top-[0.5rem] top-[0.8rem]">Subscribe</button>
        </div>
      </div>
    </>
  );
};

export default NewsLatter;
