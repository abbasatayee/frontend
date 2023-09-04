import React, { useState } from "react";
import {
  Card,
  Row,
  Table,
  Avatar,
  Button,
} from "antd";
import IntlMessage from "components/util-components/IntlMessage";
import { useGetEmployeesData } from "queries/employee.query";
import CreateEmployee from "./create.employee";
import { DeleteOutlined, PlusCircleTwoTone } from "@ant-design/icons";
import DeleteEmployee from "./delete.employee";
import CustomPagination from "views/app-views/pagination/customPagination";
import '../../../../style/app-views.css'
import ResponsiveCol from "views/app-views/styleJs/ResponsiveCol";
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
  const [open, setOpen] = useState(false);
  const openCreateEmployee = () => {
    setOpen(true);
  };
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
    <div>
      <Row>
        <ResponsiveCol>
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "end",
              marginBottom: 20,
            }}
          >
            <Row>
              <Button
                type="primary"
                style={{ borderRadius: 50 }}
                onClick={openCreateEmployee}
              >
                اضافه کردن کارمندان
                <PlusCircleTwoTone />
              </Button>
              <CreateEmployee open={open} onCancel={() => setOpen(false)} />
            </Row>
            <Row>
              <Button
                type="primary"
                style={{ borderRadius: 50,backgroundColor:'red',marginLeft:'10px' }}
              >
                حذف کردن کارمندان
                <DeleteOutlined />
              </Button>
              <DeleteEmployee />
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
          <CustomPagination pageSize={pagination.pageSize} onPageSizeChange={onPageSizeChange} current={pagination.current} onPageChange={onPageChange} total={data.total}/>
        </ResponsiveCol>
      </Row>
    </div>
  );
};

export default Index;
