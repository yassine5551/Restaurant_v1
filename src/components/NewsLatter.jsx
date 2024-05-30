const NewsLatter = () => {
  return (
    <>
      <div
        className="bg-newsImage bg-cover w-full h-[300px] rounded-3xl flex justify-center items-center flex-col  gap-6"
      >
        <div className="text-white flex justify-center items-center ">
          <p className="font-bold text-[35px]">
            Get Or Promo Code by <br />
            Subscribing To our Newsletter
          </p>
        </div>
        <div>
          <input type="email" />
          <button>Subscribe</button>
        </div>
      </div>
    </>
  );
};

export default NewsLatter;
