import { Menu, Dropdown, Avatar, Space } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const userMenu = (
    <Menu>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        <Link to="/profile">Go To Website</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
        padding: "0 24px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <span style={{ fontSize: "24px", fontWeight: "bold" }}>
          Maternity Store Admin
        </span>
      </div>
      <Space size="large">
        <Dropdown overlay={userMenu} placement="bottomRight">
          <Avatar
            size="large"
            style={{ cursor: "pointer" }}
            icon={<UserOutlined />}
          />
        </Dropdown>
      </Space>
    </div>
  );
};

export default Navbar;
