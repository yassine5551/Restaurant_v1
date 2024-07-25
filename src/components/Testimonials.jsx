import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import testimonials1 from "../assets/testimonials1.png";
import testimonials2 from "../assets/testimonials2.png";
import stars from "../assets/Stars.png";
import testimonials_img from "../assets/testimonials_img.png";
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
    {
      id: 5,
      img: testimonials2,
      rating: stars,
      text: "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper ",
      name: "The weekend",
      jobName: "CEO & Founder Inc ",
    },
  ];
  return (
    <>
      <div
        id="Customer"
        className="relative flex items-center  justify-center flex-col mt-[5rem]"
      >
        <img
          src={testimonials_img}
          alt="ma9la"
          className="leftAppear absolute left-[-5rem] top-0 h-[100%] "
        />

        <h1 className="autoShow text-secondary lg:text-4xl text-3xl font-bold text-center tracking-widest mb-2">
          Our Happy <span className="text-primary"> Customers</span>
        </h1>
        <span className="autoShow text-center text-smT mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
          eiusmod tempor incididunt
        </span>
        <Swiper
          modules={[A11y, Autoplay, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          className="rightAppear flex flex-col w-full h-full gap-10"
        >
          {Testimonials.map((item) => (
            <SwiperSlide
              key={item.title}
              className=" flex justify-center items-center pt-[5rem] pb-[0.5rem]"
            >
              <div className=" px-6 relative flex gap-12 flex-col bg-cardsColor justify-center items-center shadow-md shadow-secondary rounded-br-3xl w-[639px] h-[446px] border-[2px] border-smT">
                <div className=" absolute flex flex-col justify-center items-center top-[-13%] gap-0">
                  <img src={item.img} alt="" className=" w-[109px] h-[109px]" />
                  <img src={item.rating} alt="" />
                </div>
                <div className=" text-center text-wrap mt-16">
                  <span className="text-smT">{item.text}</span>
                </div>
                <div className="flex flex-col justify-center items-center text-center capitalize ">
                  <span className="text-[16px] font-bold text-secondary">
                    {item.name}
                  </span>
                  <span className="text-[15px] text-smT ">{item.jobName}</span>
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
