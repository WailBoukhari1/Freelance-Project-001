import  { useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Breadcrumb, Input, Form, Avatar } from "antd";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { Comment } from "@ant-design/compatible";
import UserLayout from "../layout/user/UserLayout";
import { Swiper, SwiperSlide } from "swiper/react";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const productData = {
  1: {
    title: "Elegant Floral Maxi Dress",
    description: `
      Embrace feminine charm with this stunning floral maxi dress. Perfect for summer events or romantic evenings, this dress features a flattering silhouette, delicate floral print, and comfortable, breathable fabric.
    `,
    price: "$89.99",
    discountedPrice: "$69.99",
    image:
      "https://static.thebump.com/tb-web-assets/bop2022/jump-link-post-pregnancy.png",
    rating: 4.7,
    reviews: [
      {
        author: "Emma",
        content:
          "This dress is absolutely gorgeous! The fit is perfect and the material is so soft.",
        avatar: "https://example.com/emma.jpg",
        datetime: "2024-07-10",
      },
      {
        author: "Olivia",
        content:
          "I wore this to a wedding and received countless compliments. Highly recommend!",
        avatar: "https://example.com/olivia.jpg",
        datetime: "2024-07-11",
      },
    ],
  },
  // More products...
};

const relatedProducts = [
  {
    title: "Bohemian Lace Dress",
    link: "/product/2",
    image:
      "https://static.thebump.com/tb-web-assets/bop2022/jump-link-post-pregnancy.png",
    originalPrice: "$99.99",
    discountedPrice: "$79.99",
  },
  {
    title: "Silk Wrap Dress",
    link: "/product/3",
    image:
      "https://static.thebump.com/tb-web-assets/bop2022/jump-link-post-pregnancy.png",
    originalPrice: "$129.99",
    discountedPrice: "$99.99",
  },
  {
    title: "Chiffon Evening Gown",
    link: "/product/4",
    image:
      "https://static.thebump.com/tb-web-assets/bop2022/jump-link-post-pregnancy.png",
    originalPrice: "$149.99",
    discountedPrice: "$109.99",
  },
  {
    title: "Casual Summer Dress",
    link: "/product/5",
    image:
      "https://static.thebump.com/tb-web-assets/bop2022/jump-link-post-pregnancy.png",
    originalPrice: "$69.99",
    discountedPrice: "$49.99",
  },
  {
    title: "Vintage Polka Dot Dress",
    link: "/product/6",
    image:
      "https://static.thebump.com/tb-web-assets/bop2022/jump-link-post-pregnancy.png",
    originalPrice: "$89.99",
    discountedPrice: "$59.99",
  },
];

const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
  const original = parseFloat(originalPrice.replace("$", ""));
  const discounted = parseFloat(discountedPrice.replace("$", ""));
  return Math.round(((original - discounted) / original) * 100);
};

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = productData[id];
  const [activeTab, setActiveTab] = useState("description");

  if (!product) {
    return (
      <UserLayout>
        <div className="max-w-7xl mx-auto p-6 animate-fadeInUp">
          <Title level={2} className="text-center text-primary">
            Product not found
          </Title>
          <a href="/products" className="btn btn-primary">
            <HomeOutlined />
            Back to Products
          </a>
        </div>
      </UserLayout>
    );
  }

  return (
    <UserLayout>
      <div className="max-w-7xl mx-auto p-6 animate-fadeInUp">
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item href="/">
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
          <Breadcrumb.Item>{product.title}</Breadcrumb.Item>
        </Breadcrumb>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 relative">
            <img
              alt={product.title}
              src={product.image}
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            <div className="absolute top-2 right-2 bg-white p-2 rounded-lg shadow">
              <p className="text-xs font-semibold text-red-500">
                -
                {calculateDiscountPercentage(
                  product.price,
                  product.discountedPrice
                )}
                %
              </p>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="p-6 shadow-lg flex flex-col justify-between">
              <div>
                <Title level={2} className="text-primary mb-2">
                  {product.title}
                </Title>
                <Paragraph className="text-2xl font-bold text-primary m-0">
                  {product.discountedPrice}{" "}
                  <span className="line-through text-gray-500">
                    {product.price}
                  </span>
                </Paragraph>
              </div>
              <div className="border-b border-gray-200 mb-4">
                <nav className="-mb-px flex space-x-8">
                  <button
                    className={`text-sm font-medium py-4 px-1 border-b-2 ${
                      activeTab === "description"
                        ? "border-primary text-gray-900"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                    onClick={() => setActiveTab("description")}
                  >
                    Description
                  </button>
                  <button
                    className={`text-sm font-medium py-4 px-1 border-b-2 ${
                      activeTab === "comments"
                        ? "border-primary text-gray-900"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                    onClick={() => setActiveTab("comments")}
                  >
                    Comments
                  </button>
                </nav>
              </div>
              {activeTab === "description" && (
                <div id="description">
                  <Paragraph className="text-gray-700 leading-relaxed mb-6">
                    {product.description}
                  </Paragraph>
                </div>
              )}
              {activeTab === "comments" && (
                <div id="comments">
                  {product.reviews.map((review, index) => (
                    <Comment
                      key={index}
                      author={
                        <span className="text-primary font-semibold">
                          {review.author}
                        </span>
                      }
                      avatar={
                        <Avatar src={review.avatar} alt={review.author} />
                      }
                      content={
                        <p className="text-gray-700">{review.content}</p>
                      }
                      datetime={
                        <span className="text-gray-500">{review.datetime}</span>
                      }
                      className="p-4 rounded-lg mb-4"
                    />
                  ))}
                  <Form layout="vertical" className="mt-6">
                    <Form.Item
                      label="Write a Review"
                      labelCol={{ className: "text-primary font-semibold" }}
                    >
                      <TextArea
                        rows={4}
                        placeholder="Share your thoughts about this product"
                        className="border-primary"
                      />
                    </Form.Item>
                    <Form.Item>
                      <button type="submit" className="btn btn-primary">
                        Submit Review
                      </button>
                    </Form.Item>
                  </Form>
                </div>
              )}
              <div className="flex gap-4 mt-4">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-all flex-grow"
                >
                  <ShoppingCartOutlined />
                  Add to Cart
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all"
                >
                  <HeartOutlined />
                  Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Title level={3} className="text-primary mb-4">
            You May Also Like
          </Title>
          <Swiper
            spaceBetween={20}
            slidesPerView={5}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop={true}
            className="mySwiper"
          >
            {relatedProducts.map((relatedProduct, index) => (
              <SwiperSlide key={index}>
                <div className="p-4 rounded-lg shadow-md transition-all hover:shadow-lg">
                  <a href={relatedProduct.link}>
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.title}
                      className="rounded-lg shadow-lg w-full h-auto object-cover"
                    />
                    <div className="text-center mt-2">
                      <p className="text-sm text-gray-700">
                        {relatedProduct.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        <span className="line-through mr-1 text-gray-500">
                          {relatedProduct.originalPrice}
                        </span>
                        {relatedProduct.discountedPrice}
                      </p>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </UserLayout>
  );
};

export default ProductDetailPage;
