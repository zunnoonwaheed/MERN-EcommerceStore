import React from 'react';
import { Card, Row, Col, Table, DatePicker } from 'antd';
import { Area } from '@ant-design/plots';

const Reports = () => {
  const salesData = [
    { date: '2023-01', sales: 3000 },
    { date: '2023-02', sales: 3500 },
    { date: '2023-03', sales: 4000 },
    { date: '2023-04', sales: 4500 },
    { date: '2023-05', sales: 5000 },
    { date: '2023-06', sales: 5500 },
  ];

  const config = {
    data: salesData,
    xField: 'date',
    yField: 'sales',
    smooth: true,
  };

  return (
    <div>
      <Row gutter={16} className="mb-4">
        <Col span={24}>
          <Card title="Sales Overview">
            <Area {...config} />
          </Card>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <Card title="Top Products">
            <Table
              columns={[
                { title: 'Product', dataIndex: 'product' },
                { title: 'Sales', dataIndex: 'sales' },
              ]}
              dataSource={[
                { key: '1', product: 'Product A', sales: 120 },
                { key: '2', product: 'Product B', sales: 100 },
              ]}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Customer Demographics">
            <Table
              columns={[
                { title: 'Region', dataIndex: 'region' },
                { title: 'Customers', dataIndex: 'customers' },
              ]}
              dataSource={[
                { key: '1', region: 'North', customers: 450 },
                { key: '2', region: 'South', customers: 380 },
              ]}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Reports;

