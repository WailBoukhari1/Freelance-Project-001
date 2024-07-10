import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { notification } from "antd";
import { useNavigate } from "react-router-dom"; // Update this import

const FeaturedProductsTabs = () => {
  const [activeTab, setActiveTab] = useState("new");
  const [showDetails] = useState({});
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const tabs = [
    { id: "new", label: "New Arrivals" },
    { id: "bestSellers", label: "Best Sellers" },
    { id: "promo", label: "Promotions" },
  ];
  const products = {
    new: [
      {
        id: 1,
        title: "Comfy Maternity Dress",
        category: "Maternity",
        image:
          "https://static.thebump.com/tb-web-assets/bop2022/jump-link-post-pregnancy.png",
        price: 100,
        discountedPrice: 80,
        stock: 15,
        description: "A comfortable and stylish dress for expecting mothers.",
      },
      {
        id: 2,
        title: "Comfy Maternity Dress",
        category: "Maternity",
        image:
          "https://static.thebump.com/tb-web-assets/bop2022/jump-link-post-pregnancy.png",
        price: 100,
        discountedPrice: 80,
        stock: 15,
        description: "A comfortable and stylish dress for expecting mothers.",
      },
      {
        id: 3,
        title: "Comfy Maternity Dress",
        category: "Maternity",
        image:
          "https://static.thebump.com/tb-web-assets/bop2022/jump-link-post-pregnancy.png",
        price: 100,
        discountedPrice: 80,
        stock: 15,
        description: "A comfortable and stylish dress for expecting mothers.",
      },
      {
        id: 4,
        title: "Comfy Maternity Dress",
        category: "Maternity",
        image:
          "https://static.thebump.com/tb-web-assets/bop2022/jump-link-post-pregnancy.png",
        price: 100,
        discountedPrice: 80,
        stock: 15,
        description: "A comfortable and stylish dress for expecting mothers.",
      },
    ],
    bestSellers: [
      {
        id: 1,
        title: "Pregnancy Support Belt",
        category: "Maternity",
        image:
          "https://static.thebump.com/tb-web-assets/bop2022/jump-link-post-pregnancy.png",
        price: 50,
        discountedPrice: 40,
        stock: 20,
        description: "Provides excellent support for your growing belly.",
      },
    ],
    promo: [
      {
        id: 1,
        title: "Maternity Skincare Set",
        category: "Beauty",
        image:
          "https://static.thebump.com/tb-web-assets/bop2022/jump-link-post-pregnancy.png",
        price: 80,
        discountedPrice: 60,
        stock: 10,
        description: "Nourishing skincare products safe for pregnancy.",
      },
    ],
  };

  const calculateDiscount = (price, discountedPrice) => {
    return ((price - discountedPrice) / price) * 100;
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const openQuickView = (product) => {
    setQuickViewProduct(product);
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
  };

  const addToCart = (product) => {
    // Implement your add to cart logic here
    console.log(`${product.title} added to cart`);
  };

  const goToDetailsPage = (productId) => {
    navigate(`/product/${productId}`);
  };

  const QuickViewModal = ({ product }) => (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closeQuickView}
    >
      <motion.div
        className="bg-white rounded-lg p-6 max-w-lg w-full"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-800">
            {product.title}
          </h3>
          <button
            onClick={closeQuickView}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <p className="text-pink-600 text-sm font-medium mb-2">
          {product.category}
        </p>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-2xl font-bold text-pink-700">
              ${product.discountedPrice.toFixed(2)}
            </span>
            {product.price !== product.discountedPrice && (
              <span className="ml-2 line-through text-sm text-gray-500">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
          <span className="text-sm text-gray-600 bg-pink-50 px-2 py-1 rounded-lg">
            {product.stock > 0 ? `In stock: ${product.stock}` : "Out of stock"}
          </span>
        </div>
        <button
          className="w-full bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition-colors duration-300 font-medium"
          onClick={() => {
            addToCart(product);
            closeQuickView();
          }}
        >
          Add to Cart
        </button>
      </motion.div>
    </motion.div>
  );

  QuickViewModal.propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      discountedPrice: PropTypes.number.isRequired,
      stock: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  };

  const renderProducts = () => {
    const currentProducts = products[activeTab] || [];

    return (
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {currentProducts.map((product, index) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-pink-100 transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <div className="relative group">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-100"
              />
              <div className="absolute top-2 right-2 bg-pink-500 text-white py-1 px-2 text-xs rounded-lg shadow-md">
                {calculateDiscount(
                  product.price,
                  product.discountedPrice
                ).toFixed(0)}
                % off
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
              <motion.div
                className="absolute bottom-2 left-2 right-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  className="w-full bg-white text-pink-800 py-1 px-2 rounded-lg hover:bg-pink-100 transition-colors duration-300 text-sm font-medium"
                  onClick={() => openQuickView(product)}
                >
                  Quick View
                </button>
              </motion.div>
            </div>
            <div className="p-3">
              <p className="text-pink-600 text-xs font-medium mb-1">
                {product.category}
              </p>
              <h3 className="text-sm font-semibold mb-2 text-gray-800 truncate">
                {product.title}
              </h3>
              <div className="flex justify-between items-center mb-2">
                <div>
                  <span className="text-lg font-bold text-pink-700">
                    ${product.discountedPrice.toFixed(2)}
                  </span>
                  {product.price !== product.discountedPrice && (
                    <span className="ml-1 line-through text-xs text-gray-500">
                      ${product.price.toFixed(2)}
                    </span>
                  )}
                </div>
                <span className="text-xs text-gray-600 bg-pink-50 px-1 py-0.5 rounded-lg">
                  {product.stock > 0
                    ? `Stock: ${product.stock}`
                    : "Out of stock"}
                </span>
              </div>
              <div className="space-y-2">
                <motion.button
                  onClick={() => goToDetailsPage(product.id)}
                  className="w-full bg-pink-100 text-pink-800 py-1 px-2 rounded-lg hover:bg-pink-200 transition-colors duration-300 text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Details
                </motion.button>
                <motion.button
                  className="w-full bg-pink-500 text-white py-1 px-2 rounded-lg hover:bg-pink-600 transition-colors duration-300 text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    addToCart(product);
                    notification.success({
                      message: "Product Added",
                      description: `${product.title} has been added to your cart.`,
                    });
                  }}
                >
                  Add to Cart
                </motion.button>
              </div>
              <AnimatePresence>
                {showDetails[product.id] && (
                  <motion.p
                    className="mt-2 text-xs text-gray-600 bg-pink-50 p-2 rounded-lg"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {product.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto from-pink-50 to-white my-5 p-10">
      <motion.h2
        className="text-6xl font-serif font-light text-center mb-6 text-primary relative
                      before:content-[''] before:absolute before:w-24 before:h-1 before:bg-primary
                      before:-bottom-2 before:left-1/2 before:-translate-x-1/2"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Maternity Essentials
      </motion.h2>
      <motion.div
        className="flex justify-center mb-8 space-x-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-300 ${
              activeTab === tab.id
                ? "bg-pink-500 text-white shadow-md"
                : "bg-white text-pink-800 hover:bg-pink-100"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab.label}
          </motion.button>
        ))}
      </motion.div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
        >
          {renderProducts()}
        </motion.div>
      </AnimatePresence>
      {quickViewProduct && <QuickViewModal product={quickViewProduct} />}
    </div>
  );
};

export default FeaturedProductsTabs;