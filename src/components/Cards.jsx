import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import dish1 from "../assets/dish1.png";
import dish2 from "../assets/dish5.png";
import dish3 from "../assets/dish3.png";
import dish4 from "../assets/dish4.png";
const Cards = () => {
  const Dishes = [
    {
      title: "Lumpia with Suace",
      image: dish1,
      price: 10,
      description:
        "Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor ",
    },
    {
      title: "Fish and Veggie",
      image: dish2,
      price: 20,
      description:
        "Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor ",
    },
    {
      title: "Tofu Chili",
      image: dish3,
      price: 30,
      description:
        "Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor ",
    },
    {
      title: "Egg and Cocumber",
      image: dish4,
      price: 40,
      description:
        "Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor ",
    },
  ];
  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <h1>Our Special Dishes</h1>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </span>
        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={10}
          slidesPerView={3}
          pagination={{ clickable: true }}
          className="w-full h-full"
        >
          
          {Dishes.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="relative flex justify-center items-center flex-col mt-12">
                <img className=" w-[207px] h-[207px]" src={item.image} alt="" />
                <span className="absolute flex items-center justify-center top-[1.9rem] right-[4.5rem] rounded-full w-[54px] h-[54px] bg-black text-white">
                  ${item.price}
                </span>

                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Cards;
