import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "./Register.css";
import { useFormik } from "formik";
import { signUpSignInSchema } from "../../../schemas";
import { createUser, getAllUser } from "../../../api/apiEndpoint";
import { v4 as uuidv4 } from "uuid";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Register = () => {
  const [openSnackbar, setOpenSnackbar] = useState({
    open: false,
    vertical: "top",
    horizontal: "right",
    severity: "warning",
  });
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [createButtonDisabled, setCreateButtonDisabled] = useState(false);
  const nevigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getAllUser();
      setAllUsers(users);
    };

    fetchUsers();
  }, []);

  const { values, errors, touched, handleBlur, handleChange, resetForm } =
    useFormik({
      initialValues: {
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        mobile: "",
        gender: "",
      },
      validationSchema: signUpSignInSchema,
      // onSubmit: (values, action) => {
      //   console.log(
      //     "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
      //     values
      //   );
      // },
    });
  useEffect(() => {
    setCreateButtonDisabled(Object.keys(errors).length > 0);
  }, [errors]);

  const handleSnackbarClose = () => {
    setOpenSnackbar((prevState) => ({
      ...prevState,
      open: false,
    }));
    setSnackbarMessage("");
  };

  const handleSubmit = async (event) => {
    // for preventing the form from reloading
    event.preventDefault();

    // creating user data
    let user = {
      id: uuidv4(),
      ...values,
      profileImage: "./male_avatar.png",
      board: [],
    };

    // checking if the user already exists
    let isUserExist = allUsers.find(
      (existedUser) =>
        existedUser.userName === user.userName ||
        existedUser.email === user.email
    );

    // giving message that user already exists in the snackbar
    if (isUserExist) {
      setOpenSnackbar((prevState) => ({
        ...prevState,
        open: true,
        severity: "warning",
      }));
      setSnackbarMessage(
        "User with the same username and email already exists."
      );
      return;
    }

    // all validation done then creating the user and saving it to the database and displaying a success message
    let res = await createUser(user);

    if (res.status === 201 && user) {
      setOpenSnackbar((prevState) => ({
        ...prevState,
        open: true,
        severity: "success",
      }));
      setSnackbarMessage("User registered successfully!");
      resetForm();
      setTimeout(() => {
        nevigate("/login");
      }, 2000);
    } else {
      setOpenSnackbar((prevState) => ({
        ...prevState,
        open: true,
        severity: "danger",
      }));
      setSnackbarMessage("An error occurred during user registration.");
    }
  };

  return (
    <>
      <div className="register-container">
        {/* <div className="register-background"> */}
        <div className="register-card">
          <Snackbar
            open={openSnackbar.open}
            autoHideDuration={5000}
            onClose={handleSnackbarClose}
            anchorOrigin={{
              vertical: openSnackbar.vertical,
              horizontal: openSnackbar.horizontal,
            }}
            key={openSnackbar.vertical + openSnackbar.horizontal}
          >
            <MuiAlert
              elevation={6}
              variant="filled"
              onClose={handleSnackbarClose}
              severity={openSnackbar.severity}
            >
              {snackbarMessage}
            </MuiAlert>
          </Snackbar>
          <div className="card-body">
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/595/983/original/vector-object-and-icons-for-sport-label-gym-badge-fitness-logo-design.jpg"
              alt="Logo"
              className="logo"
            />
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 ">
                  <div className="form-outline">
                    <TextField
                      error={errors.userName && touched.userName ? true : false}
                      label="UserName"
                      name="userName"
                      margin="normal"
                      type=""
                      required
                      fullWidth
                      value={values.userName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        errors.userName && touched.userName
                          ? errors.userName
                          : ""
                      }
                    />
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="form-outline">
                    <TextField
                      error={errors.email && touched.email ? true : false}
                      label="Email"
                      name="email"
                      margin="normal"
                      type=""
                      required
                      fullWidth
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        errors.email && touched.email ? errors.email : ""
                      }
                    />{" "}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6  d-flex align-items-center">
                  <div className="form-outline datepicker w-100">
                    <TextField
                      error={errors.password && touched.password ? true : false}
                      label="Password"
                      name="password"
                      margin="normal"
                      type="password"
                      required
                      fullWidth
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        errors.password && touched.password
                          ? errors.password
                          : ""
                      }
                    />{" "}
                  </div>
                </div>
                <div className="col-md-6  d-flex align-items-center">
                  <div className="form-outline datepicker w-100">
                    <TextField
                      error={
                        errors.confirmPassword && touched.confirmPassword
                          ? true
                          : false
                      }
                      label="Confirm password"
                      name="confirmPassword"
                      margin="normal"
                      type="password"
                      required
                      fullWidth
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        errors.confirmPassword && touched.confirmPassword
                          ? errors.confirmPassword
                          : ""
                      }
                    />{" "}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6  d-flex align-items-center">
                  <div className="form-outline datepicker w-100">
                    <TextField
                      error={errors.mobile && touched.mobile ? true : false}
                      label="Mobile no"
                      name="mobile"
                      margin="normal"
                      type=""
                      required
                      fullWidth
                      value={values.mobile}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        errors.mobile && touched.mobile ? errors.mobile : ""
                      }
                    />
                  </div>
                </div>

                <div className="col-md-6 mt-3">
                  <FormControl>
                    <FormLabel
                      id="demo-row-radio-buttons-group-label"
                      className="d-flex justify-content-start"
                    >
                      <span style={{ fontWeight: 600 }}>Gender</span>
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="gender"
                      value={values.gender}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <FormControlLabel
                        control={<Radio />}
                        label="Female"
                        value="female"
                      />
                      <FormControlLabel
                        control={<Radio />}
                        label="Male"
                        value="male"
                      />
                      <FormControlLabel
                        control={<Radio />}
                        label="Other"
                        value="others"
                      />
                    </RadioGroup>
                  </FormControl>{" "}
                </div>
              </div>

              <div className="mt-4 d-flex justify-content-between align-items-center">
                <p>
                  Go back to login? <Link to="/login">Login</Link>
                </p>
                <button
                  disabled={createButtonDisabled}
                  className="btn btn-danger btn-lg"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Register;
