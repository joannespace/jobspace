import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const { isLoggedIn, logout, username } = useAuth();
  const handleLogOutBtn = () => {
    logout();
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            JOBSPACE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} />

          <Box
            sx={{
              flexGrow: 0,
              display: "flex",

              alignItems: "center",
            }}
          >
            {isLoggedIn ? (
              <>
                <Typography variant="h10" sx={{ mr: 2 }}>
                  Welcome {username}!
                </Typography>
                <Button
                  variant="contained"
                  onClick={handleLogOutBtn}
                  sx={{
                    color: "black",
                    backgroundColor: "#DBE8D8",
                    fontWeight: "bolder",
                    "&:hover": {
                      backgroundColor: "#FEDE00",
                      color: "#0A7029",
                    },
                  }}
                >
                  LOGOUT
                </Button>
              </>
            ) : (
              <Button
                variant="contained"
                sx={{
                  color: "black",
                  backgroundColor: "#DBE8D8",
                  fontWeight: "bolder",
                  "&:hover": {
                    backgroundColor: "#FEDE00",
                    color: "#0A7029",
                  },
                }}
                component={Link}
                to="/login"
                state={{ backgroundLocation: location, from: location }}
              >
                LOGIN
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
