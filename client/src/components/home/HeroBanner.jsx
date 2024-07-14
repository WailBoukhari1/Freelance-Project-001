import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import {Button } from "antd";

const HeroBanner = () => {
  const bannerData = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Comfortable Maternity Wear",
      title: "Embrace Motherhood",
      description:
        "Stylish and comfortable maternity wear for every stage of your journey.",
      buttonText: "Shop Collection",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Baby Essentials",
      title: "Gentle Care for Your Little One",
      description: "Premium baby essentials crafted with love and care.",
      buttonText: "Explore Baby Products",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Nursing and Postpartum Care",
      title: "Nurturing New Beginnings",
      description:
        "Supportive products for your postpartum journey and beyond.",
      buttonText: "Discover More",
    },
  ];

  return (
    <div className="relative">
      <Swiper
        spaceBetween={0}
        centeredSlides
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="h-[66vh]"
      >
        {bannerData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full my-5">
              <img
                src={slide.imageUrl}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-gray-800 max-w-4xl px-6">
                  <Button
                    type="primary"
                    size="large"
                    className="hero-banner-button"
                  >
                    {slide.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroBanner;
