import React from "react";
import { HomeOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Router } from "../router/Router";
import { useNavigate } from "react-router-dom";
const { Header, Content } = Layout;
const items1 = [
  { key: "/", label: "Главная", icon: React.createElement(HomeOutlined) },
  {
    key: "/equipment",
    label: "Тренажеры",
  },
  {
    key: "/delivery",
    label: "Доставка и оплата",
  },
  {
    key: "/card",
    label: "Корзина",
  },
];

export const MyLayout = () => {
  const naviagate = useNavigate();

  const onClick = ({ key }) => {
    naviagate(key);
  };
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          onClick={onClick}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys="/"
          items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Layout>
        <Layout>
          <Content>
            <Router />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
