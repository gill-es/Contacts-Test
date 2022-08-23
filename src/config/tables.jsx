import React from "react";
import { Avatar, CardHeader, Link } from "@mui/material";
import formatter from "../helpers/formatter";

const contactsTable = {
  columns: [
    {
      field: "id",
      headerName: "ID",
      width: 80,
      sortable: false,
    },
    {
      field: "name",
      headerName: "Name",
      width: 250,
      sortable: false,
      renderCell: (params) => (
        <Link
          href={`/contact/${params.row.id}`}
          color="primary.text"
          underline="none"
        >
          <CardHeader
            avatar={<Avatar src={params.row.avatar} alt="avatar" />}
            title={<strong>{params.row.name}</strong>}
            sx={{ padding: 0 }}
          />
        </Link>
      ),
    },
    {
      field: "email",
      headerName: "E-mail Address",
      width: 180,
      sortable: false,
    },
    {
      field: "mobile_number",
      headerName: "Mobile Number",
      width: 180,
      sortable: false,
    },
    {
      field: "nationality",
      headerName: "Nationality",
      width: 180,
      sortable: false,
    },
    {
      field: "gender",
      headerName: "Gender",
      width: 160,
      sortable: false,
    },
    {
      field: "date_of_birth",
      headerName: "Date of Birth",
      width: 180,
      valueFormatter: (params) => formatter.formatDate(params.value),
      sortable: false,
    },
  ],
};

const contactDetailsTable = [
  {
    label: "Mobile Number",
    key: "mobile_number",
  },
  {
    label: "Nationality",
    key: "nationality",
  },
  {
    label: "Gender",
    key: "gender",
  },
  {
    label: "Date of Birth",
    key: "date_of_birth",
  },
];

export default {
  contactsTable,
  contactDetailsTable,
};
