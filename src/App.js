import React from 'react';
import { Layout, Menu, Switch } from 'antd';
import './App.css';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import NavBar from './components/NavBar';

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

const App = () => (
  <div className="App">
    <Layout className="layout" style={{ padding: '0 15vw' }}>
      <Header>
        {/* <Switch
          checked={this.state.theme === "dark"}
          onChange={this.changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        /> */}
        <NavBar />
        {/* <div className="logo">
        </div>
        <Menu mode="horizontal">
          <Menu.Item key="mail" icon={<MailOutlined />}>
            Navigation One
        </Menu.Item>
          <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
            Navigation Two
        </Menu.Item>
          <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="alipay">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
              Navigation Four - Link
          </a>
          </Menu.Item>
        </Menu> */}
      </Header>
      <Content>
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div className="site-layout-content">Content</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>ritik batra © 2020</Footer>
    </Layout>
  </div>
);

export default App;