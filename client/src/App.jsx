import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy loading pages
const HomePage = lazy(() => import("./pages/HomePage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogDetailPage = lazy(() => import("./pages/BlogDetailPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const NotFoundPage = lazy(() => import("./pages/404Page"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const Contact = lazy(() => import("./pages/ContactPage"));
const ThankYouPage = lazy(() => import("./pages/ThankYouPage"));
const AllCollectionsPage = lazy(() => import("./pages/AllCollectionsPage"));

// User related pages
const AccountDetails = lazy(() => import("./pages/user/AccountDetails"));
const DashboardUserPage = lazy(() => import("./pages/user/DashboardPage"));
const Orders = lazy(() => import("./pages/user/Orders"));
const ShippingAdress = lazy(() => import("./pages/user/ShippingAdress"));

// Auth related pages
const ForgotPasswordPage = lazy(() =>
  import("./pages/auth/ForgotPasswordPage")
);
const ResetPasswordPage = lazy(() => import("./pages/auth/ResetPasswordPage"));

// Admin related pages
const DashboardAdminPage = lazy(() => import("./pages/admin/DashboardPage"));
const ManageBlogs = lazy(() => import("./pages/admin/ManageBlogs"));
const ManageProducts = lazy(() => import("./pages/admin/ManageProducts"));
const ManageOrders = lazy(() => import("./pages/admin/ManageOrders"));
const ManageUsers = lazy(() => import("./pages/admin/ManageUsers"));
const ManageCategories = lazy(() => import("./pages/admin/ManageCategories"));

import LoadingComponent from "./components/LoadingComponent";
import "antd/dist/reset.css"; 
// Import CSS files
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./App.css";

const App = () => {
  return (
      <Router>
        <div className="App">
          <Suspense fallback={<LoadingComponent />}>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogDetailPage />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/thank-you" element={<ThankYouPage />} />
              <Route path="/all-collections" element={<AllCollectionsPage />} />
              <Route path="*" element={<NotFoundPage />} />

              {/* User Routes */}
              <Route
                path="/user/account-details"
                element={<AccountDetails />}
              />
              <Route path="/user/dashboard" element={<DashboardUserPage />} />
              <Route path="/user/orders" element={<Orders />} />
              <Route
                path="/user/shipping-adress"
                element={<ShippingAdress />}
              />

              {/* Auth Routes */}
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/reset-password" element={<ResetPasswordPage />} />

              {/* Admin Routes */}
              <Route path="/admin/dashboard" element={<DashboardAdminPage />} />
              <Route path="/manage-blogs" element={<ManageBlogs />} />
              <Route path="/manage-products" element={<ManageProducts />} />
              <Route path="/manage-orders" element={<ManageOrders />} />
              <Route path="/manage-users" element={<ManageUsers />} />
              <Route path="/manage-categories" element={<ManageCategories />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
  );
};

export default App;
