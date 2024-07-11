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
  ];

  return (
    <section className="my-5 py-10 px-10 bg-gradient-to-br from-pink-50 to-pink-100">
      <div className="container mx-auto">
        <h2 className="text-5xl font-serif font-light text-center mb-6 text-primary relative before:content-[''] before:absolute before:w-24 before:h-1 before:bg-primary before:-bottom-2 before:left-1/2 before:-translate-x-1/2">
          Discover Your Maternity Essentials
        </h2>
        <p className="text-center text-primary mb-16 font-light italic text-lg">
          Indulge in our exquisite collection curated just for you
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-72 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out rounded-lg">
                <h3 className="text-white text-2xl font-serif mb-4">
                  {category.name}
                </h3>
                <button
                  onClick={() =>
                    console.log(`Clicked on category: ${category.name}`)
                  }
                  className="text-primary text-lg font-light tracking-wide bg-white px-6 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySlider;
