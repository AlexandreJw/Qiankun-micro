import './Sidebar.css';
import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { useState } from 'react';
const { SubMenu } = Menu;
function Sidebar() {
  const [theme] = useState('dark')
  const [current, setCurrent] = useState('1')
  const handleClick = e => {
    setCurrent(e.key)
    if (e.key === '1') {
      /* eslint-disable */
      history.pushState(null, '', '/subapp/sub-vue')
    }
    if (e.key === '2') {
      //  /* eslint-disable */
      history.pushState(null, '', '/subapp/sub-vue/about')
    }
    if (e.key === '3') {
      //  /* eslint-disable */
      history.pushState(null, '', '/subapp/sub-fast')
    }
    if (e.key === '4') {
      //  /* eslint-disable */
      history.pushState(null, '', '/subapp/sub-fast/about')
    }
  };
  return (
    <div className="sildebar">
      <Menu
        theme={theme}
        onClick={handleClick}
        style={{ width: 256 }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
      >
        <SubMenu key="sub1" icon={<MailOutlined />} title="vue">
          <Menu.Item key="1">home</Menu.Item>
          <Menu.Item key="2">about</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<MailOutlined />} title="fast">
          <Menu.Item key="3">home</Menu.Item>
          <Menu.Item key="4">about</Menu.Item>
        </SubMenu>
        {/* <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<MailOutlined />} title="Navigation Two">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu> */}
      </Menu>
      </div>
  );
}

export default Sidebar
