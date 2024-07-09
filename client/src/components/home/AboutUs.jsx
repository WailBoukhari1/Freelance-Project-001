import { Card } from "antd";
import {
  CheckCircleOutlined,
  RocketOutlined,
  TeamOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

const AboutUsSection = () => {
  const advantages = [
    {
      title: "Quality Products",
      description:
        "We offer high-quality products sourced from the best suppliers.",
      icon: <CheckCircleOutlined className="text-4xl text-green-600" />,
    },
    {
      title: "Fast Shipping",
      description:
        "Enjoy quick delivery times with our efficient shipping services.",
      icon: <RocketOutlined className="text-4xl text-blue-600" />,
    },
    {
      title: "Excellent Customer Service",
      description: "Our dedicated support team is always ready to assist you.",
      icon: <TeamOutlined className="text-4xl text-purple-600" />,
    },
    {
      title: "Secure Shopping",
      description: "Shop with confidence knowing your information is safe.",
      icon: <SafetyCertificateOutlined className="text-4xl text-red-600" />,
    },
  ];

  return (
    <section className="about-us-section py-16 px-8 bg-gradient-to-r from-gray-100 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">About Us</h2>
        <p className="text-xl text-center text-gray-700 leading-relaxed mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
          lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl
          tempus convallis quis ac lectus.
        </p>

        <h3 className="text-3xl font-semibold mt-12 mb-12 text-center text-gray-800">
          Why Choose Us?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {advantages.map((advantage, index) => (
            <Card key={index} hoverable className="p-8  rounded-lg">
              <div className="flex items-center justify-center mb-6">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">
                {advantage.title}
              </h3>
              <p className="text-md text-center text-gray-600">
                {advantage.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
