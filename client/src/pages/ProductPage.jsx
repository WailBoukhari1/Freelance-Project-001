import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { notification, Select, Slider } from "antd"; // Importing Ant Design components (Slider, Select) for comparison
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import UserLayout from "../layout/user/UserLayout";
import { Breadcrumb } from "antd";

const { Option } = Select;

const ProductPage = () => {
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [sortOrder, setSortOrder] = useState("az");
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const navigate = useNavigate();

  const products = [
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
      title: "Pregnancy Support Belt",
      category: "Maternity",
      image:
        "https://static.thebump.com/tb-web-assets/bop2022/jump-link-post-pregnancy.png",
      price: 50,
      discountedPrice: 40,
      stock: 20,
      description: "Provides excellent support for your growing belly.",
    },
    {
      id: 3,
      title: "Maternity Skincare Set",
      category: "Beauty",
      image:
        "https://static.thebump.com/tb-web-assets/bop2022/jump-link-post-pregnancy.png",
      price: 80,
      discountedPrice: 60,
      stock: 10,
      description: "Nourishing skincare products safe for pregnancy.",
    },
    // Add more products as needed
  ];

  const calculateDiscount = (price, discountedPrice) => {
    return ((price - discountedPrice) / price) * 100;
  };

  const openQuickView = (product) => {
    setQuickViewProduct(product);
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
  };

  const addToCart = (product) => {
    console.log(`${product.title} added to cart`);
  };

  const goToDetailsPage = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  const handleSortChange = (value) => {
    setSortOrder(value);
  };

  const sortedAndFilteredProducts = products
    .filter(
      (product) =>
        product.discountedPrice >= priceRange[0] &&
        product.discountedPrice <= priceRange[1]
    )
    .sort((a, b) => {
      if (sortOrder === "az") {
        return a.title.localeCompare(b.title);
      } else if (sortOrder === "za") {
        return b.title.localeCompare(a.title);
      } else if (sortOrder === "priceLowHigh") {
        return a.discountedPrice - b.discountedPrice;
      } else {
        return b.discountedPrice - a.discountedPrice;
      }
    });

  // Pagination logic
  const productsPerPage = 8; // Number of products per page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedAndFilteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

  return (
    <UserLayout>
      <div className="max-w-7xl mx-auto from-pink-50 to-white my-5 py-10">
        <Breadcrumb className="mb-6 text-pink-600">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Maternity Essentials</Breadcrumb.Item>
        </Breadcrumb>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <span className="text-gray-700 mr-2">Filter by Price:</span>
            <Slider
              range
              min={0}
              max={150}
              defaultValue={priceRange}
              onChange={handlePriceChange}
              className="w-64"
            />
          </div>
          <div className="flex items-center">
            <span className="text-gray-700 mr-2">Sort by:</span>
            <Select
              defaultValue={sortOrder}
              onChange={handleSortChange}
              className="w-48"
            >
              <Option value="az">A - Z</Option>
              <Option value="za">Z - A</Option>
              <Option value="priceLowHigh">Price: Low to High</Option>
              <Option value="priceHighLow">Price: High to Low</Option>
            </Select>
          </div>
        </div>
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
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-10"
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
                  className="absolute bottom-2 left-2 right-2 "
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
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex justify-center mt-8">
          {Array.from(
            {
              length: Math.ceil(
                sortedAndFilteredProducts.length / productsPerPage
              ),
            },
            (_, index) => (
              <button
                key={index}
                className={`mx-2 py-2 px-4 rounded-lg ${
                  currentPage === index + 1
                    ? "bg-pink-500 text-white"
                    : "bg-pink-100 text-pink-800 hover:bg-pink-200 hover:text-white"
                } transition-colors duration-300`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
        <AnimatePresence>
          {quickViewProduct && <QuickViewModal product={quickViewProduct} />}
        </AnimatePresence>
      </div>
    </UserLayout>
  );
};

export default ProductPage;
