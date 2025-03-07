import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const ProductSlider = () => {
  const products = [
    {
      image: "/images/home_slider/baby_food_processor.webp",
      title: "Baby Food Processor",
    },
    {
      image: "/images/home_slider/baby_strollers.webp",
      title: "Baby Strollers",
    },
    { image: "/images/home_slider/baby_walkers.webp", title: "Baby Walkers" },
    { image: "/images/home_slider/bath_supports.webp", title: "Bath Supports" },
    { image: "/images/home_slider/breast_pads.webp", title: "Breast Pads" },
  ];

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      loop={true}
      speed={3000} // Controls smoothness
      autoplay={{ delay: 0, disableOnInteraction: false }}
      allowTouchMove={false} // Prevents manual dragging
      modules={[Autoplay]}
      className="mySwiper"
    >
      {products.concat(products).map(
        (
          product,
          index, // Duplicate items for seamless effect
        ) => (
          <SwiperSlide key={index} className="bg-white text-center">
            <img src={product.image} alt={product.title} className="w-full" />
            <div className="flex w-full items-center justify-between p-4">
              <h3 className="text-left text-xl font-semibold uppercase text-black">
                {product.title}
              </h3>
              <button className="rounded-full bg-teal-500 px-3 py-1 text-2xl font-bold text-white transition-colors duration-200 hover:bg-primary-600">
                +
              </button>
            </div>
          </SwiperSlide>
        ),
      )}
    </Swiper>
  );
};

export default ProductSlider;
