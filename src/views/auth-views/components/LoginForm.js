import React from "react";
import { connect } from "react-redux";
import { Button, Form, Input } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import {
  signIn,
  showLoading,
  showAuthMessage,
  hideAuthMessage,
} from "store/slices/authSlice";
import { useState } from "react";
import { useLoginUsers } from "queries/auth.query";
import { useAuthStore } from "configs/auth.store";

export const LoginForm = (props) => {
  const { showLoading, signIn } = props;

  const initialCredential = useState({
    email: "",
    password: "",
  });
  const { login } = useAuthStore();
  const { mutate, isLoading } = useLoginUsers();
  const onLogin = async (values) => {
    showLoading();
    mutate(values, {
      onSuccess: (data) => {
        const { token, user } = data;
        login({ isLoggedIn: true, token, user });
        signIn(values);
      },
    });
  };

  return (
    <>
      <Form
        layout="vertical"
        name="login-form"
        initialValues={initialCredential}
        onFinish={onLogin}
      >
        <Form.Item
          name="email"
          label="ایمیل"
          rules={[
            {
              required: true,
              message: "لطفا ایمیل خود را وارد کنید",
            },
            {
              type: "email",
              message: "لطفاً یک ایمیل تأیید اعتبار وارد کنید!",
            },
          ]}
        >
          <Input prefix={<MailOutlined className="text-primary" />} />
        </Form.Item>
        <Form.Item
          name="password"
          label={<span>رمز عبور</span>}
          rules={[
            {
              required: true,
              message: "لطفا رمز عبور خود را وارد کنید",
            },
          ]}
        >
          <Input.Password prefix={<LockOutlined className="text-primary" />} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={isLoading}>
		  ورود
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
LoginForm.propTypes = {
  extra: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
const mapStateToProps = ({ auth }) => {
  const { loading, message, showMessage, token, redirect } = auth;
  return { loading, message, showMessage, token, redirect };
};
const mapDispatchToProps = {
  signIn,
  showAuthMessage,
  showLoading,
  hideAuthMessage,
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
