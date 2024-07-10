import { useState } from "react";
import { Row, Col, Modal, Button } from "antd";
import { Link } from "react-router-dom";

const LatestBlogsSection = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const latestBlogs = [
    {
      id: 1,
      title: "Blog Post 1",
      image:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/favorate-products-review-thumbnail-ads-design-template-82c5c56f2b961f48470f3b7fad371a92_screen.jpg?ts=1647419574",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
      author: "John Doe",
      date: "July 1, 2024",
    },
    {
      id: 2,
      title: "Blog Post 2",
      image:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/product-review-youtube-thumbnail-design-template-806c758dfbb267344b8a589719e4818b_screen.jpg?ts=1630579576",
      content:
        "Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
      author: "Jane Smith",
      date: "July 3, 2024",
    },
    {
      id: 3,
      title: "Blog Post 3",
      image:
        "https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/tutu-and-white-youtube-thumbnail-youtube-thumbnail-template-7ojd0i391b566b.webp",
      content:
        "Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      author: "Alex Johnson",
      date: "July 5, 2024",
    },
    {
      id: 4,
      title: "Blog Post 4",
      image:
        "https://www.picmaker.com/templates/_next/image?url=https%3A%2F%2Fstatic.picmaker.com%2Fscene-prebuilts%2Fthumbnails%2FYT-0103.png&w=1920&q=75",
      content:
        "Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      author: "Emily Brown",
      date: "July 7, 2024",
    },
  ];

  const showModal = (blog) => {
    setSelectedBlog(blog);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setSelectedBlog(null);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedBlog(null);
  };

  return (
    <section className="bg-gradient-to-b from-pink-50 to-white p-10 my-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-serif font-light text-center mb-8 text-primary">
          Latest Blogs
        </h2>
        <Row gutter={[24, 24]}>
          {latestBlogs.map((blog) => (
            <Col key={blog.id} xs={24} sm={12} md={8} lg={6}>
              <div
                className="relative transition-shadow duration-300 hover:shadow-lg rounded-lg overflow-hidden cursor-pointer"
                onClick={() => showModal(blog)}
              >
                <div className="absolute top-0 left-0 bg-primary text-white px-3 py-1">
                  {new Date(blog.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                  })}
                </div>
                <img
                  alt={blog.title}
                  src={blog.image}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 bg-white">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{blog.content}</p>
                  <div className="text-sm text-gray-500 mt-4">
                    By {blog.author}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        {selectedBlog && (
          <Modal
            title={selectedBlog.title}
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
          >
            <img
              alt={selectedBlog.title}
              src={selectedBlog.image}
              className="w-full h-64 object-cover mb-4"
            />
            <p className="text-gray-800">{selectedBlog.content}</p>
            <div className="text-sm text-gray-500 mt-4">
              By {selectedBlog.author} -{" "}
              {new Date(selectedBlog.date).toLocaleDateString("en-US")}
            </div>
            <div className="flex justify-end mt-4">
              <Link to={`/blog/${selectedBlog.id}`}>
                <button className="bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded">
                  Go to Detail Page
                </button>
              </Link>
              <button
                className="ml-4 border border-gray-300 hover:border-gray-400 text-gray-700 py-2 px-4 rounded"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default LatestBlogsSection;
