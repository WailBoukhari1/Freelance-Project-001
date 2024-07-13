import { Layout, Card, Row, Col } from "antd";
import UserLayout from "../../layout/user/UserLayout";
import Sidebar from "../../layout/user/Sidebar";

const { Content, Sider } = Layout;

const AccountDetails = () => {
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
                Détails du compte
              </h1>

              <Row gutter={16}>
                <Col span={24}>
                  <Card
                    title="Informations personnelles"
                    bordered={false}
                    className="transform transition-transform m-5 duration-200 hover:scale-105 bg-slate-10"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-medium">Nom</label>
                        <p>John Doe</p>
                      </div>
                      <div>
                        <label className="block font-medium">Email</label>
                        <p>john.doe@example.com</p>
                      </div>
                      <div>
                        <label className="block font-medium">Téléphone</label>
                        <p>+123 456 7890</p>
                      </div>
                      <div>
                        <label className="block font-medium">Adresse</label>
                        <p>123 Main St, Anytown, USA</p>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col span={24}>
                  <Card
                    title="Paramètres du compte"
                    bordered={false}
                    className="transform transition-transform m-5 duration-200 hover:scale-105 bg-slate-10"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-medium">
                          Nom d'utilisateur
                        </label>
                        <p>johndoe123</p>
                      </div>
                      <div>
                        <label className="block font-medium">
                          Mot de passe
                        </label>
                        <p>*********</p>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col span={24}>
                  <Card
                    title="Activité récente"
                    bordered={false}
                    className="transform transition-transform m-5 duration-200 hover:scale-105 bg-slate-10"
                  >
                    <ul className="list-disc pl-5">
                      <li>Order #1234 - Completed</li>
                      <li>Order #5678 - Processing</li>
                      <li>Password changed</li>
                    </ul>
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

export default AccountDetails;
