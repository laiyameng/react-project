import React from "react";
import { Form, Input, Checkbox, Button } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import styles from "./index.module.less";

export default function Login() {
  const navigate = useNavigate();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

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
        alert("登录成功");
        navigate("/layouts");
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
      <div className={styles.box}>
        <div className={styles.box1}>
          <Form
            {...layout}
            name="login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input className={styles.input}/>
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked" {...tailLayout}>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
