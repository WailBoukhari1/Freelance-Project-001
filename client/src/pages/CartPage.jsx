import { useState, useEffect } from "react";
import UserLayout from "../layout/user/UserLayout";
import {
  Typography,
  List,
  Card,
  Button,
  InputNumber,
  Empty,
  Divider,
  Tooltip,
  Input,
  notification,
  Spin,
  Progress,
} from "antd";
import {
  DeleteOutlined,
  ShoppingCartOutlined,
  GiftOutlined,
  MinusOutlined,
  PlusOutlined,
  HeartOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [discount, setDiscount] = useState(0);
  const [couponCode, setCouponCode] = useState("");

  useEffect(() => {
    // Simulating API call to fetch cart items
    setTimeout(() => {
      setCartItems([
        {
          id: 1,
          name: "Prenatal Vitamins",
          price: 25.99,
          quantity: 1,
          image: "https://via.placeholder.com/150",
          description: "Essential nutrients for expectant mothers",
        },
        {
          id: 2,
          name: "Maternity Pillow",
          price: 49.99,
          quantity: 1,
          image: "https://via.placeholder.com/150",
          description: "Comfortable support for better sleep during pregnancy",
        },
        {
          id: 3,
          name: "Baby Onesie Set",
          price: 19.99,
          quantity: 2,
          image: "https://via.placeholder.com/150",
          description: "Soft and cozy onesies for your newborn",
        },
        {
          id: 4,
          name: "Stretch Mark Cream",
          price: 15.99,
          quantity: 1,
          image: "https://via.placeholder.com/150",
          description: "Helps reduce the appearance of stretch marks",
        },
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  const updateQuantity = (id, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const applyCoupon = () => {
    if (couponCode.toUpperCase() === "SAMPLECODE") {
      setDiscount(10);
      notification.success({
        message: "Coupon Applied",
        description: `Coupon '${couponCode}' applied successfully!`,
      });
    } else {
      notification.error({
        message: "Invalid Coupon",
        description: "The coupon code entered is invalid.",
      });
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    notification.success({
      message: "Item Removed",
      description: "The item has been removed from your cart.",
    });
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 100 ? 0 : 5.99;
  const total = subtotal + shipping;
  const totalWithDiscount = total - (total * discount) / 100;

  const freeShippingProgress = (subtotal / 100) * 100;

  return (
    <UserLayout>
      <div className="max-w-6xl mx-auto p-4">
        <Title level={2} className="mb-6 text-center text-pink-600">
          <ShoppingCartOutlined className="mr-2" /> Your Maternity Shopping Cart
        </Title>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Spin size="large" />
          </div>
        ) : cartItems.length === 0 ? (
          <Empty
            description="Your cart is empty. Start your maternity shopping journey!"
            className="bg-white p-8 rounded-lg shadow-md"
          />
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-grow">
              <List
                itemLayout="horizontal"
                dataSource={cartItems}
                renderItem={(item) => (
                  <List.Item>
                    <Card className="w-full shadow-sm hover:shadow-md transition-shadow duration-300 bg-white rounded-lg p-4">
                      <div className="flex items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-md mr-4"
                        />
                        <div className="flex-grow">
                          <Text strong className="text-lg text-pink-600">
                            {item.name}
                          </Text>
                          <Text className="block text-gray-600">
                            ${item.price.toFixed(2)}
                          </Text>
                          <Text className="block text-gray-500 text-sm mt-1">
                            {item.description}
                          </Text>
                        </div>
                        <div className="flex items-center">
                          <Button
                            type="text"
                            icon={<MinusOutlined />}
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                            className="text-pink-600 hover:text-pink-700"
                          />
                          <InputNumber
                            min={1}
                            value={item.quantity}
                            onChange={(value) => updateQuantity(item.id, value)}
                            className="mx-2"
                          />
                          <Button
                            type="text"
                            icon={<PlusOutlined />}
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="text-pink-600 hover:text-pink-700"
                          />
                          <Tooltip title="Remove item">
                            <Button
                              type="text"
                              danger
                              icon={<DeleteOutlined />}
                              onClick={() => removeItem(item.id)}
                              className="ml-2 text-pink-600 hover:text-pink-700"
                            />
                          </Tooltip>
                          <Tooltip title="Save for later">
                            <Button
                              type="text"
                              icon={<HeartOutlined />}
                              className="ml-2 text-pink-600 hover:text-pink-700"
                            />
                          </Tooltip>
                        </div>
                      </div>
                    </Card>
                  </List.Item>
                )}
              />
            </div>

            <div className="w-full lg:w-1/3">
              <Card
                title="Order Summary"
                className="sticky top-4 bg-white rounded-lg shadow-md"
              >
                <div className="mb-4">
                  <Text className="text-gray-600">
                    Free shipping on orders over $100
                  </Text>
                  <Progress
                    percent={freeShippingProgress}
                    status="active"
                    strokeColor={{
                      "0%": "#fecaca",
                      "100%": "#f472b6",
                    }}
                  />
                  {subtotal < 100 && (
                    <Text className="text-sm text-gray-500">
                      Add ${(100 - subtotal).toFixed(2)} more to get free
                      shipping
                    </Text>
                  )}
                </div>
                <div className="flex justify-between mb-2">
                  <Text>Subtotal:</Text>
                  <Text strong>${subtotal.toFixed(2)}</Text>
                </div>
                <div className="flex justify-between mb-2">
                  <Text>Shipping:</Text>
                  <Text strong>
                    {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                  </Text>
                </div>
                <div className="flex justify-between mb-2">
                  <Text>Discount:</Text>
                  <Text strong className="text-green-600">
                    -{discount}%
                  </Text>
                </div>
                <Divider />
                <div className="flex justify-between mb-4">
                  <Text strong>Total:</Text>
                  <Text strong className="text-xl text-pink-600">
                    ${totalWithDiscount.toFixed(2)}
                  </Text>
                </div>
                <div className="mb-4">
                  <Input
                    placeholder="Enter coupon code"
                    className="mb-2"
                    prefix={<GiftOutlined className="text-gray-400" />}
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    onPressEnter={applyCoupon}
                  />
                  <button
                    onClick={applyCoupon}
                    className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-opacity-90 transition-colors duration-300"
                  >
                    Apply Coupon
                  </button>
                </div>
                <button className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-opacity-90 transition-colors duration-300 mt-4">
                  Proceed to Checkout
                </button>
                <div className="mt-4 text-center">
                  <Tooltip title="30-day money-back guarantee">
                    <InfoCircleOutlined className="text-gray-500 mr-2" />
                    <Text className="text-sm text-gray-500">
                      Satisfaction Guaranteed
                    </Text>
                  </Tooltip>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </UserLayout>
  );
};

export default CartPage;
