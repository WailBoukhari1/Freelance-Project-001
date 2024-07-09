import { useState } from "react";
import { Input, Drawer, Form, Checkbox, Button, Divider, Dropdown } from "antd";
import {
  DownOutlined,
  SearchOutlined,
  UserOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import classNames from "classnames";

const Navbar = () => {
  const [visibleDrawer, setVisibleDrawer] = useState(null);
  const [formMode, setFormMode] = useState("login");
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [openSubCategoryMenu, setOpenSubCategoryMenu] = useState(null);

  const showDrawer = (drawer) => {
    setVisibleDrawer(drawer);
  };

  const closeDrawer = () => {
    setVisibleDrawer(null);
    setFormMode("login");
  };

  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
  };

  const toggleSearchBar = () => {
    setSearchBarVisible(!searchBarVisible);
  };

  const switchToSignUp = () => {
    setFormMode("signup");
  };

  const switchToLogin = () => {
    setFormMode("login");
  };

  const handleSubMenuToggle = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const handleSubCategoryToggle = (index) => {
    setOpenSubCategoryMenu(openSubCategoryMenu === index ? null : index);
  };

  const cartItems = [
    {
      title: "Zessi Dresses",
      color: "Yellow",
      size: "L",
      price: 99,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
    {
      title: "Kirby T-Shirt",
      color: "Black",
      size: "XS",
      price: 89,
      quantity: 4,
      image: "https://via.placeholder.com/100",
    },
    {
      title: "Cableknit Shawl",
      color: "Green",
      size: "L",
      price: 129,
      quantity: 3,
      image: "https://via.placeholder.com/100",
    },
  ];

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const categories = [
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5",
    "Category 6",
    "Category 7",
    "Category 8",
    "Category 9",
    "Category 10",
  ];

  const subCategories = ["Sub-category A", "Sub-category B", "Sub-category C"];
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
  ];

  function createMegaMenu(category) {
    return (
      <div className="bg-white shadow-lg p-6 rounded-lg">
        <div className="container mx-auto grid grid-cols-3 gap-6">
          {subCategories.map((subCategory, subIndex) => (
            <div key={subIndex} className="col-span-1">
              <h5 className="text-lg font-semibold mb-2 text-gray-800">
                <Link
                  to={`/${category
                    .toLowerCase()
                    .replace(" ", "-")}/${subCategory
                    .toLowerCase()
                    .replace(" ", "-")}`}
                  className="text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out"
                >
                  {subCategory}
                </Link>
              </h5>
              <ul className="list-none">
                {items.map((item, itemIndex) => (
                  <li key={itemIndex} className="mb-1">
                    <Link
                      to={`/${category
                        .toLowerCase()
                        .replace(" ", "-")}/${subCategory
                        .toLowerCase()
                        .replace(" ", "-")}/${item
                        .toLowerCase()
                        .replace(" ", "-")}`}
                      className="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out block"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3 text-xs">
          <div className="flex space-x-6">
            {["Shipping", "FAQ", "Contact", "Track Order"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(" ", "-")}`}
                className="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out"
              >
                {item}
                <div className="h-0.5 bg-transparent group-hover:bg-blue-600 transition-all duration-300 ease-in-out"></div>
              </Link>
            ))}
          </div>
          <div className="text-blue-600 font-semibold tracking-wide hidden sm:block">
            FREE SHIPPING WORLDWIDE
          </div>
          <div className="flex space-x-6 items-center">
            {["facebook", "twitter", "instagram", "pinterest"].map((social) => (
              <a
                key={social}
                href={`https://${social}.com`}
                className="text-gray-400 hover:text-blue-600 transition duration-300 ease-in-out"
              >
                <i className={`fab fa-${social} text-lg`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="text-4xl font-bold text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out"
            >
              UQMO
            </Link>
            <div className="flex-grow mx-12 hidden sm:block">
              <div className="relative max-w-2xl mx-auto">
                <Input
                  placeholder="Search products..."
                  className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out text-gray-700"
                />
                <SearchOutlined className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              </div>
            </div>
            <div className="flex items-center space-x-8">
              {[UserOutlined, HeartOutlined, ShoppingCartOutlined].map(
                (Icon, index) => (
                  <div key={index} className="relative group">
                    <Icon
                      className="text-2xl text-gray-600 group-hover:text-blue-600 transition duration-300 ease-in-out cursor-pointer"
                      onClick={() => showDrawer(index)}
                    />
                    {index === 2 && (
                      <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center group-hover:bg-blue-700 transition duration-300 ease-in-out">
                        {cartItems.length}
                      </span>
                    )}
                  </div>
                )
              )}
              <div className="sm:hidden flex items-center space-x-4">
                <SearchOutlined
                  className="text-2xl text-gray-600 cursor-pointer"
                  onClick={toggleSearchBar}
                />
                <MenuOutlined
                  className="text-2xl text-gray-600 cursor-pointer"
                  onClick={toggleBurgerMenu}
                />
              </div>
            </div>
          </div>
        </div>
        {searchBarVisible && (
          <div className="border-t border-gray-200 py-4 sm:hidden">
            <div className="container mx-auto px-4">
              <Input
                placeholder="Search products..."
                className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out text-gray-700"
              />
              <SearchOutlined className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            </div>
          </div>
        )}
      </div>
      <div
        className={`fixed inset-0 bg-white z-40 p-6 transition-transform duration-300 ease-in-out ${
          burgerMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Menu</h2>
          <CloseOutlined
            className="text-2xl text-gray-600 cursor-pointer"
            onClick={toggleBurgerMenu}
          />
        </div>
        <div className="space-y-4">
          {categories.map((category, index) => (
            <div key={index} className="border-b border-gray-200 pb-2">
              <div className="flex justify-between items-center">
                <Link
                  to={`/${category.toLowerCase().replace(" ", "-")}`}
                  className="text-lg text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out"
                >
                  {category}
                </Link>
                <DownOutlined
                  className="ml-2 cursor-pointer text-gray-600 hover:text-blue-600"
                  onClick={() => handleSubMenuToggle(index)}
                />
              </div>
              {openSubMenu === index && (
                <div
                  className={classNames(
                    "mt-2 transition-all duration-300 ease-in-out",
                    {
                      "max-h-0 overflow-hidden": openSubMenu !== index,
                      "max-h-screen": openSubMenu === index,
                    }
                  )}
                >
                  {subCategories.map((subCategory, subIndex) => (
                    <div key={subIndex} className="ml-4">
                      <div className="flex justify-between items-center">
                        <Link
                          to={`/${category
                            .toLowerCase()
                            .replace(" ", "-")}/${subCategory
                            .toLowerCase()
                            .replace(" ", "-")}`}
                          className="text-md text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out"
                        >
                          {subCategory}
                        </Link>
                        <DownOutlined
                          className="ml-2 cursor-pointer text-gray-600 hover:text-blue-600"
                          onClick={() => handleSubCategoryToggle(subIndex)}
                        />
                      </div>
                      {openSubCategoryMenu === subIndex && (
                        <ul
                          className={classNames(
                            "ml-4 list-none transition-all duration-300 ease-in-out",
                            {
                              "max-h-0 overflow-hidden":
                                openSubCategoryMenu !== subIndex,
                              "max-h-screen": openSubCategoryMenu === subIndex,
                            }
                          )}
                        >
                          {items.map((item, itemIndex) => (
                            <li key={itemIndex} className="mb-1">
                              <Link
                                to={`/${category
                                  .toLowerCase()
                                  .replace(" ", "-")}/${subCategory
                                  .toLowerCase()
                                  .replace(" ", "-")}/${item
                                  .toLowerCase()
                                  .replace(" ", "-")}`}
                                className="text-sm text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out block"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-gray-200 hidden sm:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {categories.map((category, index) => (
              <Dropdown
                key={index}
                overlay={createMegaMenu(category)}
                trigger={["hover"]}
              >
                <Link
                  to={`/${category.toLowerCase().replace(" ", "-")}`}
                  className="text-lg text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out mx-2 cursor-pointer"
                >
                  {category}
                  <div className="h-0.5 bg-transparent group-hover:bg-blue-600 transition-all duration-300 ease-in-out"></div>
                </Link>
              </Dropdown>
            ))}
          </div>
        </div>
      </div>
      <Drawer
        title={formMode === "login" ? "Log In" : "Sign Up"}
        placement="right"
        onClose={closeDrawer}
        visible={visibleDrawer === 0}
      >
        <Form>
          <Form.Item>
            <Input placeholder="Email Address" />
          </Form.Item>
          {formMode === "signup" && (
            <Form.Item>
              <Input placeholder="Full Name" />
            </Form.Item>
          )}
          <Form.Item>
            <Input.Password placeholder="Password" />
          </Form.Item>
          {formMode === "signup" && (
            <Form.Item>
              <Input.Password placeholder="Confirm Password" />
            </Form.Item>
          )}
          {formMode === "login" && (
            <>
              <Form.Item>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="w-full">
                  Log In
                </Button>
              </Form.Item>
              <Divider>Or</Divider>
              <Form.Item>
                <Button
                  type="default"
                  className="w-full"
                  onClick={switchToSignUp}
                >
                  Sign Up
                </Button>
              </Form.Item>
            </>
          )}
          {formMode === "signup" && (
            <>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="w-full">
                  Sign Up
                </Button>
              </Form.Item>
              <Divider>Or</Divider>
              <Form.Item>
                <Button
                  type="default"
                  className="w-full"
                  onClick={switchToLogin}
                >
                  Log In
                </Button>
              </Form.Item>
            </>
          )}
        </Form>
      </Drawer>
      <Drawer
        title="My Wishlist"
        placement="right"
        onClose={closeDrawer}
        visible={visibleDrawer === 1}
      >
        <p>Your wishlist is empty.</p>
      </Drawer>
      <Drawer
        title={`Shopping Bag (${cartItems.length})`}
        placement="right"
        onClose={closeDrawer}
        visible={visibleDrawer === 2}
      >
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-4 border-b border-gray-200"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1 mx-4">
                  <h4 className="text-sm font-semibold">{item.title}</h4>
                  <p className="text-xs text-gray-500">
                    Color: {item.color}, Size: {item.size}
                  </p>
                  <div className="flex items-center mt-2">
                    <button className="px-2 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-200">
                      -
                    </button>
                    <span className="px-3">{item.quantity}</span>
                    <button className="px-2 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-200">
                      +
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold">${item.price}</p>
                  <button className="text-red-500 hover:text-red-700 mt-2">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-semibold">Subtotal</h4>
              <p className="text-lg font-semibold">${subtotal}</p>
            </div>
            <Button type="default" className="w-full mt-4 mb-2">
              View Cart
            </Button>
            <Button type="primary" className="w-full">
              Checkout
            </Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
