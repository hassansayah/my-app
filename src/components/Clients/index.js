import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ClientCard from "./clientCards";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import ongoingImage from "../../images/ongoing.png";
import depthImage from "../../images/depth.png";
import tbsImage from "../../images/tbs.png";
import progressImage from "../../images/progress.png";
import saeeImage from "../../images/saee.png";
import { Carousel } from "@trendyol-js/react-carousel";
import Arrow from "../Team/arrow"


const useStyles = makeStyles({
  title: {
    fontSize: ".7rem",
    textTransform: "uppercase",
  },
  subtitle: {
    fontWeight: 700,
    fontSize: "1.7rem",
    textTransform: "uppercase",
  },
  underline: {
    height: "0.20rem",
    width: "7.5rem",
    background: "#1079C0",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: ".3rem",
    marginBottom: "1rem",
  },
  info: {
    marginBottom: "4rem",
    fontSize: ".7rem",
    fontWeight: "light",
    fontFamily: "Montserrat",
  },
  Btn: {
    padding: "1.3rem .1rem",
    borderRadius: "25px",
    border: "none",
    backgroundColor: "#165191",
  },
});
const Clinets = () => {
  const classes = useStyles();
  return (
    <Box
      textAlign="center"
      sx={{ px: 28, backgroundColor: "#FFFFFF", py: 10 }}
    >
      <Typography className={classes.title} gutterBottom>
        {" "}
        Success Partners{" "}
      </Typography>
      <Typography className={classes.subtitle}> Our Clients </Typography>
      <div className={classes.underline}></div>
      <Typography className={classes.info}>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore{" "}
      </Typography>
      
      <Carousel
        show={5}
        slide={1}
        transition={0.5} 
        rightArrow={<Arrow icon={<IoIosArrowForward/>}  />}
        leftArrow={<Arrow icon={<IoIosArrowBack/>} />}
      >
          <ClientCard image={ongoingImage} />
          <ClientCard width="90%" image={depthImage} />
          <ClientCard image={tbsImage} />
          <ClientCard width="90%" image={saeeImage}  />
          <ClientCard width="85%" image={progressImage} />
          <ClientCard image={tbsImage} />
          <ClientCard image={tbsImage} />
          <ClientCard width="85%" image={progressImage} />
          <ClientCard image={ongoingImage} />
          <ClientCard width="90%" image={depthImage} />
          
        
      </Carousel>
    </Box>
  );
};
export default Clinets;
