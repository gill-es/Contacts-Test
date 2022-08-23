import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "@mui/material/Link";
import EditIcon from "@mui/icons-material/Edit";

import actions from "../../../actions";
import config from "./../../../config";
import DetailsTable from "../../../components/Table/DetailsTable";
import formatter from "../../../helpers/formatter";
import BasicModal from "../../../components/Modal/BasicModal";

const tableConfig = config.tables.contactDetailsTable;

const ContactDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const contact = useSelector((state) => state.contacts.item);

  useEffect(() => {
    dispatch(actions.contactActions.getContact(id));
  }, []);

  const contactDetails = {
    ...contact,
    date_of_birth: formatter.formatDate(contact.date_of_birth),
  };

  const onSuccess = () => {
    navigate("/contact/list");
  };

  const onClose = () => {
    setIsConfirmationModalOpen(false);
  };

  const handleDelete = () => {
    setIsConfirmationModalOpen(true);
  };

  const onCancelDelete = () => {
    onClose();
  };

  const onConfirmDelete = () => {
    onClose();
    dispatch(actions.contactActions.deleteContact(id, { onSuccess }));
  };

  return (
    <>
      <Card sx={{ maxWidth: "100%" }}>
        <CardHeader
          avatar={<Avatar src={contact.avatar} alt={contact.name} />}
          title={contact.name}
        />
        <CardContent>
          <DetailsTable
            config={tableConfig}
            rows={contactDetails}
            showHeader={false}
          />
        </CardContent>
        <CardActions disableSpacing>
          <Link href={`/contact/${id}/edit`}>
            <IconButton aria-label="Edit">
              <EditIcon />
            </IconButton>
          </Link>
          <IconButton aria-label="Delete" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
      <BasicModal
        open={isConfirmationModalOpen}
        onConfirm={onConfirmDelete}
        onCancel={onCancelDelete}
        handleClose={onClose}
        bodyContent={
          <Box>
            Are you sure you want to delete <strong>{contact.name}</strong> from
            your contacts?
          </Box>
        }
      />
    </>
  );
};

export default ContactDetails;
