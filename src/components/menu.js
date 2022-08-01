import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    AppstoreOutlined,
    DollarCircleOutlined,
    CreditCardOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import {useRouterStore} from "mobx-state-router";
import logotypeSmall from './logotypeSmall.svg';
const { Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}




export const MainMenu = () => {
    const items = [
        {key: '1', icon: <PieChartOutlined />, children: undefined, label: "Статистика", onClick: () => {routerStore.goTo('paymentsList')}},
        {key: '2', icon: <CreditCardOutlined />, children: undefined, label: "Карты", onClick: () => {routerStore.goTo('paymentsList')}},
        {key: '3', icon: <DollarCircleOutlined />, children: undefined, label: "Пополнение", onClick: () => {routerStore.goTo('paymentsList')}},
        {key: '4', icon: <AppstoreOutlined />, children: undefined, label: "Заявки", onClick: () => {routerStore.goTo('paymentsList')}},
        {key: '5', icon: <LogoutOutlined />, children: undefined, label: "Выход", onClick: () => {routerStore.goTo('paymentsList')}}
    ]

    

    const routerStore = useRouterStore();
    const [collapsed, setCollapsed] = useState(false);
    
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider theme='light' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                
                <img style={{shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.12,
            shadowRadius: 60,}} className="logotype-small" src={logotypeSmall} alt={'...'}/>
                <Menu defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
        </Layout>
    );
};
