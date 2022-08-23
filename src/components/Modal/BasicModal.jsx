import React from "react";
import { Dialog, DialogTitle, DialogContent, Button, Box } from "@mui/material";

const BasicModal = ({
  open,
  headerContent,
  bodyContent,
  onConfirm,
  onCancel,
  handleClose,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      transitionDuration={{ exit: 0 }}
    >
      {headerContent && (
        <DialogTitle>
          <Box
            sx={{
              fontFamily: "allVariants.fontFamily",
            }}
          >
            {headerContent}
          </Box>
        </DialogTitle>
      )}
      {bodyContent && (
        <DialogContent dividers>
          <Box
            sx={{
              fontFamily: "allVariants.fontFamily",
            }}
          >
            {bodyContent}
          </Box>
        </DialogContent>
      )}
      <Box sx={{ padding: "20px", display: "flex", justifyContent: "right" }}>
        <Button
          variant="contained"
          onClick={onConfirm}
          color="success"
          sx={{ marginRight: 1 }}
        >
          Confirm
        </Button>
        <Button variant="contained" onClick={onCancel} color="error">
          Cancel
        </Button>
      </Box>
    </Dialog>
  );
};

BasicModal.defaultProps = {
  open: false,
  handleClose: null,
  headerContent: "Are you sure with this action?",
  bodyContent: null,
  onConfirm: null,
  onCancel: null,
};

export default BasicModal;
