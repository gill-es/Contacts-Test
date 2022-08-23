import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const DataTable = ({
  columns,
  rows,
  pageSize,
  rowsPerPageOptions,
  height,
  width,
  filterModel,
  onFilterModelChange,
}) => {
  return (
    <div style={{ height, width }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={rowsPerPageOptions}
        components={{
          Toolbar: GridToolbar,
        }}
        filterModel={filterModel}
        onFilterModelChange={(newFilterModel) => onFilterModelChange(newFilterModel)}
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
