import Grid from "@mui/material/Grid";
import Image from "../../images/Mask Group 11.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Paper, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    position: "relative",
    marginTop: "2rem",
  },
  nextline: {
    position: "absolute",
    height: "2rem",
    width: ".20rem",
    background: "#E9E9E9",
    top: "15rem",
  },
  janBtn: {
    position: "absolute",
    top: "1rem",
    left: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: ".5rem 0 ",
    lineHeight: 1,
  },
  newsBtn: {
    position: "absolute",
    bottom: ".25rem",
    right: 0,
    zIndex: 10,
    borderRadius: 0,
    padding: ".25rem 1.7rem",
    fontSize: ".7rem",
  },
  img: {
    width: "100%",
    height: "14rem",
  },
  title: {
    fontSize: ".45rem",
  },
  subtitle: {
    fontSize: ".8rem",
    fontWeight: 600,
  },
  description: {
    fontSize: ".6rem",
    paddingTop: ".5rem",
    //  paddingBottom: "2rem"
  },
});

const Feature3 = () => {
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.container}>
      <div className={classes.nextline}></div>
      <div style={{ position: "relative" }}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.janBtn}
        >
          <Typography> 05</Typography>
          JAN
        </Button>
        <Button variant="contained" className={classes.newsBtn}>
          News
        </Button>
        <img src={Image} alt="Mask Group " className={classes.img} />
      </div>
      <Box sx={{ p: ".8rem " }}>
        <Typography className={classes.title}>
          26/06/2017, POSTED BY
          <Typography
            className={classes.title}
            component="span"
            color="#2065AF"
          >
            KHALID SAIED
          </Typography>
        </Typography>
        <Typography className={classes.subtitle}>ADVANCED INTERIOR </Typography>
        <Typography className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        </Typography>
      </Box>
    </Paper>
  );
};
export default Feature3;
