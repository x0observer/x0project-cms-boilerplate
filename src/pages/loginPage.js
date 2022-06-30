import { Button, Checkbox, Form, Input, Card, Col, Row } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import logotypePreviewUrl from './logotypePreview.svg';
import { useRouterStore } from 'mobx-state-router';


export const LoginPage = () => {
  const routerStore = useRouterStore();
  

  const onFinish = (values) => {
    /* TODO: AUTH */
    routerStore.goTo('paymentsList');
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  const NavigationTab = [
    {
      key: 'LoginView',
      tab: 'Вход',
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
    overflow: "hidden"
  }}>
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        
        name="username"
        rules={[
          {
            required: true,
            message: 'Введите ваш ключ!'
          },
        ]}
      >
        <Input 
        placeholder="Ключ"
        prefix={<UserOutlined className="site-form-item-icon" />} />
      </Form.Item>

      <Form.Item
        
        name="password"
        rules={[
          {
            required: true,
            message: 'Введите ваш пароль!'
          },
        ]}
      >
        <Input.Password 
        placeholder="Пароль" 
        prefix={<LockOutlined className="site-form-item-icon" />} />
      </Form.Item>

      <Form.Item>
      <Button type="primary" htmlType="submit" block>
          Войти
        </Button>
        Или зарегистрируйтесь <a href="">в нашем сервисе!</a>
        </Form.Item>
    </Form>
    </Card>
    </Col>
    </Row>
  );
};

export default LoginPage;