import React from "react";
import { useGetUserData } from "queries/user.query";
import { Card, Col, Dropdown, Row, Space } from "antd";
import { useSelector } from "react-redux";
import { DownOutlined } from "@ant-design/icons";

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
  const items = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];
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
            <h2>حاضری کارمندان</h2>
          </Card>
          <Card>
            <div>
              {data.map((user) => (
                <h4 key={user.id}>{user.name}</h4>
              ))}
            </div>
          </Card>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Click me
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Col>
      </Row>
    </div>
  );
};

export default Index;
