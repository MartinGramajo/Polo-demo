// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import cliente from "../assets/img/slider0.1.png";
import cliente2 from "../assets/img/slider1.png";
import cliente3 from "../assets/img/slider2.png";
import cliente4 from "../assets/img/slider3.png";
import cliente5 from "../assets/img/slider4.png";
import cliente6 from "../assets/img/slider5.png";
import cliente7 from "../assets/img/slider6.png";
import cliente8 from "../assets/img/slider7.png";
import cliente9 from "../assets/img/slider8.png";
import cliente10 from "../assets/img/slider9.png";
import cliente11 from "../assets/img/slider10.png";
import cliente12 from "../assets/img/slider11.png";

// import required modules
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

export default function Brands() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="centrado ">
            <img className="brands-width" src={cliente} alt="cliente 1 " />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="centrado ">
            <img className="brands-width" src={cliente2} alt="cliente 2 " />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="centrado ">
            <img className="brands-width" src={cliente3} alt="cliente 3 " />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="centrado ">
            <img className="brands-width" src={cliente4} alt="cliente 4 " />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="centrado ">
            <img className="brands-width" src={cliente5} alt="cliente 5 " />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="centrado ">
            <img className="brands-width" src={cliente6} alt="cliente 6 " />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="centrado ">
            <img className="brands-width" src={cliente7} alt="cliente 1 " />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="centrado ">
            <img className="brands-width" src={cliente8} alt="cliente 2 " />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="centrado ">
            <img className="brands-width" src={cliente9} alt="cliente 3 " />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="centrado ">
            <img className="brands-width" src={cliente10} alt="cliente 4 " />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="centrado ">
            <img className="brands-width" src={cliente11} alt="cliente 5 " />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="centrado ">
            <img className="brands-width" src={cliente12} alt="cliente 6 " />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
