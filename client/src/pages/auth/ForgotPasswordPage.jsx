import { Form, Input, Button, Typography, notification } from "antd";
import { useState } from "react";
import UserLayout from "../../layout/user/UserLayout";

const { Title } = Typography;

const ForgotPasswordPage = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      // Simulate a network request
      await new Promise((resolve) => setTimeout(resolve, 2000));

      notification.success({
        message: "Success",
        description: "Password reset link has been sent to your email address.",
      });
    } catch (error) {
      notification.error({
        message: "Error",
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserLayout>
      <div className="flex items-center justify-center min-h-screen bg-pink50">
        <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
          <Title level={2} className="text-center mb-6">
            Forgot Password
          </Title>
          <p className="text-center mb-6 text-gray-600">
            Enter your email address below and we&apos;ll send you a link to
            reset your password.
          </p>
          <Form layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                {
                  type: "email",
                  message: "Please enter a valid email address!",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                className="w-full"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
          <p className="text-center mt-4 text-gray-600">
            Remembered your password?{" "}
            <a href="/login" className="text-primary">
              Log in
            </a>
          </p>
        </div>
      </div>
    </UserLayout>
  );
};

export default ForgotPasswordPage;
