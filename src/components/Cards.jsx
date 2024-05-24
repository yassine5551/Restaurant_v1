import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// dishes images
import dish1 from "../assets/dish1.png";
import dish2 from "../assets/dish5.png";
import dish3 from "../assets/dish3.png";
import dish4 from "../assets/dish4.png";
///
import menuMain from "../assets/menuMain.pdf";
import zaater from "../assets/zaater_img.png";
import Flower from "../assets/flower_img.png";

// jus images
import creme from "../assets/cards/creme.jpg";
import strawberry from "../assets/cards/strawberry.jpg";
import pichara from "../assets/cards/pichara.jpg";
import Peppermint from "../assets/cards/Peppermint.jpg";
import orangeJus from "../assets/cards/orangeJus.jpg";
import greenJus from "../assets/cards/greenJus.jpg";
import chocolate from "../assets/cards/chocolate.jpg";

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
    {
      title: "Egg and Cocumber",
      image: dish1,
      price: 40,
      description:
        "Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor ",
    },
    {
      title: "Egg and Cocumber",
      image: dish3,
      price: 40,
      description:
        "Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor ",
    },
    {
      title: "Egg and Cocumber",
      image: dish2,
      price: 40,
      description:
        "Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor ",
    },
    {
      title: "Egg and Cocumber",
      image: dish1,
      price: 40,
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
  const juses = [
    {
      title: "creme",
      image: creme,
      price: 10,
      description: "Lorem ipsum dolor sit ",
    },
    {
      title: "za3za3",
      image: chocolate,
      price: 20,
      description: "Lorem ipsum dolor sit ,",
    },
    {
      title: "strawberry",
      image: strawberry,
      price: 30,
      description: "Lorem ipsum dolor sit",
    },
    {
      title: "pichara",
      image: pichara,
      price: 40,
      description: "Lorem ipsum dolor sit",
    },
    {
      title: "Peppermint",
      image: Peppermint,
      price: 40,
      description: "Lorem ipsum dolor sit",
    },
    {
      title: "orangeJus",
      image: orangeJus,
      price: 40,
      description: "Lorem ipsum dolor sit",
    },
    {
      title: "greenJus",
      image: greenJus,
      price: 40,
      description: "Lorem ipsum dolor sit",
    },
  ];
  return (
    <>
      <div className="relative flex items-center  justify-center flex-col mt-[5rem]">
        <img
          src={zaater}
          alt=""
          className="absolute top-[3rem] right-[-2rem] w-[150px] lg:top-[-3.6rem] lg:right-[15rem] z-[-10] lg:w-[180px] opacity-40"
        />
        <img
          src={Flower}
          alt=""
          className="absolute top-0 left-0 w-[150px] lg:w-[180px] lg:top-[-1.5rem] lg:left-[12rem] z-[-10] opacity-90 lg:opacity-70 "
        />
        <h1 className="text-secondary text-3xl font-bold text-center tracking-widest mb-2">
          Our Special Dishes
        </h1>
        <span className="text-center text-smT mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt .
          <a
            href={menuMain}
            target="_blank"
            className="ml-1 text-bold text-md text-primary underline"
          >
            | Menu pdf here.. |
          </a>
        </span>
        <Swiper
          // for responsive
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 2,
            },
            639: {
              slidesPerView: 3,
            },
            865: {
              slidesPerView: 4,
            },
            1000: {
              slidesPerView: 4,
            },
            1500: {
              slidesPerView: 4,
            },
            1700: {
              slidesPerView: 7,
            },
          }}
          modules={[ A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={4}
          // pagination={{ clickable: true }}
          // infinit loop
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            // pauseOnMouseEnter: true,
          }}
          className="w-full h-full flex flex-col "
        >
          {Dishes.map((item) => (
            <SwiperSlide key={item.title} className=" pt-[5rem] pb-[2rem] ">
              <div className="relative flex justify-center items-center flex-col gap-6 mb-[3rem] ">
                <img
                  className=" lg:w-[207px] lg:h-[207px]  rounded-full "
                  src={item.image}
                  alt=""
                />
                <span className="w-[15px] h-[15px] bg-primary rounded-full absolute top-[.8rem] right-[3.5rem] lg:top-[0.7rem] lg:right-[1.2rem] z-10 animate-bounce"></span>
                <span className="absolute flex items-center justify-center shadow-xl lg:top-[0.9rem] lg:right-[1rem] top-[1.1rem]  right-[3.8rem] rounded-full w-[35px] h-[35px] lg:w-[54px] lg:h-[54px] bg-secondary text-white text-sm lg:text-lg ">
                  ${item.price}
                </span>

                <h2 className="text-secondary text-center font-semibold lg:leading-3 text-md">
                  {item.title}
                </h2>
                <span className="text-center text-sm text-smT ">
                  {item.description}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          // for responsive
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 2,
            },
            639: {
              slidesPerView: 3,
            },
            865: {
              slidesPerView: 4,
            },
            1000: {
              slidesPerView: 4,
            },
            1500: {
              slidesPerView: 4,
            },
            1700: {
              slidesPerView: 7,
            },
          }}
          modules={[Pagination, A11y, Autoplay]}
          spaceBetween={40}
          slidesPerView={4}
          // pagination={{ clickable: true }}
          // infinit loop
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            // pauseOnMouseEnter: true,
            reverseDirection: true,
          }}
          className="w-full h-auto flex flex-col "
        >
          {juses.map((item) => (
            <SwiperSlide key={item.title} className=" pt-[5rem] pb-[2rem] ">
              <div className="relative flex justify-center items-center flex-col gap-6 mb-[3rem] ">
                <img
                  className=" lg:w-[207px] lg:h-[207px] w-[250px] h-[250px] object-cover  rounded-full "
                  src={item.image}
                  alt=""
                />
                <span className="w-[15px] h-[15px] bg-primary rounded-full absolute top-[.8rem] right-[3.5rem] lg:top-[0.7rem] lg:right-[1.2rem] z-10 animate-bounce"></span>
                <span className="absolute flex items-center justify-center shadow-xl lg:top-[0.9rem] lg:right-[1rem] top-[1.1rem]  right-[3.8rem] rounded-full w-[35px] h-[35px] lg:w-[54px] lg:h-[54px] bg-secondary text-white text-sm lg:text-lg ">
                  ${item.price}
                </span>

                <h2 className="text-secondary text-center font-semibold lg:leading-3 text-md">
                  {item.title}
                </h2>
                <span className="text-center text-sm text-smT ">
                  {item.description}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Cards;
