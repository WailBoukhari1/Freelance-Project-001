import { Typography, Divider } from "antd";

const { Title, Text } = Typography;

const OrderReview = ({ userData }) => (
  <div>
    <Title level={4} className="mb-4 text-pink-600">
      Order Review
    </Title>
    <Text strong>Shipping to:</Text>
    <Text className="block mb-2">{`${userData.fullName}, ${userData.address}, ${userData.city}, ${userData.country}`}</Text>
    <Text strong>Payment method:</Text>
    <Text className="block mb-2">{`Card ending in ${userData.cardNumber.slice(
      -4
    )}`}</Text>
    <Divider />
    <Text strong className="text-lg">
      Total: $XX.XX
    </Text>
  </div>
);

export default OrderReview;
