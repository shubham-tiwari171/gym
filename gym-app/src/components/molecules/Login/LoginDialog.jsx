import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
} from "@material-ui/core";
import Button from "react-bootstrap/Button";
import styles from "./LoginDialog.module.css";

const LoginDialog = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <DialogTitle>
        <div className={styles.titleContainer}>
          {/* <span className={styles.titleText}>Join Now</span> */}
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/595/983/original/vector-object-and-icons-for-sport-label-gym-badge-fitness-logo-design.jpg"
            alt="Logo"
            className={styles.logo}
          />
        </div>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
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
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <div className={styles.loginContentLayout}>
          <div className={styles.inputContainer}>
            <span>
              Already have an account? Go back to <a href="">Login</a>
            </span>
          </div>
          <div className={styles.buttonContainer}>
            <Button variant="primary">Register</Button>
            <Button variant="danger" onClick={onClose}>
              Cancle
            </Button>
          </div>
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default LoginDialog;
