import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import Button from "react-bootstrap/Button";

const RegistrationDialog = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Join Now </DialogTitle>
      <DialogContent>
        <DialogContentText>Dialog content goes here...</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="primary">Primary Button</Button>
        <Button variant="danger" onClick={onClose}>
          Danger Button
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RegistrationDialog;
