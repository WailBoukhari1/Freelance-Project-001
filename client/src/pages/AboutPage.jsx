import UserLayout from "../layout/user/UserLayout";
import { Typography, Card, List, Divider, Carousel } from "antd";
import {
  HomeOutlined,
  HeartOutlined,
  BulbOutlined,
  CalendarOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const AboutPage = () => {
  const services = [
    "Prenatal care and consultations",
    "Labor and delivery support",
    "Postpartum care and guidance",
    "Breastfeeding education and support",
    "Parenting classes and workshops",
    "Nutritional counseling for expectant mothers",
    "Mental health support for new parents",
    "Infant care education",
    "Genetic counseling",
    "High-risk pregnancy management",
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      content:
        "The care I received was exceptional. I felt supported throughout my entire pregnancy journey.",
    },
    {
      name: "Emily R.",
      content:
        "The parenting classes were incredibly helpful. I feel much more prepared for motherhood now.",
    },
    {
      name: "Jessica T.",
      content:
        "The staff's expertise and compassion made my high-risk pregnancy manageable. I'm forever grateful.",
    },
  ];

  const stats = [
    { icon: <TeamOutlined />, value: "5000+", label: "Happy Mothers" },
    { icon: <CalendarOutlined />, value: "20+", label: "Years of Experience" },
    { icon: <HeartOutlined />, value: "98%", label: "Patient Satisfaction" },
  ];

  return (
    <UserLayout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-5xl shadow-lg">
          <Title
            level={1}
            className="text-6xl font-serif font-light text-center mb-6 text-primary relative
                      before:content-[''] before:absolute before:w-24 before:h-1 before:bg-primary
                      before:-bottom-2 before:left-1/2 before:-translate-x-1/2"
          >
            About Our Maternity Services
          </Title>
          <Paragraph className="text-lg text-gray-600 mb-8 text-center">
            At [Your Company Name], we are dedicated to providing exceptional
            maternity care and support. Our mission is to ensure the health and
            well-being of mothers and their babies through every stage of
            pregnancy and beyond.
          </Paragraph>

          <Divider orientation="left">Our Services</Divider>
          <List
            grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 3 }}
            dataSource={services}
            renderItem={(item) => (
              <List.Item>
                <Card
                  size="small"
                  className="bg-pink-50 hover:bg-pink-100 transition-colors duration-300"
                >
                  <HeartOutlined className="text-primary mr-2" />
                  {item}
                </Card>
              </List.Item>
            )}
          />

          <Divider orientation="left">Why Choose Us</Divider>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <BulbOutlined className="text-4xl text-primary mb-4" />
              <Title level={4}>Expert Staff</Title>
              <Paragraph>
                Our team consists of highly trained professionals dedicated to
                your care.
              </Paragraph>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <HeartOutlined className="text-4xl text-primary mb-4" />
              <Title level={4}>Compassionate Care</Title>
              <Paragraph>
                We provide personalized, empathetic support throughout your
                journey.
              </Paragraph>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <HomeOutlined className="text-4xl text-primary mb-4" />
              <Title level={4}>State-of-the-Art Facilities</Title>
              <Paragraph>
                Our modern facilities ensure comfort and the best medical care.
              </Paragraph>
            </Card>
          </div>

          <Divider orientation="left">Our Impact</Divider>
          <div className="grid grid-cols-3 gap-4 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl text-primary mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-800">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <Divider orientation="left">Testimonials</Divider>
          <Carousel autoplay className="mb-8">
            {testimonials.map((item, index) => (
              <div key={index} className="bg-pink-50 p-6 rounded-lg">
                <Paragraph className="text-lg italic mb-4">
                  &quot;{item.content}&quot;
                </Paragraph>
                <Title level={5} className="text-right">
                  - {item.name}
                </Title>
              </div>
            ))}
          </Carousel>

          <div className="text-center mt-8">
            <button className="bg-primary hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out inline-flex items-center">
              <HomeOutlined className="mr-2" />
              Back to Home
            </button>
          </div>
        </Card>
      </div>
    </UserLayout>
  );
};

export default AboutPage;
