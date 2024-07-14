import { useState } from "react";
import { Table, Button, Space, Popconfirm, Input, Modal, Form } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import AdminLayout from "../../layout/admin/AdminLayout";

const ManageCollections = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      name: "Collection 1",
      description: "Description 1",
    },
    {
      key: "2",
      name: "Collection 2",
      description: "Description 2",
    },
    {
      key: "3",
      name: "Collection 3",
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
            title="Are you sure to delete this collection?"
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
        <h2>Manage Collections</h2>
        <Space style={{ marginBottom: "16px" }}>
          <Input.Search
            placeholder="Search collections"
            onSearch={handleSearch}
            style={{ width: 200 }}
          />
          <Button type="primary" icon={<PlusOutlined />} onClick={showAddModal}>
            Add Collection
          </Button>
        </Space>
        <Table
          dataSource={filteredData}
          columns={columns}
          pagination={{ pageSize: 5 }}
        />
      </div>
      <Modal
        title={editingKey ? "Edit Collection" : "Add New Collection"}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form form={form} onFinish={handleAddOrEdit}>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              { required: true, message: "Please input the collection name!" },
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
                message: "Please input the collection description!",
              },
            ]}
          >
            <Input />
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

export default ManageCollections;
