import React, { useState } from "react";
import { Row, Table, Avatar, Col } from "antd";
import IntlMessage from "components/util-components/IntlMessage";
import { useGetEmployeesData } from "queries/employee.query";
import CustomPagination from "views/app-views/pagination/customPagination";
import "../../../../style/app-views.css";
import ResponsiveCol from "views/app-views/styleJs/ResponsiveCol";
import Header from "views/app-views/Header/Header";
const setLocale = (localeKey, isLocaleOn = true) =>
  isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();

const columns = [
  {
    title: <h4>{setLocale("table.id")}</h4>,
    dataIndex: "id",
  },
  {
    title: <h4>{setLocale("table.photo")}</h4>,
    dataIndex: "photo",
    render: (text, record) => {
      return <Avatar src={`http://localhost:8000/${record.photo}`} size={64} />;
    },
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
    <Row>
      <Col lg={24} md={24} xs={24} sm={24}>
        <ResponsiveCol>
          <Header></Header>
          <div style={{ overflowX: "auto" }}>
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={data.data}
              rowKey="id"
              pagination={false}
            />
            <CustomPagination
              pageSize={pagination.pageSize}
              onPageSizeChange={onPageSizeChange}
              current={pagination.current}
              onPageChange={onPageChange}
              total={data.total}
            />
          </div>
        </ResponsiveCol>
      </Col>
    </Row>
  );
};

export default Index;
