import { Layout } from "antd";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import PropTypes from 'prop-types';

const { Header, Sider, Content, Footer } = Layout;

const AdminLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          backgroundColor: "#fff",
          boxShadow: "0 2px 8px #f0f1f2",
          padding: 0,
        }}
      >
        <Navbar />
      </Header>
      <Layout>
        <Sider width={250} style={{ backgroundColor: "#fff" }}>
          <Sidebar />
        </Sider>
        <Layout style={{ padding: "24px", backgroundColor: "#f0f2f5" }}>
          <Content
            style={{
              backgroundColor: "#fff",
              boxShadow: "0 2px 8px #f0f1f2",
              borderRadius: "8px",
              padding: "24px",
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "#fff",
          boxShadow: "0 2px 8px #f0f1f2",
          padding: "16px 0",
        }}
      >
        ©2024 Maternity Store Admin Dashboard
      </Footer>
    </Layout>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminLayout;