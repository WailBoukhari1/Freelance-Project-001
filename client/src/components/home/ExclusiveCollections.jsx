
const ExclusiveCollections = () => {
  // Dummy data for exclusive collections
  const exclusiveCollections = [
    {
      id: 1,
      title: "Spring Collection",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/gh-best-skincare-products-6557978b58b57.png?crop=0.502xw:1.00xh;0.256xw,0&resize=640:*",
    },
    {
      id: 2,
      title: "Summer Vibes",
      image:
        "https://omastradesinternational.com/wp-content/uploads/2017/07/skin-care-lines.jpg?w=700",
    },
    {
      id: 3,
      title: "Fall Essentials",
      image:
        "https://i.insider.com/6058c3de106eb50019d04e98?width=1136&format=jpeg",
    },
    {
      id: 4,
      title: "Winter Wonderland",
      image:
        "https://www.abeautyedit.com/wp-content/uploads/2021/02/best-skincare-routine-for-dry-skin.jpg.webp",
    },
  ];

  return (
    <section className=" rounded-none collection-section p-10">
      <h2 className=" rounded-none text-3xl font-bold text-center mb-8">
        Exclusive Collections
      </h2>
      <div className=" rounded-none grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {exclusiveCollections.map((collection) => (
          <div
            key={collection.id}
            className=" rounded-none group bg-white  overflow-hidden relative"
          >
            <img
              src={collection.image}
              alt={collection.title}
              className=" rounded-none w-full h-64 object-cover transition duration-300 transform group-hover:scale-105"
            />
            <div className=" rounded-none absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className=" rounded-none text-white text-lg font-semibold bg-gray-900 bg-opacity-75 py-2 px-6  hover:bg-opacity-100 transition duration-300">
                Shop Now
              </button>
            </div>
            <div className=" rounded-none p-4">
              <h3 className=" rounded-none text-xl font-semibold mb-2">{collection.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExclusiveCollections;
