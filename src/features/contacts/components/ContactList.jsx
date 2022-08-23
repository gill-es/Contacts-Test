import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import DataTable from "../../../components/Table/DataTable";
import actions from "../../../actions";
import config from "../../../config";

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(actions.contactActions.getContacts());
  }, []);

  return (
    <>
      <DataTable
        columns={config.tables.contactsTable.columns}
        rows={contacts.list}
        pageSize={contacts.pagination.itemsPerPage}
        pagination={{ page: contacts.pagination.currentPage }}
      />
    </>
  );
};

ContactList.defaultProps = {
  columns: [],
  rows: [],
  pagination: { page: 1 },
};

export default ContactList;
