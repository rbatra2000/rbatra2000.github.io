import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../index.css';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class NavBar extends React.Component {
  state = {
    current: '',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} theme="dark" selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="about" icon={<MailOutlined />}>
          about
        </Menu.Item>
        <Menu.Item key="experience" icon={<MailOutlined />}>
          experience
        </Menu.Item>
        <Menu.Item key="projects" icon={<MailOutlined />}>
          projects
        </Menu.Item>
        <Menu.Item key="mail" icon={<MailOutlined />}>
          projects
        </Menu.Item>
      </Menu>
    );
  }
}

export default NavBar;