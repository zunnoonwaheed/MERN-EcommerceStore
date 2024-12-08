import React from 'react';
import { Table, Tag, Space } from 'antd';

const Orders = () => {
  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Customer',
      dataIndex: 'customer',
      key: 'customer',
    },
    {
      title: 'Products',
      dataIndex: 'products',
      key: 'products',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={
          status === 'completed' ? 'green' :
          status === 'pending' ? 'gold' :
          'red'
        }>
          {status.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <a>View</a>
          <a>Update</a>
        </Space>
      ),
    },
  ];

  const dummyData = [
    {
      key: '1',
      id: '#1234',
      customer: 'John Doe',
      products: '3 items',
      total: '$299.99',
      status: 'completed',
    },
    // Add more dummy data as needed
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Order Management</h2>
      <Table columns={columns} dataSource={dummyData} />
    </div>
  );
};

export default Orders;

