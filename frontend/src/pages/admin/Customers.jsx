import React from 'react';
import { Table, Button, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Customers = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Orders',
      dataIndex: 'orders',
      key: 'orders',
    },
    {
      title: 'Total Spent',
      dataIndex: 'totalSpent',
      key: 'totalSpent',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button>View Details</Button>
          <Button>Contact</Button>
        </Space>
      ),
    },
  ];

  const dummyData = [
    {
      key: '1',
      name: 'John Doe',
      email: 'john@example.com',
      orders: 5,
      totalSpent: '$599.99',
    },
    // Add more dummy data as needed
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Customer Management</h2>
      <Table columns={columns} dataSource={dummyData} />
    </div>
  );
};

export default Customers;

