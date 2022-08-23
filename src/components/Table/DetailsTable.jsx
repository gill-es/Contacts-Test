import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const DetailsTable = ({ config, rows }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {config.map((tableItem) => (
            <TableRow
              key={`contact-details_${tableItem.key}`}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell width={"40%"}>
                <strong>{tableItem.label}</strong>
              </TableCell>
              <TableCell width={"60%"}>{rows[tableItem.key]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

DetailsTable.defaultProps = {
  config: {},
  items: {},
};

export default DetailsTable;
