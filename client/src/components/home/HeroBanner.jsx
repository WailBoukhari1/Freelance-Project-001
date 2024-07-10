import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const HeroBanner = () => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="h-[66vh]"
      >
        {bannerData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.imageUrl}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90 flex items-center justify-center">
                <div className="text-center text-gray-800 max-w-4xl px-6">
                  <h2 className="text-4xl md:text-5xl font-serif font-light mb-4 tracking-wide opacity-0 translate-y-4 animate-[fadeInUp_0.6s_ease-out_forwards]">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl mb-6 font-light opacity-0 translate-y-4 animate-[fadeInUp_0.6s_ease-out_0.3s_forwards]">
                    {slide.description}
                  </p>
                  <button className="bg-rose-300 text-white py-2 px-6 rounded-lg hover:bg-rose-400 transition duration-300 text-sm md:text-base font-medium shadow-md opacity-0 translate-y-4 animate-[fadeInUp_0.6s_ease-out_0.6s_forwards]">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

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
    description: "Supportive products for your postpartum journey and beyond.",
    buttonText: "Discover More",
  },
];

export default HeroBanner;