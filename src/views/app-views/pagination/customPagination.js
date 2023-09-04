import { Pagination, Select } from 'antd'
import React from 'react'

function CustomPagination({pageSize,onPageSizeChange,current,onPageChange,total}) {
  return (
    <div
    style={{ marginTop: "16px", display: "flex", alignItems: "center" ,justifyContent:'center'}}
  >
    <Select
      value={pageSize}
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
      current={current}
      pageSize={pageSize}
      total={total}
      onChange={onPageChange}
    />
  </div>
  )
}

export default CustomPagination;
