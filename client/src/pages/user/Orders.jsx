import { Layout, Card, Row, Col, List, Avatar } from "antd";
import UserLayout from "../../layout/user/UserLayout";
import Sidebar from "../../layout/user/Sidebar";

const { Content, Sider } = Layout;

const orderData = [
  {
    id: "1234",
    date: "2023-06-01",
    status: "Completed",
    items: [
      {
        title: "Product 1",
        avatar: "https://via.placeholder.com/150",
        description: "Description of Product 1",
      },
      {
        title: "Product 2",
        avatar: "https://via.placeholder.com/150",
        description: "Description of Product 2",
      },
    ],
  },
  {
    id: "5678",
    date: "2023-06-15",
    status: "Processing",
    items: [
      {
        title: "Product 3",
        avatar: "https://via.placeholder.com/150",
        description: "Description of Product 3",
      },
    ],
  },
  {
    id: "91011",
    date: "2023-06-20",
    status: "Shipped",
    items: [
      {
        title: "Product 4",
        avatar: "https://via.placeholder.com/150",
        description: "Description of Product 4",
      },
    ],
  },
];

const Orders = () => {
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
                Commandes
              </h1>

              <p className="mb-6 text-gray-800">
                Bonjour kemic89996, voici vos commandes récentes:
              </p>

              <Row gutter={16}>
                {orderData.map((order) => (
                  <Col span={24} key={order.id}>
                    <Card
                      title={`Commande #${order.id}`}
                      bordered={false}
                      className="transform transition-transform m-5 duration-200 hover:scale-105 bg-slate-10"
                    >
                      <p>Date: {order.date}</p>
                      <p>Status: {order.status}</p>
                      <List
                        itemLayout="horizontal"
                        dataSource={order.items}
                        renderItem={(item) => (
                          <List.Item>
                            <List.Item.Meta
                              avatar={<Avatar src={item.avatar} />}
                              title={item.title}
                              description={item.description}
                            />
                          </List.Item>
                        )}
                      />
                      <a
                        href={`/order/${order.id}`}
                        className="text-primary hover:text-pink50 transition-colors"
                      >
                        Voir les détails
                      </a>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Content>
        </Layout>
      </Layout>
    </UserLayout>
  );
};

export default Orders;
