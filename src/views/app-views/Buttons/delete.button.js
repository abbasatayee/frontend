import { DeleteOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import React from "react";

function DeleteButton({ onClick }) {
  return (
    <Tooltip title="حذف کردن کارمندان">
      <Button
        onClick={onClick}
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
  );
}

export default DeleteButton;
