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
//
import ReactModal from "react-modal";

export default function ButtonAppBar({ toggleModal }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const toggleLoginForm = () => {
    if (showLoginForm) {
      setShowLoginForm(false);
    } else {
      setShowLoginForm(true);
    };
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    if (username === "secret" && password === "secret") {
      setIsLoggedIn(true);
      setShowLoginForm(false);
    } else {
      setLoginError(true);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={styles.customAppBar}>
        <Toolbar>
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
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            <b>ravenous</b>
          </Typography>
          <Button color="inherit" onClick={toggleLoginForm}>
            {isLoggedIn ? "logout" : "login"}
          </Button>
          {!isLoggedIn && (
            <ReactModal
              isOpen={showLoginForm}
              onRequestClose={toggleLoginForm}
              contentLabel="Login Form"
            >
              <form onSubmit={handleLoginSubmit}>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={handleUsernameChange}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                {loginError && <p>Incorrect username or password</p>}
                <button type="submit">Login</button>
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
