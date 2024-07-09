import Slider from "react-slick";

const HeroBanner = () => {
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
    <>
      {" "}
      <Slider {...settings}>
        {/* <div>
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
        </div> */}
      </Slider>
    </>
  );
};

export default HeroBanner;
