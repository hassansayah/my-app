import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Image from "../../images/Mask Group 9.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  img: {
    width: "100%",
    height: "90%",
  },
  title: {
    textTransform: "uppercase",
    fontSize: ".7rem",
  },
  subtitle: {
    fontSize: "2.8rem",
    fontWeight: 700,
  },
  underline: {
    height: "0.20rem",
    width: "7.5rem",
    background: "#1079C0",
  },
  descrpion: {
    fontSize: ".9rem",
    fontWeight: 700,
    lineHeight: 1.2
  },
  info :{
    fontSize: ".8rem",
  }, 
  readBtn : {
    backgroundColor: "#2065AF",
    borderRadius: "20px", 
    "&:hover": {
      backgroundColor: "#295A8F",
    },
  }
});

const Content2 = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={5}
      sx={{
        backgroundColor: "#FFFFFF",
        px: 28,
        pt: 10,
        pb: 5,
      }}
    >
      <Grid item sm={6}>
        <img src={Image} alt="logo" className={classes.img} />
      </Grid>
      <Grid item sm={6}>
        <Typography className={classes.title}>About us</Typography>
        <Typography className={classes.subtitle}>Who Are We</Typography>
        <div className={classes.underline}></div>
        <Typography className={classes.descrpion} sx={{ my: 2 }}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </Typography>
        <Typography className={classes.info} sx={{ mb: 1 }}>
          {" "}
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et
        </Typography>
        <Box display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            className={classes.readBtn}
          >
            Read More
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
export default Content2;
