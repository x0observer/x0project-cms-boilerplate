import React, { useContext } from "react";
import { Button, Card, Col, Row } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import logotypePreviewUrl from './logotypePreview.svg';
import { Descriptions, Tag } from 'antd';
import { Divider } from 'antd';
import { useCookies } from 'react-cookie';


import { WalletContext, WalletProvider } from "../contexts/WalletContext";

export const  PaymentsListUpdated = () => {

    //const state = useContext(WalletContext)

    var time = new Date();

    
    const NavigationTab = [
        {
          key: 'LoginView',
          tab: 'Пополнение счета',
        }
      ];

  
  return (
    <Row type="flex" justify="center" align="middle" style={{minHeight: '80vh'}}>
    <Col>
    <img src={logotypePreviewUrl} style={{ 
      maxHeight: '16vh', 
      height: "auto", 
      margin: "24px 24px 24px 64px"}} ></img>
    
    <Card size="small" tabList={NavigationTab}  style={{
    width: 128*2+64,
    borderRadius: "8px",
    overflow: "hidden",
    height: "48vh", 
  }}>
    

      <Row>


        <Descriptions size="small" column={1}   style={{
            margin: "8px 8px 8px 12px",
          }}>
        <Descriptions.Item label="Cтатус"><Tag icon={<SyncOutlined spin />} color="processing">
        Ожидание
      </Tag></Descriptions.Item>
      {true ? <Descriptions.Item label="Адрес"><a>{"0x..."}</a></Descriptions.Item> :<Descriptions.Item label="Адрес"><a>...</a></Descriptions.Item> }
          
          <Descriptions.Item label="Время">{time.toLocaleString()}</Descriptions.Item>
        </Descriptions>
        <Divider></Divider>
        <a color='gray'> Информация о текущем переводе... </a>
        <Divider></Divider>
      </Row>
        </Card>
    </Col>
    </Row>

  );
}
  export default PaymentsListUpdated;

  