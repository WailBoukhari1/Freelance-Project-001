import { Layout, Form, Input, Button, notification } from "antd";
import UserLayout from "../../layout/user/UserLayout";

const { Content } = Layout;

const ResetPasswordPage = () => {
  const onFinish = (values) => {
    notification.success({
      message: "Success",
      description: "Your password has been reset successfully!",
      placement: "topRight",
    });
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    notification.error({
      message: "Error",
      description: "Failed to reset password. Please try again.",
      placement: "topRight",
    });
    console.log("Failed:", errorInfo);
  };

  return (
    <UserLayout>
      <Content className="p-12 bg-pink50 min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-primary text-2xl font-bold text-center mb-8">
            Reset Password
          </h2>
          <Form
            name="reset_password"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="space-y-6"
          >
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your new password!" },
              ]}
            >
              <Input.Password
                placeholder="New Password"
                className="px-4 py-2 border rounded w-full"
              />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: "Please confirm your new password!",
                },
              ]}
            >
              <Input.Password
                placeholder="Confirm New Password"
                className="px-4 py-2 border rounded w-full"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="bg-primary border-primary w-full py-2 text-white font-semibold rounded"
              >
                Reset Password
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
    </UserLayout>
  );
};

export default ResetPasswordPage;
