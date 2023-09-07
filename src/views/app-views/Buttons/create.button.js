import { PlusOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import React from "react";

function CreateButton({ onClick }) {
  return (
    <Tooltip title="اضافه کردن کارمندان">
      <Button
        type="primary"
        onClick={onClick}
        shape="circle"
        style={{ fontSize: "15px", boxShadow: "0 0 5px black" }}
      >
        <PlusOutlined />
      </Button>
    </Tooltip>
  );
}

export default CreateButton;
