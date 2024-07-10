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
      icon: <CheckCircleOutlined />,
    },
    {
      title: "Fast Shipping",
      description:
        "Enjoy quick delivery times with our efficient shipping services.",
      icon: <RocketOutlined />,
    },
    {
      title: "Excellent Customer Service",
      description: "Our dedicated support team is always ready to assist you.",
      icon: <TeamOutlined />,
    },
    {
      title: "Secure Shopping",
      description: "Shop with confidence knowing your information is safe.",
      icon: <SafetyCertificateOutlined />,
    },
  ];

  return (
    <section
      className="about-us-section my-10 py-10 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://static1.squarespace.com/static/56f18f1c7c65e42974ba15e6/56f3571efb436df53c44b3db/64ed0d2600f99e097974b14a/1703262499218/What+Should+Your+Family+Wear+for+Maternity+Photos+_+Saleem+Maternity+.jpg?format=1500w)",
      }}
    >
      <div className="absolute inset-0 bg-pink-100 opacity-75"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2
          className="text-6xl font-serif font-light text-center mb-6 text-primary relative
                      before:content-[''] before:absolute before:w-24 before:h-1 before:bg-primary
                      before:-bottom-2 before:left-1/2 before:-translate-x-1/2"
        >
          About Us
        </h2>
        <p className="text-xl text-center text-gray-700 leading-relaxed mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
          lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl
          tempus convallis quis ac lectus.
        </p>

        <h3
          className="text-3xl font-semibold mt-12 mb-12 text-center text-gray-800 relative
                       before:content-[''] before:absolute before:w-16 before:h-1 before:bg-gray-800
                       before:-bottom-2 before:left-1/2 before:-translate-x-1/2"
        >
          Why Choose Us?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {advantages.map((advantage, index) => (
            <Card
              key={index}
              hoverable
              className="p-5 bg-white rounded-2xl shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="flex items-center justify-center mb-6 text-primary text-4xl">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-gray-900">
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
