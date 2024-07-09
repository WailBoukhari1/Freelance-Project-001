import Slider from "react-slick";

const CategorySlider = () => {
  // Dummy data for categories
  const categories = [
    {
      id: 1,
      name: "Category 1",
      image:
        "https://peacefull.com/cdn/shop/collections/Cleanser-scaled.jpg?v=1684240485",
    },
    {
      id: 2,
      name: "Category 2",
      image:
        "https://media.glamour.com/photos/639d05c7d0d74927483ca574/16:9/w_3487,h_1961,c_limit/12-16-editors-picks.jpg",
    },
    {
      id: 3,
      name: "Category 3",
      image:
        "https://peacefull.com/cdn/shop/collections/Cleanser-scaled.jpg?v=1684240485",
    },
    {
      id: 4,
      name: "Category 4",
      image:
        "https://media.glamour.com/photos/639d05c7d0d74927483ca574/16:9/w_3487,h_1961,c_limit/12-16-editors-picks.jpg",
    },
    {
      id: 5,
      name: "Category 5",
      image:
        "https://peacefull.com/cdn/shop/collections/Cleanser-scaled.jpg?v=1684240485",
    },
    {
      id: 6,
      name: "Category 6",
      image:
        "https://media.glamour.com/photos/639d05c7d0d74927483ca574/16:9/w_3487,h_1961,c_limit/12-16-editors-picks.jpg",
    },
    // Add more categories as needed
  ];

  // Settings for the react-slick slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className=" rounded-none category-section p-10">
      <h2 className=" rounded-none text-3xl font-bold text-center mb-6">Shop by Category</h2>
      <Slider {...settings}>
        {categories.map((category) => (
          <div key={category.id} className=" rounded-none px-4">
            <div className=" rounded-none relative">
              <img
                src={category.image}
                alt={category.name}
                className=" rounded-none mx-auto mb-4 "
                style={{ width: "500px", height: "200px", objectFit: "cover" }}
              />
              <div className=" rounded-none absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => {
                    // Handle click on category (e.g., navigate to category page)
                    console.log(`Clicked on category: ${category.name}`);
                  }}
                  className="w-[500px] h-full rounded-none text-xl font-semibold text-white bg-black bg-opacity-50 px-4 py-2 hover:bg-opacity-75 transition duration-300"
                >
                  {category.name}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CategorySlider;
