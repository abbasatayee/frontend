import React from "react";
import { useGetUserData } from "queries/user.query";
import { Col, Row } from "antd";
import { useSelector } from "react-redux";

const Index = () => {
  const navCollapsed = useSelector((state) => state.theme.navCollapsed);
  const { data, isLoading, isError } = useGetUserData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading users</div>;
  }
  const colStyle = {
    marginRight: navCollapsed ? "75px" : "250px",
  };
  return (
    <div>
      <Row>
        <Col flex={!navCollapsed ? "auto" : "1 1 auto"} style={colStyle}>
            <h2>Employees Attendance</h2>
          <div>
              {data.map((user) => (
                <h4 key={user.id}>{user.name}</h4>
              ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Index;
