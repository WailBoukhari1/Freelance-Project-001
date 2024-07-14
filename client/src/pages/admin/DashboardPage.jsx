import {
  Layout,
  Row,
  Col,
  Card,
  Statistic,
  Table,
  List,
  Avatar,
  Typography,
} from "antd";
import { Line } from "@ant-design/charts";
import AdminLayout from "../../layout/admin/AdminLayout";
import { UserOutlined } from "@ant-design/icons";

const { Content } = Layout;
const { Title } = Typography;

const DashboardPage = () => {
  const orderData = [
    {
      key: "1",
      orderNumber: "123456",
      customer: "John Doe",
      date: "2024-07-14",
      amount: "$150.00",
      status: "Shipped",
    },
    {
      key: "2",
      orderNumber: "123457",
      customer: "Jane Smith",
      date: "2024-07-14",
      amount: "$250.00",
      status: "Processing",
    },
    {
      key: "3",
      orderNumber: "123458",
      customer: "Alice Johnson",
      date: "2024-07-14",
      amount: "$100.00",
      status: "Delivered",
    },
  ];

  const orderColumns = [
    {
      title: "Order Number",
      dataIndex: "orderNumber",
      key: "orderNumber",
    },
    {
      title: "Customer",
      dataIndex: "customer",
      key: "customer",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  const productData = [
    {
      key: "1",
      name: "Product A",
      sales: 100,
    },
    {
      key: "2",
      name: "Product B",
      sales: 150,
    },
    {
      key: "3",
      name: "Product C",
      sales: 200,
    },
  ];

  const productColumns = [
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Sales",
      dataIndex: "sales",
      key: "sales",
    },
  ];

  const feedbackData = [
    {
      key: "1",
      customer: "John Doe",
      feedback: "Great service!",
      date: "2024-07-13",
    },
    {
      key: "2",
      customer: "Jane Smith",
      feedback: "Fast delivery.",
      date: "2024-07-12",
    },
    {
      key: "3",
      customer: "Alice Johnson",
      feedback: "Good quality products.",
      date: "2024-07-11",
    },
  ];

  const inventoryData = [
    {
      key: "1",
      product: "Product A",
      stock: 20,
    },
    {
      key: "2",
      product: "Product B",
      stock: 15,
    },
    {
      key: "3",
      product: "Product C",
      stock: 5,
    },
  ];

  const inventoryColumns = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
    },
  ];

  const salesData = [
    { date: "2024-07-01", sales: 38 },
    { date: "2024-07-02", sales: 52 },
    { date: "2024-07-03", sales: 61 },
    { date: "2024-07-04", sales: 145 },
    { date: "2024-07-05", sales: 48 },
    { date: "2024-07-06", sales: 38 },
    { date: "2024-07-07", sales: 38 },
  ];

  const config = {
    data: salesData,
    xField: "date",
    yField: "sales",
    point: {
      size: 5,
      shape: "diamond",
    },
  };


  return (
    <AdminLayout>
      <Content style={{ padding: "48px", minHeight: "100vh" }}>
        <Title level={2} style={{ marginBottom: "32px" }}>
          Admin Dashboard
        </Title>
        <Row gutter={16}>
          <Col span={6}>
            <Card>
              <Statistic title="Total Sales" value={1128} prefix="$" />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic title="New Orders" value={93} />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic title="Total Customers" value={112} />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic title="Products Sold" value={245} />
            </Card>
          </Col>
        </Row>
        <div style={{ marginTop: "32px" }}>
          <Title level={4} style={{ marginBottom: "16px" }}>
            Sales Overview
          </Title>
          <Line {...config} />
        </div>
        <div style={{ marginTop: "32px" }}>
          <Title level={4} style={{ marginBottom: "16px" }}>
            Recent Orders
          </Title>
          <Table
            dataSource={orderData}
            columns={orderColumns}
            pagination={false}
          />
        </div>
        <div style={{ marginTop: "32px" }}>
          <Title level={4} style={{ marginBottom: "16px" }}>
            Top Products
          </Title>
          <Table
            dataSource={productData}
            columns={productColumns}
            pagination={false}
          />
        </div>
        <div style={{ marginTop: "32px" }}>
          <Title level={4} style={{ marginBottom: "16px" }}>
            Inventory Status
          </Title>
          <Table
            dataSource={inventoryData}
            columns={inventoryColumns}
            pagination={false}
          />
        </div>
        <div style={{ marginTop: "32px" }}>
          <Title level={4} style={{ marginBottom: "16px" }}>
            Customer Feedback
          </Title>
          <List
            itemLayout="horizontal"
            dataSource={feedbackData}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar icon={<UserOutlined />} />}
                  title={item.customer}
                  description={item.feedback}
                />
                <div>{item.date}</div>
              </List.Item>
            )}
          />
        </div>
      </Content>
    </AdminLayout>
  );
};

export default DashboardPage;
