import { Menu } from "antd";
import { Link } from "react-router-dom";
import {
  DashboardOutlined,
  OrderedListOutlined,
  DownloadOutlined,
  HomeOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const Sidebar = () => {
  return (
    <div className="w-250 bg-white my-20">
      <h2 className="p-4 text-lg text-center" style={{ color: "#ff69b4" }}>
        MON COMPTE
      </h2>
      <Menu defaultSelectedKeys={["1"]} mode="vertical" theme="light">
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          <Link to="/user/dashboard" className="text-pink hover:text-pink50">
            Tableau de bord
          </Link>
        </Menu.Item>
        <Menu.Item key="2" className="!bg-red" icon={<OrderedListOutlined />}>
          <Link to="/user/orders">Commandes</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<DownloadOutlined />}>
          <Link to="/user/downloads">Téléchargements</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<HomeOutlined />}>
          <Link to="/user/shipping-adress">Adresses</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<UserOutlined />}>
          <Link to="/user/account-details">Détails du compte</Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<LogoutOutlined />}>
          <Link to="/logout">Déconnexion</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Sidebar;
