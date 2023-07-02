import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
} from "@material-ui/core";
// import Button from "react-bootstrap/Button";
import styles from "./RegistrationDialog.module.css";
import { Link } from "react-router-dom";

const RegistrationDialog = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      className={styles.customDialog}
    >
      <DialogTitle>
        <div className={styles.titleContainer}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/595/983/original/vector-object-and-icons-for-sport-label-gym-badge-fitness-logo-design.jpg"
            alt="Logo"
            className={styles.logo}
          />
        </div>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <div className={styles.registrationContentLayout}>
            <div className={styles.inputContainer}>
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                fullWidth
              />
            </div>
            <div className={styles.inputContainer}>
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                fullWidth
              />
            </div>
          </div>
          <div className={styles.inputContainer}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
            />
          </div>
          <div className={styles.inputContainer}>
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              fullWidth
            />
          </div>
          <div className={styles.inputContainer}>
            <TextField
              id="outlined-basic"
              label="Confirm password"
              variant="outlined"
              fullWidth
            />
          </div>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <div className={styles.registrationContentLayout}>
          <div className={styles.registerText}>
            <span>
              Already have an account? Go back to <Link to="/login">Login</Link>
            </span>
          </div>
          <div className={styles.buttonContainer}>
            <Button variant="contained" color="primary">
              Register
            </Button>
            <Button variant="contained" color="secondary" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default RegistrationDialog;
