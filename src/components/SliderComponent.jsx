import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const data = [
  {
    id: 1,
    text: "Este es el texto del primer slide.",
    image: "url_de_tu_imagen_1.jpg",
  },
  {
    id: 2,
    text: "Texto para el segundo slide.",
    image: "url_de_tu_imagen_2.jpg",
  },
  {
    id: 3,
    text: "Aquí va el texto del tercer slide.",
    image: "url_de_tu_imagen_3.jpg",
  },
];

const SliderComponent = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map(({ id, text, image }) => (
        <SwiperSlide key={id}>
          <div className="slide-content">
            <div className="text-part">
              <p>{text}</p>
            </div>
            <div className="image-part">
              <img src={image} alt={`Slide ${id}`} />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderComponent;
