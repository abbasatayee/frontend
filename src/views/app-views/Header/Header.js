import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Row, Tooltip } from "antd";
import React from "react";
import CreateEmployee from "../employees/allEmployees/create.employee";
import DeleteEmployee from "../employees/allEmployees/delete.employee";
import { useState } from "react";
import Search from "antd/es/input/Search";

function Header() {
  const [open, setOpen] = useState(false);
  const openCreateEmployee = () => {
    setOpen(true);
  };
  const onSearch = (value) => {
    console.log(value);
  };
  return (
    <Row justify="end" className="HeaderCard">
      <Col span="6">
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
        />
      </Col>
      <Col span="6"></Col>
      <Col span="6"></Col>
      <Col span="1"></Col>
      <Col span="5">
        <Tooltip title="اضافه کردن کارمندان">
          <Button
            type="primary"
            onClick={openCreateEmployee}
            shape="circle"
            style={{ fontSize: "15px", boxShadow: "0 0 5px black" }}
          >
            <PlusOutlined />
          </Button>
        </Tooltip>
          <CreateEmployee open={open} onCancel={() => setOpen(false)} />
        <Tooltip title="حذف کردن کارمندان">
          <Button
            type="primary"
            danger
            shape="circle"
            style={{
              marginRight: "10px",
              fontSize: "15px",
              boxShadow: "0 0 5px black",
            }}
          >
            <DeleteOutlined />
          </Button>
        </Tooltip>
          <DeleteEmployee />
      </Col>
    </Row>
  );
}

export default Header;
