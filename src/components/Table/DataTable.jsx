import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const DataTable = ({
  columns,
  rows,
  pageSize,
  rowsPerPageOptions,
  height,
  width,
}) => {
  return (
    <div style={{ height, width }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={rowsPerPageOptions}
      />
    </div>
  );
};

DataTable.defaultProps = {
  columns: [],
  rows: [],
  pageSize: 25,
  rowsPerPageOptions: [],
  height: 400,
  width: "100%",
  page: 1,
};

export default DataTable;
