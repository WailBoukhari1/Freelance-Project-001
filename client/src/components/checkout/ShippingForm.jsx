import { Typography } from "antd";
import EditableField from "./EditableField";

const { Title } = Typography;

const ShippingForm = ({ userData }) => (
  <div>
    <Title level={4} className="mb-4 text-pink-600">
      Shipping Information
    </Title>
    <EditableField
      label="Full Name"
      value={userData.fullName}
      editable
      onEdit={console.log}
    />
    <EditableField
      label="Address"
      value={userData.address}
      editable
      onEdit={console.log}
    />
    <EditableField
      label="City"
      value={userData.city}
      editable
      onEdit={console.log}
    />
    <EditableField
      label="Country"
      value={userData.country}
      editable
      onEdit={console.log}
    />
  </div>
);

export default ShippingForm;
