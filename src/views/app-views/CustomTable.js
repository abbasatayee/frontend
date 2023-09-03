import React, { useState, useEffect } from "react";
import { Table, Select, Pagination } from "antd";

const CustomTable = ({ columns, fetchData }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });

  const onSelectChange = (selectedKeys) => {
    setSelectedRowKeys(selectedKeys);
  };

  const onPageChange = (page, pageSize) => {
    setPagination({ current: page, pageSize });
  };

  const onPageSizeChange = (value) => {
    setPagination({ ...pagination, pageSize: value });
  };

  // Fetch data when pagination changes
  useEffect(() => {
    fetchData(pagination.current, pagination.pageSize);
  }, [pagination, fetchData]);

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT, Table.SELECTION_NONE],
  };

  return (
    <div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={[]}
        pagination={false}
      />
      <div style={{ marginTop: "16px", display: "flex", alignItems: "center" }}>
        <Select
          value={pagination.pageSize}
          onChange={onPageSizeChange}
          style={{ width: 80, marginRight: "8px" }}
        >
          {[5, 10, 20, 30, 50].map((pageSize) => (
            <Select.Option key={pageSize} value={pageSize}>
              {pageSize}
            </Select.Option>
          ))}
        </Select>
        <Pagination
          current={pagination.current}
          pageSize={pagination.pageSize}
          total={0} // Set total to 0 initially
          onChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default CustomTable;
