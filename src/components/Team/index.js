import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Arrow from "./arrow";
import Box from "@mui/material/Box";
import TeamCard from "./teamCard";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import manImage1 from "../../images/manImage.png";
import manImage2 from "../../images/manImage2.png";
import manImage4 from "../../images/manImage4.png";
import manImage3 from "../../images/manImage3.png";
import { Carousel } from "@trendyol-js/react-carousel";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#F5F5F5",
  },
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
});

const Team = () => {
  const classes = useStyles();

  return (
    <Box
      textAlign="center"
      className={classes.container}
      sx={{ px: 28, py: 10 }}
    >
      <Typography className={classes.title} gutterBottom>
        {" "}
        special team{" "}
      </Typography>
      <Typography className={classes.subtitle}> Our Team </Typography>
      <div className={classes.underline}></div>
      <Typography className={classes.info}>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore{" "}
      </Typography>

         
      <Carousel
        show={4}
        slide={1}
        transition={0.5} 
        rightArrow={<Arrow icon={<IoIosArrowForward/>}  />}
        leftArrow={<Arrow icon={<IoIosArrowBack/>} />}
      >
            <TeamCard image={manImage1} />
            <TeamCard image={manImage2} />
            <TeamCard image={manImage3} />
            <TeamCard image={manImage4} />
            <TeamCard image={manImage4} />
            <TeamCard image={manImage4} />
            <TeamCard image={manImage4} />
          
        
      </Carousel>
    </Box>
  );
};
export default Team;
