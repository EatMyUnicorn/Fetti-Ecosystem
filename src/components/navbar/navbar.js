import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import MyWallet from "./../../MyWallet";
import logo from "./../../logo.png";


const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
    
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
    },
  },
  linkWallet: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
    },
  },
}));

function Navbar() {
  
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          <img src={logo} className="App-logo" alt="logo" />
          Fetti Life
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/whitepaper" className={classes.link}>
              Whitepaper
            </Link>
          </div>
        )} 
        {isMobile ? (
          // do nothing
          <div />
        ) : (
          <Typography variant="h4" className={classes.linkWallet}>
              <MyWallet />
          </Typography>
        )}

      </Toolbar>
    </AppBar>
  );
}
export default Navbar;