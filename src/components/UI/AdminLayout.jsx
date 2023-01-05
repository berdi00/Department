import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { PeopleAltOutlined } from "@mui/icons-material";
import "./AdminLayout.css";

const { Header, Sider, Content } = Layout;

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="text-light text-center m-2" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[location.pathname]}
          selectedKeys={[location.pathname]}
          onSelect={({ key }) => navigate(key)}
          items={[
            {
              key: "/admin/schedules",
              icon: <ScheduleOutlined />,
              label: "Schedules",
            },
            {
              key: "/admin/students",
              icon: <PeopleAltOutlined />,
              label: "Students",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger menuFold",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            height: "100%",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
