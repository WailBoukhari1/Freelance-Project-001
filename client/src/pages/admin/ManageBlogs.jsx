import { useState } from "react";
import { Table, Button, Space, Popconfirm, Input, Modal, Form } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import AdminLayout from "../../layout/admin/AdminLayout";

const ManageBlogs = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      title: "Blog Post 1",
      author: "Author 1",
      date: "2024-07-01",
    },
    {
      key: "2",
      title: "Blog Post 2",
      author: "Author 2",
      date: "2024-07-02",
    },
    {
      key: "3",
      title: "Blog Post 3",
      author: "Author 3",
      date: "2024-07-03",
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
    const newData = [
      ...dataSource,
      { ...values, key: newKey, date: new Date().toISOString().split("T")[0] },
    ];
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
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
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
            title="Are you sure to delete this blog?"
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
        <h2>Manage Blogs</h2>
        <Space style={{ marginBottom: "16px" }}>
          <Input.Search
            placeholder="Search blogs"
            onSearch={handleSearch}
            style={{ width: 200 }}
          />
          <Button type="primary" icon={<PlusOutlined />} onClick={showAddModal}>
            Add Blog
          </Button>
        </Space>
        <Table
          dataSource={filteredData}
          columns={columns}
          pagination={{ pageSize: 5 }}
        />
      </div>
      <Modal
        title={isEdit ? "Edit Blog" : "Add New Blog"}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form form={form} onFinish={isEdit ? handleEdit : handleAdd}>
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Please input the title!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="author"
            label="Author"
            rules={[{ required: true, message: "Please input the author!" }]}
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

export default ManageBlogs;
