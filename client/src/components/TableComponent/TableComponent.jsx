import { useState } from "react";
import { Table, Radio, Divider } from "antd";
import Loading from "../LoadingComponent/Loading";
const TableComponent = (props) => {
  const { selectionType = "checkbox", data = [], isLoading = false ,columns =[] } = props;

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      name: record.name,
    }),
  };
  return (
    <Loading isLoading={isLoading}>
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
       
      {...props}
      />
    </Loading>
  );
};
export default TableComponent;
