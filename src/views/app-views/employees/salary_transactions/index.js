import { Col, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navCollapsed = useSelector((state) => state.theme.navCollapsed);
  const colStyle = {
    marginRight: navCollapsed ? "75px" : "250px",
  };
  return (
    <Row>
      <Col flex={!navCollapsed ? "auto" : "1 1 auto"} style={colStyle}>
        <h2>Salary Transaction</h2>
      </Col>
    </Row>
  );
};

export default index;
