import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import {
  DashboardOutlined,
  EditOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  TagsOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      key: "/admin/dashboard",
      icon: <DashboardOutlined />,
      label: "Dashboard",
    },
    {
      key: "/manage-collections",
      icon: <AppstoreOutlined />,
      label: "Manage Collections",
    },
    { key: "/manage-blogs", icon: <EditOutlined />, label: "Manage Blogs" },
    {
      key: "/manage-products",
      icon: <AppstoreOutlined />,
      label: "Manage Products",
    },
    {
      key: "/manage-orders",
      icon: <ShoppingCartOutlined />,
      label: "Manage Orders",
    },
    { key: "/manage-users", icon: <UserOutlined />, label: "Manage Users" },
    {
      key: "/manage-categories",
      icon: <TagsOutlined />,
      label: "Manage Categories",
    },
  ];

  return (
    <Menu
      mode="inline"
      selectedKeys={[location.pathname]}
      style={{ height: "100%" }}
    >
      {menuItems.map((item) => (
        <Menu.Item key={item.key} icon={item.icon}>
          <Link to={item.key}>{item.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default Sidebar;
