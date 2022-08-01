import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  import { Breadcrumb, Layout, Menu } from 'antd';
  import React, { useState } from 'react';
  import {MainMenu} from '../components/menu'
  
  const { Header, Content, Footer, Sider } = Layout;
  

  
export const HomePageLayout = () => {
    return (
            <MainMenu/>
    );
};
  
  export default HomePageLayout;