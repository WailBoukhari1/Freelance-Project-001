import { useState } from "react";

const FeaturedProductsTabs = () => {
  const [activeTab, setActiveTab] = useState("new");

  const tabs = [
    { id: "new", label: "New Arrivals" },
    { id: "bestSellers", label: "Best Sellers" },
    { id: "promo", label: "Promotions" },
  ];

  const products = {
    new: [
      {
        id: 1,
        title: "New Product Title 1",
        category: "Maternity",
        image:
          "https://off.com.ph/-/media/images/off/ph/products-en/update-983/plp/family-care-group-plp.png",
        price: 100,
        discountedPrice: 80,
        stock: 15,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      },
      {
        id: 2,
        title: "New Product Title 2",
        category: "Fashion",
        image:
          "https://off.com.ph/-/media/images/off/ph/products-en/update-983/plp/family-care-group-plp.png",
        price: 120,
        discountedPrice: 100,
        stock: 20,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      },
      {
        id: 3,
        title: "New Product Title 3",
        category: "Fashion",
        image:
          "https://off.com.ph/-/media/images/off/ph/products-en/update-983/plp/family-care-group-plp.png",
        price: 120,
        discountedPrice: 100,
        stock: 20,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      },
      {
        id: 4,
        title: "New Product Title 4",
        category: "Fashion",
        image:
          "https://off.com.ph/-/media/images/off/ph/products-en/update-983/plp/family-care-group-plp.png",
        price: 120,
        discountedPrice: 100,
        stock: 20,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      },
      {
        id: 5,
        title: "New Product Title 5",
        category: "Fashion",
        image:
          "https://off.com.ph/-/media/images/off/ph/products-en/update-983/plp/family-care-group-plp.png",
        price: 120,
        discountedPrice: 100,
        stock: 20,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      },
      {
        id: 6,
        title: "New Product Title 6",
        category: "Fashion",
        image:
          "https://off.com.ph/-/media/images/off/ph/products-en/update-983/plp/family-care-group-plp.png",
        price: 120,
        discountedPrice: 100,
        stock: 20,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      },
      {
        id: 7,
        title: "New Product Title 7",
        category: "Fashion",
        image:
          "https://off.com.ph/-/media/images/off/ph/products-en/update-983/plp/family-care-group-plp.png",
        price: 120,
        discountedPrice: 100,
        stock: 20,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      },
      {
        id: 8,
        title: "New Product Title 8",
        category: "Fashion",
        image:
          "https://off.com.ph/-/media/images/off/ph/products-en/update-983/plp/family-care-group-plp.png",
        price: 120,
        discountedPrice: 100,
        stock: 20,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      },
    ],
    bestSellers: [
      {
        id: 1,
        title: "Best Seller Title 1",
        category: "Electronics",
        image:
          "https://off.com.ph/-/media/images/off/ph/products-en/update-983/plp/family-care-group-plp.png",
        price: 200,
        discountedPrice: 180,
        stock: 10,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      },
      {
        id: 2,
        title: "Best Seller Title 2",
        category: "Home Appliances",
        image:
          "https://off.com.ph/-/media/images/off/ph/products-en/update-983/plp/family-care-group-plp.png",
        price: 250,
        discountedPrice: 230,
        stock: 5,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      },
      {
        id: 3,
        title: "Best Seller Title 3",
        category: "Home Appliances",
        image:
          "https://off.com.ph/-/media/images/off/ph/products-en/update-983/plp/family-care-group-plp.png",
        price: 250,
        discountedPrice: 230,
        stock: 5,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      },
      {
        id: 4,
        title: "Best Seller Title 4",
        category: "Home Appliances",
        image:
          "https://off.com.ph/-/media/images/off/ph/products-en/update-983/plp/family-care-group-plp.png",
        price: 250,
        discountedPrice: 230,
        stock: 5,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      },
      {
        id: 5,
        title: "Best Seller Title 5",
        category: "Home Appliances",
        image:
          "https://off.com.ph/-/media/images/off/ph/products-en/update-983/plp/family-care-group-plp.png",
        price: 250,
        discountedPrice: 230,
        stock: 5,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      },
      {
        id: 6,
        title: "Best Seller Title 6",
        category: "Home Appliances",
        image:
          "https://off.com.ph/-/media/images/off/ph/products-en/update-983/plp/family-care-group-plp.png",
        price: 250,
        discountedPrice: 230,
        stock: 5,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      },
      {
        id: 7,
        title: "Best Seller Title 7",
        category: "Home Appliances",
        image:
          "https://off.com.ph/-/media/images/off/ph/products-en/update-983/plp/family-care-group-plp.png",
        price: 250,
        discountedPrice: 230,
        stock: 5,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      },
      {
        id: 8,
        title: "Best Seller Title 8",
        category: "Home Appliances",
        image:
          "https://off.com.ph/-/media/images/off/ph/products-en/update-983/plp/family-care-group-plp.png",
        price: 250,
        discountedPrice: 230,
        stock: 5,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      },
    ],
    promo: [
      {
        id: 1,
        title: "Promo Product Title 1",
        category: "Toys",
        image:
          "https://off.com.ph/-/media/images/off/ph/products-en/update-983/plp/family-care-group-plp.png",
        price: 50,
        discountedPrice: 30,
        stock: 50,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      },
      {
        id: 2,
        title: "Promo Product Title 2",
        category: "Books",
        image:
          "https://off.com.ph/-/media/images/off/ph/products-en/update-983/plp/family-care-group-plp.png",
        price: 40,
        discountedPrice: 20,
        stock: 100,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      },
      {
        id: 3,
        title: "Promo Product Title 3",
        category: "Books",
        image:
          "https://off.com.ph/-/media/images/off/ph/products-en/update-983/plp/family-care-group-plp.png",
        price: 40,
        discountedPrice: 20,
        stock: 100,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      },
      {
        id: 4,
        title: "Promo Product Title 4",
        category: "Books",
        image:
          "https://off.com.ph/-/media/images/off/ph/products-en/update-983/plp/family-care-group-plp.png",
        price: 40,
        discountedPrice: 20,
        stock: 100,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      },
      {
        id: 5,
        title: "Promo Product Title 5",
        category: "Books",
        image:
          "https://off.com.ph/-/media/images/off/ph/products-en/update-983/plp/family-care-group-plp.png",
        price: 40,
        discountedPrice: 20,
        stock: 100,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      },
      {
        id: 6,
        title: "Promo Product Title 6",
        category: "Books",
        image:
          "https://off.com.ph/-/media/images/off/ph/products-en/update-983/plp/family-care-group-plp.png",
        price: 40,
        discountedPrice: 20,
        stock: 100,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      },
      {
        id: 7,
        title: "Promo Product Title 7",
        category: "Books",
        image:
          "https://off.com.ph/-/media/images/off/ph/products-en/update-983/plp/family-care-group-plp.png",
        price: 40,
        discountedPrice: 20,
        stock: 100,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      },
      {
        id: 8,
        title: "Promo Product Title 8",
        category: "Books",
        image:
          "https://off.com.ph/-/media/images/off/ph/products-en/update-983/plp/family-care-group-plp.png",
        price: 40,
        discountedPrice: 20,
        stock: 100,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      },
    ],
  };

  const calculateDiscount = (price, discountedPrice) => {
    return ((price - discountedPrice) / price) * 100;
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const [showDetails, setShowDetails] = useState({});

  const toggleDetails = (productId) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  const renderProducts = () => {
    const currentProducts = products[activeTab] || [];

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-pink-100 rounded-lg overflow-hidden relative transition duration-300 ease-in-out transform hover:shadow-xl hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="absolute inset-0 bg-pink-900 bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                className="text-white text-lg font-semibold bg-pink-900 bg-opacity-75 py-2 px-6 rounded-lg hover:bg-opacity-100 transition duration-300 mb-2"
                onClick={() => toggleDetails(product.id)}
              >
                {showDetails[product.id] ? "Hide Details" : "Show Details"}
              </button>
              <button className="text-white text-lg font-semibold bg-pink-900 bg-opacity-75 py-2 px-6 rounded-lg hover:bg-opacity-100 transition duration-300">
                Add to Cart
              </button>
            </div>
            <div className="p-4">
              <p className="text-pink-500 text-sm">{product.category}</p>
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <div className="flex justify-between items-center mt-4">
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-pink-600">
                    ${product.discountedPrice.toFixed(2)}
                  </span>
                  {product.price !== product.discountedPrice && (
                    <span className="line-through text-sm text-gray-500">
                      ${product.price.toFixed(2)}
                    </span>
                  )}
                </div>
                <div className="text-sm">
                  {product.stock > 0 ? (
                    <span className="text-pink-600">In stock: {product.stock}</span>
                  ) : (
                    <span className="text-red-600">Out of stock</span>
                  )}
                </div>
              </div>
              {showDetails[product.id] && (
                <div className="mt-4">
                  <p className="text-sm text-gray-700">{product.description}</p>
                </div>
              )}
            </div>
            <span className="absolute top-2 left-2 bg-red-500 text-white py-1 px-3 text-xs z-10 rounded-lg">
              {calculateDiscount(product.price, product.discountedPrice).toFixed(0)}% off
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-center mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`text-lg font-semibold mx-4 px-6 py-2 rounded-lg ${
              activeTab === tab.id
                ? "bg-pink-900 text-white"
                : "bg-pink-200 text-pink-900"
            } hover:bg-pink-800 hover:text-white transition duration-300`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="text-center">{renderProducts()}</div>
    </div>
  );
};

export default FeaturedProductsTabs;
