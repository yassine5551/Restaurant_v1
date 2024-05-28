import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import testimonials1 from "../assets/testimonials1.png";
import testimonials2 from "../assets/testimonials2.png";
import stars from "../assets/Stars.png";
const Testimonials = () => {
  const Testimonials = [
    {
      id: 1,
      img: testimonials1,
      rating: stars,
      text: "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper ",
      name: "Ama Ampomah",
      jobName: "CEO & Founder Inc ",
    },
    {
      id: 2,
      img: testimonials2,
      rating: stars,
      text: "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper ",
      name: "Kweku Annan",
      jobName: "CEO & Founder Inc ",
    },
    {
      id: 3,
      img: testimonials1,
      rating: stars,
      text: "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper ",
      name: "Ahmed Ben Jellon",
      jobName: "CEO & Founder Inc ",
    },
    {
      id: 4,
      img: testimonials2,
      rating: stars,
      text: "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper ",
      name: "The weekend",
      jobName: "CEO & Founder Inc ",
    },
  ];
  return (
    <>
      <div className="relative flex items-center  justify-center flex-col mt-[5rem]">
        <img
          src=""
          alt=""
          className="absolute top-[3rem] right-[-2rem] w-[150px] lg:top-[-3.6rem] lg:right-[15rem] z-[-10] lg:w-[180px] opacity-40"
        />
        <img
          src=""
          alt=""
          className="absolute top-0 left-0 w-[150px] lg:w-[180px] lg:top-[-1.5rem] lg:left-[12rem] z-[-10] opacity-90 lg:opacity-70 "
        />
        <h1 className="text-secondary lg:text-4xl text-3xl font-bold text-center tracking-widest mb-2">
          Our Happy <span className="text-primary"> Customers</span>
        </h1>
        <span className="text-center text-smT mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
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
            modules={[A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={2}
          pagination={{ clickable: true }}
          infinit loop
        >
          {Testimonials.map((item) => (
            <SwiperSlide
              key={item.title}
              className="flex pt-[5rem] pb-[2rem] "
              >
                  <div className="px-6 relative flex gap-6 flex-col bg-cardsColor justify-center items-center shadow-md shadow-secondary rounded-br-3xl w-[639px] h-[446px] border-[2px] border-black">
                      <div className="">
                          <img src={item.img} alt="" className="absolute top-[-13%]"/>
                          <img src={item.rating} alt="" />
                      </div>
                      <div className="text-center text-wrap">
                          <span>{ item.text}</span>
                      </div>
                      <div className="flex flex-col">
                          <span>{item.name}</span>
                          <span>{item.jobName}</span>
                      </div>

                  </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Testimonials;
