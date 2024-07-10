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
        <HeroBanner />
    
        <CategorySlider /> 

        <FeaturedProductsTabs />

        <ExclusiveCollections />

        <AboutUs />

        <LatestBlogs />
    </UserLayout>
  );
};

export default HomePage;
