  import { Layout, Card, Row, Col } from "antd";
  import UserLayout from "../../layout/user/UserLayout";
  import Sidebar from "../../layout/user/Sidebar";

  const { Content, Sider } = Layout;

  const DashboardPage = () => {
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
                  Dashboard
                </h1>

                <p className="mb-6 text-gray-800">
                  Bonjour kemic89996 (vous n&#39;êtes pas kemic89996 ?{" "}
                  <a
                    href="/logout"
                    className="text-primary hover:text-pink50 transition-colors"
                  >
                    Déconnexion
                  </a>
                  )
                </p>
                <p className="mb-6 text-gray-800">
                  À partir du tableau de bord de votre compte, vous pouvez
                  visualiser vos commandes récentes, gérer vos adresses de
                  livraison et de facturation ainsi que changer votre mot de passe
                  et les détails de votre compte.
                </p>

                <Row gutter={16}>
                  <Col span={8}>
                    <Card
                      title="Commandes"
                      bordered={false}
                      className="text-center transform transition-transform m-5 duration-200 hover:scale-105 bg-slate-10"
                    >
                      <a
                        href="/orders"
                        className=" text-lg text-primary hover:text-pink50 transition-colors"
                      >
                        Voir
                      </a>
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card
                      title="Téléchargements"
                      bordered={false}
                      className="text-center transform transition-transform m-5 duration-200 hover:scale-105 bg-slate-10"
                    >
                      <a
                        href="/downloads"
                        className="text-lg text-primary  hover:text-pink50  transition-colors"
                      >
                        Voir
                      </a>
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card
                      title="Adresses"
                      bordered={false}
                      className="text-center transform transition-transform m-5 duration-200 hover:scale-105 bg-slate-10"
                    >
                      <a
                        href="/addresses"
                        className="text-lg text-primary  hover:text-pink50  transition-colors"
                      >
                        Voir
                      </a>
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card
                      title="Détails du compte"
                      bordered={false}
                      className="text-center transform transition-transform m-5 duration-200 hover:scale-105 bg-slate-10"
                    >
                      <a
                        href="/account-details"
                        className="text-lg text-primary  hover:text-pink50  transition-colors"
                      >
                        Voir
                      </a>
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

  export default DashboardPage;
