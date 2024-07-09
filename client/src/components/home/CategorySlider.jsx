import { Carousel } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import PropTypes from 'prop-types';

const CategorySlider = () => {
  const categories = [
    {
      id: 1,
      name: "Maternity Clothes",
      image:
        "https://www.verifiedmarketreports.com/images/blogs/01-24/Top%207%20Trends%20In%20Maternity%20Personal%20Care%20Products.png",
    },
    {
      id: 2,
      name: "Prenatal Vitamins",
      image:
        "https://res.cloudinary.com/babylist/image/upload/f_auto,q_auto:best,c_scale,w_1200/v1631834149/hello-baby/Best-Pregnancy-Safe-Skincare-Products-Dermatologist-Recommended-header.jpg",
    },
    {
      id: 3,
      name: "Baby Gear",
      image:
        "https://assets.boots.com/content/dam/boots/shop-by-department/baby-and-child/2023-2024/10b/10b_Baby_PregnancyAndMaternity_Hero_Frida.dam.ts%3D1718282189857.jpg",
    },
    {
      id: 4,
      name: "Nursing Essentials",
      image:
        "https://assets.boots.com/content/dam/boots/shop-by-department/baby-and-child/2023-2024/11b/11B_Baby_PregnancyAndMaternitiy_50_Pos1.dam.ts%3D1718274467031.jpg",
    },
    {
      id: 5,
      name: "Maternity Skincare",
      image:
        "https://cdn.shopify.com/s/files/1/0438/6226/1925/products/OptibacPregnancy_large.webp?v=1664958218",
    },
    {
      id: 6,
      name: "Maternity Books",
      image:
        "https://www.pnmag.com/wp-content/uploads/2022/06/20-pregnancy-must-haves.jpg",
    },
  ];

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} z-10`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <RightOutlined className="text-3xl text-primary" />
      </div>
    );
  };

  SampleNextArrow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} z-10`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <LeftOutlined className="text-3xl text-primary" />
      </div>
    );
  };

  SamplePrevArrow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-pink-100 to-rose-200">
      <div className="container mx-auto">
        <h2
          className="text-6xl font-serif font-light text-center mb-6 text-primary relative
                      before:content-[''] before:absolute before:w-24 before:h-1 before:bg-primary
                      before:-bottom-2 before:left-1/2 before:-translate-x-1/2"
        >
          Discover Your Maternity Essentials
        </h2>
        <p className="text-center text-primary mb-16 font-light italic text-xl">
          Indulge in our exquisite collection curated just for you
        </p>
        <Carousel
          autoplay
          dots={true}
          slidesToShow={4}
          slidesToScroll={1}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
          nextArrow={<SampleNextArrow />}
          prevArrow={<SamplePrevArrow />}
          className="category-carousel"
        >
          {categories.map((category) => (
            <div key={category.id} className="px-2">
              <div className="relative group overflow-hidden rounded-3xl shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/50 to-transparent 
                                flex flex-col items-center justify-end opacity-0 group-hover:opacity-100 transition-all duration-500"
                >
                  <h3 className="text-white text-3xl font-serif mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {category.name}
                  </h3>
                  <button
                    onClick={() =>
                      console.log(`Clicked on category: ${category.name}`)
                    }
                    className="text-primary text-lg font-light tracking-wide bg-white px-8 py-3 rounded-full 
               hover:bg-primary hover:text-white transition duration-300 mb-8 transform translate-y-4 
               group-hover:translate-y-0 transition-transform duration-300 delay-100 shadow-md hover:shadow-lg"
                  >
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default CategorySlider;