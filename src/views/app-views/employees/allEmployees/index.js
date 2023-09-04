import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Card,
  Col,
  Row,
  Table,
  Pagination,
  Select,
  Avatar,
  Button,
} from "antd";
import IntlMessage from "components/util-components/IntlMessage";
import { useGetEmployeesData } from "queries/employee.query";
import CreateEmployee from "./create.employee";
import { PlusCircleTwoTone } from "@ant-design/icons";

const setLocale = (localeKey, isLocaleOn = true) =>
  isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();

const columns = [
  {
    title: <h4>{setLocale("table.id")}</h4>,
    dataIndex: "id",
  },
  {
    title: <h4>{setLocale("table.name")}</h4>,
    dataIndex: "name",
  },
  {
    title: <h4>{setLocale("table.lastname")}</h4>,
    dataIndex: "lastname",
  },
  {
    title: <h4>{setLocale("table.gender")}</h4>,
    dataIndex: "gender",
  },
  {
    title: <h4>{setLocale("table.phone")}</h4>,
    dataIndex: "phone",
  },
  {
    title: <h4>{setLocale("table.photo")}</h4>,
    dataIndex: "photo",
    render: (text, record) => {
      console.log("Image URL:", `http://localhost:8000/${record.photo}`);
      return <Avatar src={`http://localhost:8000/${record.photo}`} size={64} />;
    },
  },
  {
    title: <h4>{setLocale("table.position")}</h4>,
    dataIndex: "position",
  },
  {
    title: <h4>{setLocale("table.salary")}</h4>,
    dataIndex: "salary",
  },
];

const Index = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });
  const navCollapsed = useSelector((state) => state.theme.navCollapsed);
  const [open, setOpen] = useState(false);
  const openCreateEmployee = () => {
    setOpen(true);
  };
  const isMobile = window.innerWidth <= 576;
  const marginRight = isMobile ? "0" : navCollapsed ? "75px" : "250px";
  const { data, isLoading, isError } = useGetEmployeesData(
    pagination.current,
    pagination.pageSize
  );
  console.log("data list", data);
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

  const onSelectChange = (selectedKeys) => {
    setSelectedRowKeys(selectedKeys);
  };

  const onPageChange = (page, pageSize) => {
    setPagination({ current: page, pageSize });
  };

  const onPageSizeChange = (value) => {
    setPagination({ ...pagination, pageSize: value });
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
    ],
  };

  return (
    <div>
      <Row>
        <Col
          flex={!navCollapsed ? "auto" : "1 1 auto"}
          style={colStyle}
          xs={responsiveColStyle}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "end",
              marginTop: -55,
              marginBottom: 20,
            }}
          >
            <Row>
              <Button type="primary" style={{ borderRadius: 50 }} onClick={openCreateEmployee} >
                اضافه کردن کارمندان
                <PlusCircleTwoTone />
              </Button>
              <CreateEmployee open={open} onCancel={()=>setOpen(false)} />
            </Row>
          </div>

          <Card>
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={data.data}
              rowKey="id"
              pagination={false}
            />
          </Card>
          <div
            style={{ marginTop: "16px", display: "flex", alignItems: "center" }}
          >
            <Select
              value={pagination.pageSize}
              onChange={onPageSizeChange}
              style={{ width: 80, marginRight: "8px" }}
            >
              <Select.Option value={5}>5</Select.Option>
              <Select.Option value={10}>10</Select.Option>
              <Select.Option value={20}>20</Select.Option>
              <Select.Option value={30}>30</Select.Option>
              <Select.Option value={50}>50</Select.Option>
            </Select>
            <Pagination
              current={pagination.current}
              pageSize={pagination.pageSize}
              total={data.total}
              onChange={onPageChange}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Index;
