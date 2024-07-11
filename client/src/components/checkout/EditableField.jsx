import { useState } from "react";
import { Input, Button, Typography } from "antd";
import { EditOutlined, CheckOutlined } from "@ant-design/icons";

const { Text } = Typography;

const EditableField = ({ label, value, editable, onEdit }) => {
  const [editing, setEditing] = useState(false);
  const [fieldValue, setFieldValue] = useState(value);

  const handleEdit = () => {
    if (editing) {
      onEdit(fieldValue);
    }
    setEditing(!editing);
  };

  return (
    <div className="mb-4">
      <Text strong className="text-pink-600">
        {label}:{" "}
      </Text>
      {editing ? (
        <Input
          value={fieldValue}
          onChange={(e) => setFieldValue(e.target.value)}
          className="mt-1"
        />
      ) : (
        <Text>{value}</Text>
      )}
      {editable && (
        <Button
          icon={editing ? <CheckOutlined /> : <EditOutlined />}
          onClick={handleEdit}
          className="ml-2 text-pink-600 hover:text-pink-700"
        />
      )}
    </div>
  );
};

export default EditableField;
