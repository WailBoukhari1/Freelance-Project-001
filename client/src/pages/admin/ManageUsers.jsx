import { useState } from "react";
import {
  Table,
  Button,
  Space,
  Popconfirm,
  Input,
  Modal,
  Form,
  Select,
} from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import AdminLayout from "../../layout/admin/AdminLayout";

const { Option } = Select;

const ManageUsers = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      username: "johndoe",
      email: "johndoe@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      key: "2",
      username: "janesmith",
      email: "janesmith@example.com",
      role: "User",
      status: "Inactive",
    },
    {
      key: "3",
      username: "alicejohnson",
      email: "alicejohnson@example.com",
      role: "User",
      status: "Active",
    },
  ]);

  const [filteredData, setFilteredData] = useState(dataSource);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState(null);

  const showAddModal = () => {
    setIsModalVisible(true);
    setEditingKey(null);
  };

  const handleAddOrEdit = (values) => {
    if (editingKey) {
      const newData = dataSource.map((item) =>
        item.key === editingKey ? { ...item, ...values } : item
      );
      setDataSource(newData);
      setFilteredData(newData);
    } else {
      const newKey = (dataSource.length + 1).toString();
      const newData = [...dataSource, { ...values, key: newKey }];
      setDataSource(newData);
      setFilteredData(newData);
    }
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
    setFilteredData(newData);
  };

  const handleSearch = (value) => {
    const filtered = dataSource.filter((item) =>
      item.username.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleEdit = (record) => {
    form.setFieldsValue(record);
    setIsModalVisible(true);
    setEditingKey(record.key);
  };

  const columns = [
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space size="middle">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this user?"
            onConfirm={() => handleDelete(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="danger" icon={<DeleteOutlined />}>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <AdminLayout>
      <div style={{ padding: "24px" }}>
        <h2>Manage Users</h2>
        <Space style={{ marginBottom: "16px" }}>
          <Input.Search
            placeholder="Search users"
            onSearch={handleSearch}
            style={{ width: 200 }}
          />
          <Button type="primary" icon={<PlusOutlined />} onClick={showAddModal}>
            Add User
          </Button>
        </Space>
        <Table
          dataSource={filteredData}
          columns={columns}
          pagination={{ pageSize: 5 }}
        />
      </div>
      <Modal
        title={editingKey ? "Edit User" : "Add New User"}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form form={form} onFinish={handleAddOrEdit}>
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: "Please input the username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please input the email!" }]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item
            name="role"
            label="Role"
            rules={[{ required: true, message: "Please select the role!" }]}
          >
            <Select>
              <Option value="Admin">Admin</Option>
              <Option value="User">User</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: "Please select the status!" }]}
          >
            <Select>
              <Option value="Active">Active</Option>
              <Option value="Inactive">Inactive</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {editingKey ? "Save" : "Add"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </AdminLayout>
  );
};

export default ManageUsers;
