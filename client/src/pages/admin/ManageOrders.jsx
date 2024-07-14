import  { useState } from "react";
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

const ManageOrders = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      orderNumber: "123456",
      customer: "John Doe",
      date: "2024-07-01",
      amount: "$150.00",
      status: "Shipped",
    },
    {
      key: "2",
      orderNumber: "123457",
      customer: "Jane Smith",
      date: "2024-07-02",
      amount: "$250.00",
      status: "Processing",
    },
    {
      key: "3",
      orderNumber: "123458",
      customer: "Alice Johnson",
      date: "2024-07-03",
      amount: "$100.00",
      status: "Delivered",
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
      item.orderNumber.toLowerCase().includes(value.toLowerCase())
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
            title="Are you sure to delete this order?"
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
        <h2>Manage Orders</h2>
        <Space style={{ marginBottom: "16px" }}>
          <Input.Search
            placeholder="Search orders"
            onSearch={handleSearch}
            style={{ width: 200 }}
          />
          <Button type="primary" icon={<PlusOutlined />} onClick={showAddModal}>
            Add Order
          </Button>
        </Space>
        <Table
          dataSource={filteredData}
          columns={columns}
          pagination={{ pageSize: 5 }}
        />
      </div>
      <Modal
        title={editingKey ? "Edit Order" : "Add New Order"}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form form={form} onFinish={handleAddOrEdit}>
          <Form.Item
            name="orderNumber"
            label="Order Number"
            rules={[
              { required: true, message: "Please input the order number!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="customer"
            label="Customer"
            rules={[
              { required: true, message: "Please input the customer name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="date"
            label="Date"
            rules={[
              { required: true, message: "Please input the order date!" },
            ]}
          >
            <Input type="date" />
          </Form.Item>
          <Form.Item
            name="amount"
            label="Amount"
            rules={[
              { required: true, message: "Please input the order amount!" },
            ]}
          >
            <Input prefix="$" />
          </Form.Item>
          <Form.Item
            name="status"
            label="Status"
            rules={[
              { required: true, message: "Please select the order status!" },
            ]}
          >
            <Select>
              <Option value="Processing">Processing</Option>
              <Option value="Shipped">Shipped</Option>
              <Option value="Delivered">Delivered</Option>
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

export default ManageOrders;
