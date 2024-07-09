import UserLayout from "../layout/user/UserLayout";
import HeroBanner from "../components/home/HeroBanner";
import CategorySlider from "../components/home/CategorySlider"; // Import CategorySlider component
import FeaturedProductsTabs from "../components/home/FeaturedProductsTabs"; // Import FeaturedProductsTabs component
import ExclusiveCollections from "../components/home/ExclusiveCollections"; // Import ExclusiveCollections component
import AboutUs from "../components/home/AboutUs"; // Import the AboutUsSection component
import LatestBlogs from "../components/home/latestBlogs"; // Import the LatestProducts component

const HomePage = () => {


  return (
    <UserLayout>
      <section className="hero text-center relative">
        <HeroBanner />
      </section>

      <section className="category-section py-5 px-10">
        <CategorySlider /> {/* Render CategorySlider component */}
      </section>

      <section className="product-section py-5 px-10">
        <FeaturedProductsTabs />
      </section>
      <section className="product-section py-5 px-10">
        <ExclusiveCollections />
      </section>

      <section className="bg-[url('https://images.everydayhealth.com/images/skin-beauty/what-are-natural-skin-care-products-alt-1440x810.jpg?sfvrsn=616dd3f2_1')] bg-cover bg-center about-us-section py-12 px-6 bg-gray-100">
        <AboutUs />
      </section>

      <section className="latest-product-section py-5 px-10">
        <LatestBlogs />{" "}
        {/* Corrected the component name to start with a capital letter */}
      </section>
    </UserLayout>
  );
};

export default HomePage;
