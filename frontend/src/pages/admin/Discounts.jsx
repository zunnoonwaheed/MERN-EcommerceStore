import React from 'react';
import { Table, Button, Tag, Space } from 'antd';

const Discounts = () => {
  const columns = [
    {
      title: 'Code',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'active' ? 'green' : 'red'}>
          {status.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'Expiry',
      dataIndex: 'expiry',
      key: 'expiry',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button>Edit</Button>
          <Button danger>Delete</Button>
        </Space>
      ),
    },
  ];

  const dummyData = [
    {
      key: '1',
      code: 'SUMMER2023',
      type: 'Percentage',
      value: '20%',
      status: 'active',
      expiry: '2023-12-31',
    },
    // Add more dummy data as needed
  ];

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold">Discount Management</h2>
        <Button type="primary">Create New Discount</Button>
      </div>
      <Table columns={columns} dataSource={dummyData} />
    </div>
  );
};

export default Discounts;

