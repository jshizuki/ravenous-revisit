import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styles from "../css/ButtonAppBar.module.css";
import TextField from "@mui/material/TextField";
//
import ReactModal from "react-modal";

export default function ButtonAppBar({ toggleModal }) {
  const [anchorEl, setAnchorEl] = useState(null);
  // Controls states of username and password
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  // Controls signup and login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);
  // Controls form status
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  // Controls display of wrong username/password
  const [loginError, setLoginError] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    alert("Signed up successfully!");
    setIsSignedUp(true);
    toggleSignupForm();
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const enteredUsername =
      event.target.querySelector("input[type=text]").value;
    const enteredPassword = event.target.querySelector(
      "input[type=password]"
    ).value;
    if (enteredUsername === username && enteredPassword === password) {
      setIsLoggedIn(true);
      setShowLoginForm(false);
      alert("Logged in successfully!")
    } else {
      setLoginError(true);
    }
  };

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      setIsLoggedIn(false);
    }
  };

  const toggleLoginForm = () => {
    if (showLoginForm) {
      setShowLoginForm(false);
    } else {
      setShowLoginForm(true);
    }
  };

  const toggleSignupForm = () => {
    if (showSignupForm) {
      setShowSignupForm(false);
    } else {
      setShowSignupForm(true);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={styles.customAppBar}>
        <Toolbar>
          <div className={styles.toolbarLeft}>
            {isLoggedIn && (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
            )}
          </div>

          <Typography variant="h4" component="div">
            <b>ravenous</b>
          </Typography>

          <div className={styles.toolbarRight}>
            {isLoggedIn ? (
              <Button color="inherit" onClick={handleLogout}>
                logout
              </Button>
            ) : (
              <Button color="inherit" onClick={toggleLoginForm}>
                login
              </Button>
            )}
            {!isSignedUp && (
              <Button color="inherit" onClick={toggleSignupForm}>
                SIGN UP
              </Button>
            )}
          </div>

          <ReactModal isOpen={showSignupForm} className={styles.customModal}>
            <form onSubmit={handleSignupSubmit}>
              <TextField
                required
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                size="small"
                sx={{ width: 250, m: 1 }}
              />
              <br />
              <TextField
                required
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                size="small"
                sx={{ width: 250, m: 1 }}
              />
              <br />
              <Button type="submit">Create</Button>
              <Button type="submit" onClick={toggleSignupForm}>Close</Button>
            </form>
          </ReactModal>
          {!isLoggedIn && (
            <ReactModal
              isOpen={showLoginForm}
              onRequestClose={toggleLoginForm}
              contentLabel="Login Form"
              className={styles.customModal}
            >
              <form onSubmit={handleLoginSubmit}>
                <TextField
                  type="text"
                  placeholder="Username"
                  size="small"
                  sx={{ width: 250, m: 1 }}
                />
                <br />
                <TextField
                  type="password"
                  placeholder="Password"
                  size="small"
                  sx={{ width: 250, m: 1 }}
                />
                {loginError && <p>Incorrect username or password</p>}
                <br />
                <Button type="submit">Login</Button>
                <Button type="submit" onClick={toggleLoginForm}>Close</Button>
              </form>
            </ReactModal>
          )}
        </Toolbar>
      </AppBar>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={toggleModal}>See reservations</MenuItem>
      </Menu>
    </Box>
  );
}
