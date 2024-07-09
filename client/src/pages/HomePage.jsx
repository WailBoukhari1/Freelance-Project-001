import UserLayout from "../layout/user/UserLayout";
import Slider from "react-slick";
import CategorySlider from "../components/home/CategorySlider"; // Import CategorySlider component
import FeaturedProductsTabs from "../components/home/FeaturedProductsTabs"; // Import FeaturedProductsTabs component
import ExclusiveCollections from "../components/home/ExclusiveCollections"; // Import ExclusiveCollections component
import AboutUs from "../components/home/AboutUs"; // Import the AboutUsSection component
import LatestBlogs from "../components/home/latestBlogs"; // Import the LatestProducts component

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <UserLayout>
      <section className="hero bg-gray-200 py-5 px-10 text-center relative">
        <Slider {...settings}>
          <div>
            <img
              src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2021_07/3451045/210218-product-of-the-year-2x1-cs.jpg"
              alt="Banner 1"
              className="w-full object-cover"
              style={{ height: "75vh" }}
            />
          </div>
          <div>
            <img
              src="https://sweetbodycreations.com/wp-content/uploads/2016/08/5bae2fc9240000310054d671.jpeg"
              alt="Banner 2"
              className="w-full object-cover"
              style={{ height: "75vh" }}
            />
          </div>
          <div>
            <img
              src="https://images.everydayhealth.com/images/skin-beauty/what-are-natural-skin-care-products-alt-1440x810.jpg?sfvrsn=616dd3f2_1"
              alt="Banner 3"
              className="w-full object-cover"
              style={{ height: "75vh" }}
            />
          </div>
        </Slider>
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
