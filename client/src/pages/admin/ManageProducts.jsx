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
  InputNumber,
} from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import AdminLayout from "../../layout/admin/AdminLayout";

const { Option } = Select;

const ManageProducts = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      name: "Product 1",
      category: "Category 1",
      price: 100,
      stock: 20,
      description: "Description 1",
    },
    {
      key: "2",
      name: "Product 2",
      category: "Category 2",
      price: 200,
      stock: 30,
      description: "Description 2",
    },
    {
      key: "3",
      name: "Product 3",
      category: "Category 3",
      price: 150,
      stock: 50,
      description: "Description 3",
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
      item.name.toLowerCase().includes(value.toLowerCase())
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
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `$${price}`,
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
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
            title="Are you sure to delete this product?"
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
        <h2>Manage Products</h2>
        <Space style={{ marginBottom: "16px" }}>
          <Input.Search
            placeholder="Search products"
            onSearch={handleSearch}
            style={{ width: 200 }}
          />
          <Button type="primary" icon={<PlusOutlined />} onClick={showAddModal}>
            Add Product
          </Button>
        </Space>
        <Table
          dataSource={filteredData}
          columns={columns}
          pagination={{ pageSize: 5 }}
        />
      </div>
      <Modal
        title={editingKey ? "Edit Product" : "Add New Product"}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form form={form} onFinish={handleAddOrEdit}>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              { required: true, message: "Please input the product name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="category"
            label="Category"
            rules={[
              {
                required: true,
                message: "Please select the product category!",
              },
            ]}
          >
            <Select>
              <Option value="Category 1">Category 1</Option>
              <Option value="Category 2">Category 2</Option>
              <Option value="Category 3">Category 3</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[
              { required: true, message: "Please input the product price!" },
            ]}
          >
            <InputNumber prefix="$" min={0} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            name="stock"
            label="Stock"
            rules={[
              { required: true, message: "Please input the product stock!" },
            ]}
          >
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[
              {
                required: true,
                message: "Please input the product description!",
              },
            ]}
          >
            <Input.TextArea />
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

export default ManageProducts;
