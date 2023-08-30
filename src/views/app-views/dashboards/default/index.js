import { Card, Col, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const DefaultDashboard = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navCollapsed = useSelector((state) => state.theme.navCollapsed);
  const isMobile = window.innerWidth <= 576;
  const marginRight = isMobile ? 0 : navCollapsed ? "75px" : "250px";
  const colStyle = {
    marginRight,
    height: "100vh",
    paddingLeft: 0,
  };

  const responsiveColStyle = {
    width: "100%",
    height: "auto",
    paddingLeft: 0,
  };
  return (
    <Row>
      <Col
        flex={!navCollapsed ? "auto" : "1 1 auto"}
        style={colStyle}
        xs={responsiveColStyle}
      >
        <Card>
          <h2>  داشبورد </h2>
        </Card>
      </Col>
    </Row>
  );
};

export default DefaultDashboard;
