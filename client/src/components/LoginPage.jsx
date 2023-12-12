
import { Button, Checkbox, Form, Input , message } from 'antd';
import { Link } from 'react-router-dom';


const LoginPage = () => {
  
  return (
    <div className="form-login" style={{marginTop : 80}}>
    
    <Form
      name="basic"
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 24,
      }}
      style={{maxWidth: 500,margin : "0 auto", padding : 20 , boxShadow : "0px 0px 5px 2px rgba(0, 0, 0, 0.2)" , borderRadius : 5}}
      initialValues={{
        remember: true,
      }}
      // onFinish={onFinish}
      autoComplete="off"
    >
     <h1>Login</h1>
      <Form.Item
        label="Email"
        name="username"
        rules={[
          {
            required: true,
            message: 'Chưa nhập tên cái dmm',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Nhập mk dm',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 0,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 0,
          span: 12,
        }}
      >
        <Button type="primary" htmlType="submit" >
          Submit
        </Button>
      </Form.Item>
      <hr />
      <span>Chưa có tài khoản ? <Link to={"/register"}>Đăng ký</Link>  </span>
    </Form>
  </div>
  )
}
 
  




export default LoginPage;