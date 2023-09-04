import { Col } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const ResponsiveCol = ({ children }) => {
  const navCollapsed = useSelector((state) => state.theme.navCollapsed);
  const isMobile = window.innerWidth <= 576;
  const marginRight = isMobile ? "0" : navCollapsed ? "75px" : "250px";

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
    <Col
      flex={!navCollapsed ? "auto" : "1 1 auto"}
      style={colStyle}
      xs={responsiveColStyle}
    >
      {children}
    </Col>
  );
};

export default ResponsiveCol;
