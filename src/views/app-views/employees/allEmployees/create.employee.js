import {
  MinusCircleOutlined,
  MoneyCollectOutlined,
  PhoneOutlined,
  PlusCircleOutlined,
  PlusOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Modal, Row, Select, Upload } from "antd";
import { useEmployeeCreate } from "queries/employee.query";
import React, { useRef } from "react";
import { useState } from "react";
import '../../../../style/app-views.css';
const CreateEmployee = ({ open, onCancel }) => {
  const { mutate, isLoading } = useEmployeeCreate();
  const [photo, setPhoto] = useState(null);
  const formRef = useRef(null);
  const initialEmployee = useState({
    name: "",
    lastname: "",
    photo: "",
    position: "",
    phone: "",
    gender: "",
    salary: "",
  });
  const onCreate = (values) => {
    const formData = new FormData();
    formData.append("photo", photo);
    formData.append("name", values.name);
    formData.append("lastname", values.lastname);
    formData.append("position", values.position);
    formData.append("phone", values.phone);
    formData.append("gender", values.gender);
    formData.append("salary", values.salary);
    console.log(formData);
    mutate(formData, {
      onSuccess: () => {
        formRef.current.resetFields();
        setPhoto(null);
        onCancel();
      },
    });
  };
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const handleModalCancel = () => {
    formRef.current.resetFields();
    onCancel();
  };
  return (
    <Modal
    open={open}
    title="کارمندان"
    onCancel={handleModalCancel}
    width={600}
    footer={null}
    className="modalBodyStyle"
    
  >
      <Form
        
        ref={formRef}
        layout="vertical"
        name="login-form"
        initialValues={initialEmployee}
        onFinish={onCreate}
      >
        <div className="formStyle">
          <Form.Item
            style={{ flex: 1, marginRight: "0" }}
            name="name"
            label="نام"
            rules={[
              {
                required: true,
                message: "نام ضروری است",
              },
            ]}
          >
            <Input prefix={<UserAddOutlined className="text-primary" />} />
          </Form.Item>
          <Form.Item
            style={{ flex: 1, marginRight: "16px" }}
            name="lastname"
            label="تخلص"
            rules={[
              {
                required: true,
                message: " تخلص ضروری است",
              },
            ]}
          >
            <Input prefix={<UserAddOutlined className="text-primary" />} />
          </Form.Item>
        </div>
        <div className="formStyle">
          <Form.Item
            style={{ flex: 1, marginRight: "0" }}
            label="رتبه"
            name="position"
            rules={[
              {
                required: true,
                message: "لطفا یکی از گرینه را انتخاب نمایید",
              },
            ]}
          >
            <Select>
              <Select.Option value="seller">🛒 فروشنده</Select.Option>
              <Select.Option value="manager">👩‍💼 مدیر</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            style={{ flex: 1, marginRight: "16px" }}
            name="phone"
            label="شماره تماس"
            rules={[
              {
                required: true,
                message: "شماره تماس ضروری است",
              },
              {
                pattern: /^[0-9]*$/,
                message: "لطفا اعداد را وارد نمایید",
              },
            ]}
          >
            <Input prefix={<PhoneOutlined className="text-primary" />} />
          </Form.Item>
        </div>
        <div className="formStyle">
          <Form.Item
            style={{ flex: 1, marginRight: "0" }}
            label="جنسیت"
            name="gender"
            rules={[
              {
                required: true,
                message: "لطفا یکی از گرینه را انتخاب نمایید",
              },
            ]}
          >
            <Select>
              <Select.Option value="male">♂️ مرد</Select.Option>
              <Select.Option value="female"> ♀️ زن</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            style={{ flex: 1, marginRight: "16px" }}
            name="salary"
            label="معاش"
            rules={[
              {
                required: true,
                message: "معاش ضروری است",
              },
              {
                pattern: /^[0-9]*$/,
                message: "لطفا اعداد را وارد نمایید",
              },
            ]}
          >
            <Input prefix={<MoneyCollectOutlined className="text-primary" />} />
          </Form.Item>
        </div>
        <Form.Item
          label="عکس"
          name="photo"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[
            {
              required: true,
              message: "عکس ضروری است",
            },
          ]}
        >
          <Upload
            onChange={(e) => {
              if (e.fileList.length > 0) {
                setPhoto(e.fileList[0].originFileObj);
              } else {
                setPhoto(null);
              }
            }}
            placeholder="Photo"
            listType="picture-card"
          >
            {photo ? (
              <img
                src={URL.createObjectURL(photo)}
                alt="Selected"
                style={{ width: "100%" }}
              />
            ) : (
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            )}
          </Upload>
        </Form.Item>
        <Row>
          <Form.Item className="formFooter">
            <Button type="primary" htmlType="submit" loading={isLoading}>
              ثبت کردن
              <PlusCircleOutlined />
            </Button>
            <Button
              type="primary"
              danger
              onClick={handleModalCancel}
              style={{marginRight:'10px'}}
            >
              لغو کردن
              <MinusCircleOutlined />
            </Button>
          </Form.Item>
        </Row>
      </Form>
    </Modal>
  );
};

export default CreateEmployee;
