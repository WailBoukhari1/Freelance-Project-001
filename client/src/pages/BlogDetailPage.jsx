import { useParams } from "react-router-dom";
import { Card, Typography, Breadcrumb, List, Avatar, Form, Input,Button } from "antd";
import { HomeOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import UserLayout from "../layout/user/UserLayout";
import { Comment } from "@ant-design/compatible";
import "tailwindcss/tailwind.css";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const blogData = {
  1: {
    title: "The Journey of Motherhood",
    content: `
      Motherhood is a journey filled with ups and downs, joys and challenges. It's a path that requires patience, love, and strength. 
      From the moment you find out you're expecting to the day your child takes their first steps, every moment is precious and unforgettable.
    `,
    author: "Jane Doe",
    date: "2024-07-01",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20200731/pngtree-blue-carbon-background-with-sport-style-and-golden-light-image_371487.jpg",
  },
  2: {
    title: "Healthy Eating During Pregnancy",
    content: `
      Eating a balanced diet during pregnancy is crucial for the health of both the mother and the baby. 
      It's important to include a variety of foods from all food groups and to stay hydrated.
    `,
    author: "John Smith",
    date: "2024-07-02",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20200731/pngtree-blue-carbon-background-with-sport-style-and-golden-light-image_371487.jpg",
  },
};

const latestPosts = [
  {
    title: "Preparing for Parenthood",
    link: "/blog/3",
  },
  {
    title: "Mental Health During Pregnancy",
    link: "/blog/4",
  },
];

const tags = ["Motherhood", "Pregnancy", "Health", "Wellness", "Parenting"];

const comments = [
  {
    author: "User1",
    content: "Great article! Very informative.",
    avatar: "https://example.com/user1.jpg",
    datetime: "2024-07-10",
    replies: [
      {
        author: "User2",
        content: "I agree! This was very helpful.",
        avatar: "https://example.com/user2.jpg",
        datetime: "2024-07-11",
      },
    ],
  },
  {
    author: "User3",
    content: "Thanks for sharing!",
    avatar: "https://example.com/user3.jpg",
    datetime: "2024-07-12",
    replies: [],
  },
];

const BlogDetailPage = () => {
  const { id } = useParams();
  const blog = blogData[id];

  if (!blog) {
    return (
      <UserLayout>
        <div className="max-w-7xl mx-auto p-6 animate-fadeInUp">
          <Title level={2} className="text-center text-primary">
            Blog not found
          </Title>
          <a href="/blog" className="btn-primary">
            <Button icon={<ArrowLeftOutlined />}>Back to Blog</Button>
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
          <Breadcrumb.Item href="/blog">Blog</Breadcrumb.Item>
          <Breadcrumb.Item>{blog.title}</Breadcrumb.Item>
        </Breadcrumb>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 pr-4">
            <Card
              hoverable
              cover={
                <img
                  alt={blog.title}
                  src={blog.image}
                  className="rounded-t-lg"
                />
              }
              className="mb-4 shadow-lg"
              bodyStyle={{
                background: "linear-gradient(to right, #ffe4e1, #fff)",
              }}
            >
              <Title level={2} className="text-primary text-center">
                {blog.title}
              </Title>
              <Paragraph className="text-center text-pink-500 mb-4">
                {blog.author} - {blog.date}
              </Paragraph>
              <Paragraph className="text-gray-800 whitespace-pre-wrap leading-relaxed">
                {blog.content}
              </Paragraph>
              <div className="text-center mt-4">
                <a href="/blog" className="btn-primary">
                  <Button icon={<ArrowLeftOutlined />}>Back to Blog</Button>
                </a>
              </div>
            </Card>

            <div className="mt-6">
              <Title level={3}>Comments</Title>
              {comments.map((comment, index) => (
                <Comment
                  key={index}
                  author={comment.author}
                  avatar={<Avatar src={comment.avatar} alt={comment.author} />}
                  content={
                    <div>
                      <Paragraph>{comment.content}</Paragraph>
                      {comment.replies.length > 0 &&
                        comment.replies.map((reply, replyIndex) => (
                          <Comment
                            key={replyIndex}
                            author={reply.author}
                            avatar={
                              <Avatar src={reply.avatar} alt={reply.author} />
                            }
                            content={reply.content}
                            datetime={reply.datetime}
                            className="ml-8"
                          />
                        ))}
                    </div>
                  }
                  datetime={comment.datetime}
                />
              ))}
              <Form.Item>
                <TextArea rows={4} placeholder="Add a comment" />
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit" type="primary">
                  Add Comment
                </Button>
              </Form.Item>
            </div>
          </div>

          <div className="md:w-1/3 pl-4">
            <div className="mb-4">
              <Title level={3}>Latest Posts</Title>
              <List
                dataSource={latestPosts}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      title={<a href={item.link}>{item.title}</a>}
                    />
                  </List.Item>
                )}
              />
            </div>

            <div className="mb-4">
              <Title level={3}>Tags</Title>
              <div className="flex flex-wrap">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-pink-200 text-pink-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default BlogDetailPage;
