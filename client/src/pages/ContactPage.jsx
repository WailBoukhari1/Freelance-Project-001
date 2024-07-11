import UserLayout from "../layout/user/UserLayout";
import { Typography, Form, Input, Button, Divider, notification } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const ContactPage = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
    notification.success({
      message: "Form Submitted",
      description:
        "Your message has been successfully submitted. We will get back to you soon.",
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    notification.error({
      message: "Form Submission Failed",
      description: "Please check your input fields and try again.",
    });
  };

  return (
    <UserLayout>
      <div className="max-w-4xl mx-auto p-6">
        <Title level={2} className="text-center text-pink-600 mb-8">
          Contact Us
        </Title>

        <div className="mb-8 p-6 border border-pink-200 rounded-lg shadow-lg bg-white">
          <Title level={4} className="text-pink-600 mb-4">
            Get in Touch
          </Title>
          <Text className="block mb-4">
            If you have any questions, feel free to reach out to us by filling
            out the form below.
          </Text>

          <Form
            name="contact"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Full Name"
              name="fullName"
              rules={[
                { required: true, message: "Please input your full name!" },
              ]}
            >
              <Input placeholder="Your Full Name" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                  type: "email",
                },
              ]}
            >
              <Input placeholder="Your Email" />
            </Form.Item>

            <Form.Item
              label="Subject"
              name="subject"
              rules={[{ required: true, message: "Please input the subject!" }]}
            >
              <Input placeholder="Subject" />
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[
                { required: true, message: "Please input your message!" },
              ]}
            >
              <Input.TextArea rows={4} placeholder="Your Message" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="bg-pink-600 text-white hover:bg-pink-700 w-full"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>

        <Divider className="border-pink-200" />

        <div className="mt-8 p-6 border border-pink-200 rounded-lg shadow-lg bg-white">
          <Title level={4} className="text-pink-600 mb-4">
            Our Office
          </Title>
          <div className="flex items-start mb-4">
            <EnvironmentOutlined className="text-pink-600 mr-2 text-xl" />
            <div>
              <Text className="block">123 Main St</Text>
              <Text className="block">Anytown, USA</Text>
            </div>
          </div>
          <div className="flex items-start mb-4">
            <PhoneOutlined className="text-pink-600 mr-2 text-xl" />
            <Text>(123) 456-7890</Text>
          </div>
          <div className="flex items-start">
            <MailOutlined className="text-pink-600 mr-2 text-xl" />
            <Text>contact@company.com</Text>
          </div>
        </div>

        <div className="mt-8 p-6 border border-pink-200 rounded-lg shadow-lg bg-white">
          <Title level={4} className="text-pink-600 mb-4">
            Frequently Asked Questions
          </Title>
          <div className="mb-4">
            <Title level={5} className="text-pink-600">
              What is your return policy?
            </Title>
            <Text>
              We offer a 30-day return policy on all items. Please contact our
              support team for more details.
            </Text>
          </div>
          <div className="mb-4">
            <Title level={5} className="text-pink-600">
              How can I track my order?
            </Title>
            <Text>
              You can track your order using the tracking link provided in your
              order confirmation email.
            </Text>
          </div>
          <div>
            <Title level={5} className="text-pink-600">
              Do you offer customer support?
            </Title>
            <Text>
              Yes, our customer support team is available 24/7 to assist you
              with any queries.
            </Text>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default ContactPage;
