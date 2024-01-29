import React from "react";
import { ShoppingCartOutlined, HomeOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Router } from "../router/Router";
const { Header, Content, Sider } = Layout;
const items1 = [
  { key: "1", label: "Главная", icon: React.createElement(HomeOutlined) },
  {
    key: "2",
    label: "Корзина",
    icon: React.createElement(ShoppingCartOutlined),
  },
];

const items2 = [
  {
    key: "3",
    label: "Каталог",
    children: [
      { key: "4", label: "Свободный вес" },
      { key: "5", label: "Блочные" },
      { key: "6", label: "Стойки" },
    ],
  },
  {
    key: "7",
    label: "Доставка",
    children: [
      { key: "8", label: "Условия доставки" },
      { key: "9", label: "Оплата" },
    ],
  },
];
export const MyLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const onClick = (e) => {
    console.log("click ", e);
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
          defaultSelectedKeys={["2"]}
          items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Layout>
        <Sider
          collapsible
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            onClick={onClick}
            mode="inline"
            defaultSelectedKeys={["2"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Content
            style={{
              padding: 24,
              margin: "16px 0",
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Router />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
