import {
  Layout,
  Card,
  Row,
  Col,
  Form,
  Input,
  notification,
} from "antd";
import UserLayout from "../../layout/user/UserLayout";
import Sidebar from "../../layout/user/Sidebar";

const { Content, Sider } = Layout;

const ShippingAddress = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
    // Handle form submission
    notification.success({
      message: "Succès",
      description: "L'adresse de livraison a été mise à jour avec succès.",
    });
  };

  const onFinishFailed = () => {
    notification.error({
      message: "Erreur",
      description:
        "Une erreur est survenue lors de la mise à jour de l'adresse.",
    });
  };

  return (
    <UserLayout>
      <Layout className="min-h-screen">
        <Sider width={350} className="!bg-white shadow-lg">
          <Sidebar />
        </Sider>
        <Layout>
          <Content className="m-6 overflow-auto">
            <div className="p-6 bg-white min-h-[360px] shadow-md rounded-lg">
              <h1 className="text-4xl font-bold mb-8 text-gray-800">
                Adresse de Livraison
              </h1>

              <Row gutter={16}>
                <Col span={24}>
                  <Card
                    title="Adresse actuelle"
                    bordered={false}
                    className="transform transition-transform m-5 duration-200 hover:scale-105"
                    headStyle={{ backgroundColor: "#ff69b4", color: "#ffffff" }}
                  >
                    <p>John Doe</p>
                    <p>123 Main St</p>
                    <p>Anytown, USA</p>
                    <p>+123 456 7890</p>
                  </Card>
                </Col>

                <Col span={24}>
                  <Card
                    title="Modifier l'adresse"
                    bordered={false}
                    className="transform transition-transform m-5 duration-200 hover:scale-105"
                  >
                    <Form
                      name="shipping_address"
                      layout="vertical"
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                    >
                      <Form.Item
                        name="name"
                        label="Nom"
                        initialValue="John Doe"
                        rules={[
                          {
                            required: true,
                            message: "Veuillez entrer votre nom",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item
                        name="address"
                        label="Adresse"
                        initialValue="123 Main St"
                        rules={[
                          {
                            required: true,
                            message: "Veuillez entrer votre adresse",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item
                        name="city"
                        label="Ville"
                        initialValue="Anytown"
                        rules={[
                          {
                            required: true,
                            message: "Veuillez entrer votre ville",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item
                        name="country"
                        label="Pays"
                        initialValue="USA"
                        rules={[
                          {
                            required: true,
                            message: "Veuillez entrer votre pays",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item
                        name="phone"
                        label="Téléphone"
                        initialValue="+123 456 7890"
                        rules={[
                          {
                            required: true,
                            message:
                              "Veuillez entrer votre numéro de téléphone",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item>
                        <button
                          type="submit"
                          className="px-4 py-2 font-semibold text-white bg-primary hover:bg-pink100 hover:text-primary rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                        >
                          Enregistrer
                        </button>
                      </Form.Item>
                    </Form>
                  </Card>
                </Col>
              </Row>
            </div>
          </Content>
        </Layout>
      </Layout>
    </UserLayout>
  );
};

export default ShippingAddress;
