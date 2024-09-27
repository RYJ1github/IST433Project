import './index.scss';
import { Card, Form, Input, Button } from 'antd';

const Login = () => {
  return (
    <div className="w"> 
      <div className="header">
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
        </div>
      </div>
      <div className='main'>
        <div className="login">
          <Card className="login-container">
            {/* 登录表单 */}
            <Form>
              <Form.Item>
                <Input size="large" placeholder="Username" />
              </Form.Item>
              <Form.Item>
                <Input size="large" type="password" placeholder="Password" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" size="large" block>
                  Login
                </Button>
                <Button type="link" size="large" block>
                  Register if you are new
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
      <div className='footer'>
        <div className="footer-links">
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
