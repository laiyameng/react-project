import { Form, Input, Checkbox, Button } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from "axios";
import { useHistory } from "react-router-dom";

import styles from "./index.module.less";

export default function Login() {
  const history = useHistory();

  const onFinish = (values: any) => {
    axios
      .get(
        "https://www.fastmock.site/mock/c54ed8fb83f349b998b52d387df47356/react/user/login",
        {
          params: {
            username: values.username,
            password: values.password,
          },
        }
      )
      .then(function (response) {
        // if (response.data.code === 1) {
        //   alert(response.data.data.dispaly_name);
        // } else {
        //   alert(response.data.msg);
        history.push("/");
        // }
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className={styles.login}>
      <div className={styles['login-box']}>
        <div className={styles['login-box-main']}>
          <p className={styles['login-box-main-p']}>Sign in</p>
          <Form
            name="login"
            className={styles['login-form']}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked" >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className={styles['login-form-button']}>
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
