import { Row, Col } from "antd";

const LatestBlogsSection = () => {
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

  return (
    <section className="py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Blogs</h2>
        <Row gutter={[24, 24]}>
          {latestBlogs.map((blog) => (
            <Col key={blog.id} xs={24} sm={12} md={8} lg={6}>
              <div className="relative hover: transition-shadow duration-300">
                <div className="absolute top-0 left-0 bg-red-500 text-white px-3 py-1">
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
                <div className="p-4 bg-gray-100 ">
                  <h3 className="text-lg font-semibold">{blog.title}</h3>
                  <p className="text-gray-700 mt-2">{blog.content}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default LatestBlogsSection;
