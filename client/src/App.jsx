import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy loading pages
const HomePage = lazy(() => import("./pages/HomePage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogDetailPage = lazy(() => import("./pages/BlogDetailPage"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const NotFoundPage = lazy(() => import("./pages/404Page"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const Contact = lazy(() => import("./pages/ContactPage"));
const ThankYouPage = lazy(() => import("./pages/ThankYouPage"));
const AllCollectionsPage = lazy(() => import("./pages/AllCollectionsPage"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const SubCategoryPage = lazy(() => import("./pages/SubCategoryPage"));
const ItemPage = lazy(() => import("./pages/ItemPage")); 
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
const ManageCollections = lazy(() => import("./pages/admin/ManageCollections"));


import LoadingComponent from "./components/LoadingComponent";
import "antd/dist/reset.css"; 
// Import CSS files
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./assets/css/style.css";
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
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/all-collections" element={<AllCollectionsPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route
              path="/:category/:subcategory/:item"
              element={<ItemPage />}
            />
            <Route
              path="/:category/:subcategory"
              element={<SubCategoryPage />}
            />
            <Route path="/:category" element={<CategoryPage />} />
            <Route path="/" exact component={() => <h1>Home</h1>} />
            {/* User Routes */}
            <Route path="/user/account-details" element={<AccountDetails />} />
            <Route path="/user/dashboard" element={<DashboardUserPage />} />
            <Route path="/user/orders" element={<Orders />} />
            <Route path="/user/shipping-adress" element={<ShippingAdress />} />

            {/* Auth Routes */}
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />

            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={<DashboardAdminPage />} />
            <Route path="/manage-blogs" element={<ManageBlogs />} />
            <Route path="/manage-categories" element={<ManageCategories />} />
            <Route path="/manage-collections" element={<ManageCollections />} />
            <Route path="/manage-orders" element={<ManageOrders />} />
            <Route path="/manage-products" element={<ManageProducts />} />
            <Route path="/manage-users" element={<ManageUsers />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;