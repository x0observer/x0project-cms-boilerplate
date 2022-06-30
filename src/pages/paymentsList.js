import { Button, Checkbox, Form, Input, Card, Col, Row } from 'antd';
import { UserOutlined, LockOutlined, SyncOutlined } from '@ant-design/icons';
import logotypePreviewUrl from './logotypePreview.svg';
import { useRouterStore } from 'mobx-state-router';
import { Descriptions, PageHeader, Statistic, Tag } from 'antd';
import { Divider } from 'antd';
  
export const  PaymentsList = () => {
    var time = new Date()

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
          <Descriptions.Item label="Адрес"><a>{_address.slice(0,16).concat('...')}</a></Descriptions.Item>
          <Descriptions.Item label="Время">{time.toLocaleString()}</Descriptions.Item>
        </Descriptions>
        <Divider></Divider>
        <a color='gray'> Информация о текущем переводе... </a>
        <Divider></Divider>
        <Button type="primary" htmlType="submit" block>
          Пополнить 
        </Button>



      </Row>





        </Card>
    </Col>
    </Row>

  );
}
  export default PaymentsList;