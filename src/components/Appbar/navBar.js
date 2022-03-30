import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import logo from "../../images/EvoTech logo.png";
import Group from "../../images/Group 6.png";
import { NavLink } from "react-router-dom";
import "./style.css";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
  },
  selected: {
    textDecoration: "none",
  },
  image: {
    width: "12rem",
    height: "2rem",
  },
  logo: {
    width: "3rem",
    height: "3rem",
  },
});
const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.container} sx={{ px: 25 }}>
      <Toolbar className={classes.content}>
        <img src={logo} alt="logo" className={classes.image} />

        <NavLink to="/" className={classes.selected}>
          HOME
        </NavLink>
        <NavLink to="/about-us" className={classes.selected}>
          About us
        </NavLink>
        <NavLink to="/services" className={classes.selected}>
          OUR SERVICES
        </NavLink>
        <NavLink to="/new-blog" className={classes.selected}>
          NEWS & BLOG
        </NavLink>
        <NavLink to="/contact-us" className={classes.selected}>
          CONTACT US
        </NavLink>

        <img src={Group} alt="logo" className={classes.logo} />
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
