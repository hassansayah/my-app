import Grid from "@mui/material/Grid";
import image from "../../images/background.png";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { MdLocationPin } from "react-icons/md";
import { FaFax } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImPhone } from "react-icons/im";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGooglePlusSquare } from "react-icons/fa";
import logoImage from "../../images/logoImage.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  image: {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    height: "17rem",
    backgroundColor: "rgba(0, 0, 0, .9)",
  },
  logoImage: {
    width: "30%",
    marginBottom: "1rem",
  },
  underline: {
    height: "0.20rem",
    width: ".8rem",
    background: "#1079C0",
    marginLeft: 0,
    marginTop: ".2rem",
    marginBottom: "1rem",
  },
  title: {
    marginLeft: ".3rem",
    fontSize: ".6rem",
    color: "#FFFFFF",
    textDecoration: "none",
  },
  subtitle: {
    fontSize: ".6rem",
    textDecoration: "none",
    color: "#FFFFFF",
    "&:hover": {
      color: "#FFFFFF",
    },
  },
  fontsize: {
    fontSize: ".6rem",
  },
  emailTitle: {
    fontSize: ".5rem",
  },
  fontsizeIcon: {
    width: "1.5rem",
    height: "1.5rem",
  },
  containerIcon: {
    backgroundColor: "#1A1A1A",
    color: "#FFFFFF",
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        className={classes.image}
        sx={{ px: 28, pt: 8, color: "#FFFFFF" }}
      >
        <Grid item sm={5}>
          <img src={logoImage} alt="logoImage" className={classes.logoImage} />
          <Typography className={classes.fontsize}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Typography>
          <Typography className={classes.fontsize}>
            eiusmod EvoTech ut labore et dolore magna aliqua.
          </Typography>
        </Grid>

        <Grid item sm={2}>
          <Typography color="#249EE8">MAIN PAGES</Typography>
          <div className={classes.underline}></div>
          <Box display="flex" alignItems="center" sx={{ mb: 1.5 }}>
            <HiOutlineChevronDoubleRight className={classes.fontsize} />
            <Link to="/" className={classes.title}>
              Home
            </Link>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mb: 1.5 }}>
            <HiOutlineChevronDoubleRight className={classes.fontsize} />
            <Link to="/about-us" className={classes.title}>
              About Us
            </Link>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mb: 1.5 }}>
            <HiOutlineChevronDoubleRight className={classes.fontsize} />
            <Link to="/services" className={classes.title}>
              Our Services
            </Link>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mb: 1.5 }}>
            <HiOutlineChevronDoubleRight className={classes.fontsize} />
            <Link to="/new-blog" className={classes.title}>
              News & Blog
            </Link>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mb: 1.5 }}>
            <HiOutlineChevronDoubleRight className={classes.fontsize} />
            <Link to="contact-us" className={classes.title}>
              Contact Us
            </Link>
          </Box>
        </Grid>
        <Grid item sm={2}>
          <Typography color="#249EE8">Services</Typography>
          <div className={classes.underline}></div>
          <Box display="flex" alignItems="center" sx={{ mb: 1.5 }}>
            <HiOutlineChevronDoubleRight className={classes.fontsize} />
            <Link to="/" className={classes.title}>
              Home
            </Link>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mb: 1.5 }}>
            <HiOutlineChevronDoubleRight className={classes.fontsize} />
            <Link to="/about-us" className={classes.title}>
              About Us
            </Link>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mb: 1.5 }}>
            <HiOutlineChevronDoubleRight style={{ fontSize: ".6rem" }} />
            <Link to="/services" className={classes.title}>
              Our Services
            </Link>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mb: 1.5 }}>
            <HiOutlineChevronDoubleRight className={classes.fontsize} />
            <Link to="/new-blog" className={classes.title}>
              News & Blog
            </Link>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
            <HiOutlineChevronDoubleRight className={classes.fontsize} />
            <Link to="contact-us" className={classes.title}>
              Contact Us
            </Link>
          </Box>
        </Grid>
        <Grid item sm={3} sx={{ paddingRight: "3rem" }}>
          <Typography color="#249EE8">Contact Us</Typography>
          <div className={classes.underline}></div>
          <Box>
          <a
                className={classes.subtitle}
                href="https://goo.gl/maps/vBoWHApaudik4mdg6"
                target="popup"
                onclick="window.open(https://goo.gl/maps/vBoWHApaudik4mdg6,'popup','width=600,height=600'); return false;"
              > 
              <Box display="flex"  sx={{mb: "1rem", lineHeight: 1.7}} >
                <MdLocationPin  style={{  marginRight: '.8rem', fontSize: '1.2rem', marginLeft: "-.2rem" }} />
                University Street, 128 Giza Square, Cairo 1367 Egypt
                </Box>
              </a>
              
          </Box >
          <Box >
            <a href="tel:5554280940" className={classes.subtitle}>
            <Box display="flex" alignItems="center">
              <ImPhone  style={{ marginRight: ".8rem", fontSize: '.7rem' }} />
              Phone : +2 - 877 - 3453 - 3726{" "}
              </Box>
            </a>
          </Box>
          <Box sx={{my: ".5rem"}} >
            <a href="fax:+2 - 877 - 2341 - 1283 " className={classes.subtitle}>
            <Box display="flex" alignItems="center">
              <FaFax color="#FFFFFF" style={{ marginRight: ".8rem", fontSize: '.7rem' }} />
              FAX : +2 - 877 - 2341 - 1283
              </Box>
            </a>
          </Box>
          <Box>
          <Box >
            <a href="mailto: info@evotech.com" className={classes.subtitle}>
              <Box display="flex" alignItems="center">
              <MdEmail style={{ marginRight: ".8rem", fontSize: '.9rem'}} />
              Email : info@evotech.com{" "}
              </Box>
            </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        className={classes.containerIcon}
        sx={{ px: 28, py: 2 }}
      >
        <Typography className={classes.emailTitle}>
          Copyright @ EvoTech 2022
        </Typography>
        <Box>
          <FaFacebookSquare className={classes.fontsizeIcon} />
          <FaTwitterSquare className={classes.fontsizeIcon} />
          <FaGooglePlusSquare className={classes.fontsizeIcon} />
        </Box>
        
      </Box>
    </>
  );
};
export default Footer;
