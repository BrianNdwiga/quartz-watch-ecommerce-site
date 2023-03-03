import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person2";

const pages = ["Shop", "Contact", "About"];

const theme = createTheme({
  palette: {
    primary: {
      main: "#F5F5F5",
    },
    secondary: {
      main: "#11cb5f",
    },
    section: {
      main: "#FFFFFF",
    },
    section1: {
      main: "#2B662D",
    },
  },
});

import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary" sx={{ boxShadow: "none" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                width: 200,
                backgroundColor: "#ffffff",
                boxShadow: "none",
                borderRadius: 4,
                justifyContent: "center",
                padding: 1,
              }}
            >
              <DiamondOutlinedIcon
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              />
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
                quartz.
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
                <MenuItem>
                  <Typography textAlign="center">My Account</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <DiamondOutlinedIcon
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 4,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              quartz.
            </Typography>
            <Box
              sx={{
                right: 0,
                position: "absolute",
                display: { xs: "flex", md: "none" },
                alignItems: "center",
                flexGrow: 0,
              }}
            >
              <Avatar
                variant="rounded"
                sx={{
                  backgroundColor: "#2B662D",
                  marginRight: 1,
                }}
              >
                <ShoppingCartOutlinedIcon />
              </Avatar>
            </Box>
            <Box sx={{ flexGrow: 0.3, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    alignItems: "center",
                    width: { md: 80, lg: 160 },
                    backgroundColor: "#ffffff",
                    boxShadow: "none",
                    borderRadius: 4,
                    fontWeight: 500,
                    letterSpacing: ".1rem",
                    padding: 1.5,
                    marginLeft: { md: 0.5, lg: 1 },
                    marginRight: { md: 0.5, lg: 1 },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box
              sx={{
                right: 0,
                position: "absolute",
                display: { xs: "none", md: "flex" },
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  flexGrow: 0,
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  width: 200,
                  backgroundColor: "#ffffff",
                  boxShadow: "none",
                  borderRadius: "12px",
                  padding: 0.5,
                  margin: 0.5,
                  marginRight: 2,
                }}
              >
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </Box>
              <Button
                onClick={handleCloseNavMenu}
                className="cart"
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: { md: 150, lg: 200 },
                  borderRadius: "12px",
                  fontWeight: { md: 200, lg: 500 },
                  padding: 1.5,
                  marginRight: 1,
                  display: "flex",
                  backgroundColor: "#2B662D",
                  color: "white",
                }}
              >
                <ShoppingCartOutlinedIcon
                  sx={{ fontSize: "16px", marginRight: { xs: 0, md: 0.5 } }}
                />
                View Cart
              </Button>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Personal Account">
                  <IconButton sx={{ p: 0 }}>
                    <Avatar
                      variant="rounded"
                      sx={{
                        backgroundColor: "#2B662D",
                        padding: "23px",
                      }}
                    >
                      <PersonIcon />
                    </Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default Navbar;