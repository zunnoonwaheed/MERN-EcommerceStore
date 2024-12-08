import React, { useState } from 'react';
import { Table, Button, Space, Input } from 'antd';
import { SearchOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const Products = () => {
  const [searchText, setSearchText] = useState('');

  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'name',
      key: 'name',
      filteredValue: [searchText],
      onFilter: (value, record) =>
        record.name.toLowerCase().includes(value.toLowerCase()),
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
      key: 'stock',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button icon={<EditOutlined />} />
          <Button danger icon={<DeleteOutlined />} />
        </Space>
      ),
    },
  ];

  const dummyData = [
    {
      key: '1',
      name: 'Product 1',
      category: 'Category A',
      price: '$99.99',
      stock: 100,
    },
    // Add more dummy data as needed
  ];

  return (
    <div>
      <div className="flex justify-between mb-4">
        <Input
          placeholder="Search products"
          prefix={<SearchOutlined />}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ width: 200 }}
        />
        <Button type="primary">Add Product</Button>
      </div>
      <Table columns={columns} dataSource={dummyData} />
    </div>
  );
};

export default Products;

