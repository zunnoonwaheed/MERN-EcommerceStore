import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  DashboardOutlined,
  ShoppingOutlined,
  UserOutlined,
  OrderedListOutlined,
  GiftOutlined,
  BarChartOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

// Admin Components
const Dashboard = React.lazy(() => import('./admin/Dashboard'));
const Products = React.lazy(() => import('./admin/Products'));
const Orders = React.lazy(() => import('./admin/Orders'));
const Customers = React.lazy(() => import('./admin/Customers'));
const Discounts = React.lazy(() => import('./admin/Discounts'));
const Reports = React.lazy(() => import('./admin/Reports'));

const AdminPanel = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={200} theme="dark">
        <div className="logo p-4 text-white text-xl font-bold">Admin Panel</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['dashboard']}>
          <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
            <Link to="/admin">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="products" icon={<ShoppingOutlined />}>
            <Link to="/admin/products">Products</Link>
          </Menu.Item>
          <Menu.Item key="orders" icon={<OrderedListOutlined />}>
            <Link to="/admin/orders">Orders</Link>
          </Menu.Item>
          <Menu.Item key="customers" icon={<UserOutlined />}>
            <Link to="/admin/customers">Customers</Link>
          </Menu.Item>
          <Menu.Item key="discounts" icon={<GiftOutlined />}>
            <Link to="/admin/discounts">Discounts</Link>
          </Menu.Item>
          <Menu.Item key="reports" icon={<BarChartOutlined />}>
            <Link to="/admin/reports">Reports</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="bg-white p-0 px-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <span>Admin User</span>
            <button className="px-4 py-2 bg-red-500 text-white rounded">Logout</button>
          </div>
        </Header>
        <Content className="m-4 p-4 bg-white">
          <React.Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/discounts" element={<Discounts />} />
              <Route path="/reports" element={<Reports />} />
            </Routes>
          </React.Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminPanel;

