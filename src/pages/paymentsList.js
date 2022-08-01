import React, { useContext } from "react";
import { Button, Checkbox, Form, Input, Card, Col, Row } from 'antd';
import { UserOutlined, LockOutlined, SyncOutlined } from '@ant-design/icons';
import logotypePreviewUrl from './logotypePreview.svg';
import { useRouterStore } from 'mobx-state-router';
import { Descriptions, PageHeader, Statistic, Tag, Table, Space } from 'antd';
import { Divider } from 'antd';
import { useCookies } from 'react-cookie';

import {MainMenu} from '../components/menu'

import { TransactionContext, connectWallet } from "../contexts/TransactionContext";

export const  PaymentsList = () => {

  const columns = [
    {
      title: 'ID',
      dataIndex: '_id',
      key: '_id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Статус',
      dataIndex: '_status',
      key: '_status',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag === "ERROR" ? 'red' : 'green';
  
          
  
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Сумма (USDT)',
      dataIndex: '_amount',
      key: '_amount',
    },
    {
      title: 'Дата создания',
      key: '_date',
      dataIndex: '_date',

    },

  ];
  const data = [
    {
      key: '1',
      _status: 'Получено',
      _amount: 32.44,
      _id: 1,
      _date: "01.08.2022, 03:32:25",
      tags: ['OK'],
    },
    {
      key: '2',
      _status: 'Получено',
      _amount: 42.56,
      _id: 2,
      _date: "01.07.2022, 09:00:25",
      tags: ['OK'],
    },
    {
      key: '3',
      _status: 'Отказ',
      _amount: 320,
      _id: 3,
      _date: "01.01.2022, 19:20:25",
      tags: ['ERROR'],
    },
  ];



  const { connectWallet, currentAccount } = useContext(TransactionContext);
  const [cookies, setCookie] = useCookies(['initWallet']);

    var time = new Date();

    
    const NavigationTab = [
        {
          key: 'LoginView',
          tab: 'Пополнение счета',
        }
      ];
    

    const _address = "0xb4e7b7ce0fc98a593df03f37fdc5bd1629ea916b7140e48ff9fcfd52f6157817"
  
  return (
    <Row type="flex" justify="center" align="middle" style={{minHeight: '80vh'}}>
      
    <Col>
    <img src={logotypePreviewUrl} style={{ 
      maxHeight: '16vh', 
      height: "auto", 
      margin: "24px 24px 24px 64px"}} ></img>
    
    <Card size="small" tabList={NavigationTab}  style={{
    width: 128*4,
    borderRadius: "8px",
    overflow: "hidden",
    height: "64vh", 
  }}>
    

      <Row>


        <Descriptions size="small" column={1}   style={{
            margin: "8px 8px 8px 12px",
          }}>
        <Descriptions.Item label="Cтатус"><Tag icon={<SyncOutlined spin />} color="processing">
        Ожидание
      </Tag></Descriptions.Item>
      {cookies.address ? <Descriptions.Item label="Адрес"><a>{cookies.address}</a></Descriptions.Item> :<Descriptions.Item label="Адрес"><a>...</a></Descriptions.Item> }
          
          <Descriptions.Item label="Время">{time.toLocaleString()}</Descriptions.Item>
        </Descriptions>
        <Divider></Divider>
        <Table columns={columns} dataSource={data} />
        <Divider></Divider>
        {!currentAccount ? <Button type="primary" htmlType="submit" block onClick={connectWallet}>
          Подключить
        </Button> : <Button type="primary" htmlType="submit" block onClick={connectWallet}>
          Подключить
        </Button>}


      </Row>





        </Card>
    </Col>
    </Row>

  );
}
  export default PaymentsList;

  