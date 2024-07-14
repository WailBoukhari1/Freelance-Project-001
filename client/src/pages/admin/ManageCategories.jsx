import { useState } from "react";
import { Table, Button, Space, Popconfirm, Input, Modal, Form } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import AdminLayout from "../../layout/admin/AdminLayout";

const ManageCategories = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      name: "Category 1",
      description: "Description 1",
    },
    {
      key: "2",
      name: "Category 2",
      description: "Description 2",
    },
    {
      key: "3",
      name: "Category 3",
      description: "Description 3",
    },
  ]);

  const [filteredData, setFilteredData] = useState(dataSource);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editingKey, setEditingKey] = useState("");
  const [form] = Form.useForm();

  const showAddModal = () => {
    setIsEdit(false);
    form.resetFields();
    setIsModalVisible(true);
  };

  const showEditModal = (record) => {
    setIsEdit(true);
    setEditingKey(record.key);
    form.setFieldsValue(record);
    setIsModalVisible(true);
  };

  const handleAdd = (values) => {
    const newKey = (dataSource.length + 1).toString();
    const newData = [...dataSource, { ...values, key: newKey }];
    setDataSource(newData);
    setFilteredData(newData);
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleEdit = (values) => {
    const newData = dataSource.map((item) =>
      item.key === editingKey ? { ...item, ...values } : item
    );
    setDataSource(newData);
    setFilteredData(newData);
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

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
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
            onClick={() => showEditModal(record)}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this category?"
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
        <h2>Manage Categories</h2>
        <Space style={{ marginBottom: "16px" }}>
          <Input.Search
            placeholder="Search categories"
            onSearch={handleSearch}
            style={{ width: 200 }}
          />
          <Button type="primary" icon={<PlusOutlined />} onClick={showAddModal}>
            Add Category
          </Button>
        </Space>
        <Table
          dataSource={filteredData}
          columns={columns}
          pagination={{ pageSize: 5 }}
        />
      </div>
      <Modal
        title={isEdit ? "Edit Category" : "Add New Category"}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form form={form} onFinish={isEdit ? handleEdit : handleAdd}>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              { required: true, message: "Please input the category name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[
              {
                required: true,
                message: "Please input the category description!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {isEdit ? "Save Changes" : "Add"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </AdminLayout>
  );
};

export default ManageCategories;
