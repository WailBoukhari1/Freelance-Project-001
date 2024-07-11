import UserLayout from "../layout/user/UserLayout";
import { Typography } from "antd";

const { Title, Text } = Typography;

const ThankYouPage = () => {
  return (
    <UserLayout>
      <div className="max-w-4xl mx-auto p-6 text-center">
        <Title level={2} className="text-pink-600 mb-8">
          Thank You!
        </Title>

        <div className="bg-white p-6 border border-pink-200 rounded-lg shadow-lg">
          <Title level={4} className="text-pink-600 mb-4">
            Your Oreder Has Been Made
          </Title>
          <Text>
            We appreciate you reaching out to us. Our team will work on you order shortly
          </Text>
        </div>
      </div>
    </UserLayout>
  );
};

export default ThankYouPage;
