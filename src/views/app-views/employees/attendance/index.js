import React from "react";
import { useGetUserData } from "queries/user.query";
import { Card, Col, Row } from "antd";
import { useSelector } from "react-redux";

const Index = () => {
  const navCollapsed = useSelector((state) => state.theme.navCollapsed);
  const isMobile = window.innerWidth <= 576;
  const marginRight = isMobile ? "0" : navCollapsed ? "75px" : "250px";
  const { data, isLoading, isError } = useGetUserData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading users</div>;
  }
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
    <div>
      <Row>
        <Col
          flex={!navCollapsed ? "auto" : "1 1 auto"}
          style={colStyle}
          xs={responsiveColStyle}
        >
          <Card>
            <h2>Employees Attendance</h2>
          </Card>
          <Card>
            <div>
              {data.map((user) => (
                <h4 key={user.id}>{user.name}</h4>
              ))}
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Index;
