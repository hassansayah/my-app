import Grid from "@mui/material/Grid";
import programmerImage from "../../images/programmer.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import mediaImage from "../../images/media.png";

const useStyles = makeStyles({
  container: {
    backgroundImage: `url(${programmerImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    // filter: "brightness(60%)",
    height: "100%",
    color: "#FFFFFF",
  },
  title: {
    fontSize: "1.1rem",
    marginTop: "1rem",
    fontWeight: 600,
  },
  subtitle: {
    fontSize: "3.5rem",
    fontWeight: 700,
  },
  descp: {
    fontSize: "1.5rem",
    marginBottom: "1.3rem",
  },
  jionBtn: {
    border: "1px solid #FFFFFF",
    marginBottom: "1.5rem",
    color: "#FFFFFF",
  },
  containerSolutions: {
    marginTop: "8rem",
    padding: "1rem",
    position: "relative",
    paddingLeft: '1.5rem'
  },
  mediaImg: {
    width: "100%",
    height: "100%",
    transform: "translate(-13rem)",
    zIndex: 20

  },
  aboveLine: {
    position: "absolute",
    height: "0.4rem",
    width: "31%",
    background: "#1079C0",
    top: 0,
    left: 0,
  },
  nextLine: {
    position: "absolute",
    height: "100%",
    width: ".5rem",
    background: "#1079C0",
    top: 0,
    left: 0,
  },
  underLine: {
    position: "absolute",
    height: "0.5rem",
    width: "31%",
    background: "#1079C0",
    bottom: 0,
    left: 0,
  },
  smallLine: {
    position: "absolute",
    height: "1.5rem",
    width: ".5rem",
    background: "#1079C0",
    top: 0,
    marginLeft: "25%",
  },
  smallLineBottom: {
    position: "absolute",
    height: "1.5rem",
    width: ".5rem",
    background: "#1079C0",
    bottom: 0,
    marginLeft: "25%",
  },
  btnLine: {
    position: "absolute",
    height: ".2rem",
    width: "2rem",
    background: "#1079C0",
    bottom: ".9rem",
    left: "-.5rem"

  },
  btnLineLeft : {
    position: "absolute",
    height: "2rem",
    width: ".2rem",
    background: "#1079C0",
    bottom: ".9rem",
    left: "-.5rem"
  }
});

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Grid container>
        <Grid item sm={2} />
        <Grid item sm={4}>
          <Box className={classes.containerSolutions}>
            <div className={classes.aboveLine} />
            <div className={classes.nextLine} />
            <div className={classes.underLine} />
            <div className={classes.smallLine} />
            <div className={classes.smallLineBottom} />
            <Typography className={classes.title}>Tageline here</Typography>
            <Typography className={classes.subtitle} color>
              Web Solutions
            </Typography>
            <Typography className={classes.descp}>Description Here</Typography>
            <Box sx={{ position: "relative" }}>
              <div className={classes.btnLine} />
              <div className={classes.btnLineLeft} />
              <Button variant="outlined" className={classes.jionBtn}>
                Join us NOW
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid item sm={6}>
          <img
            src={mediaImage}
            className={classes.mediaImg}
            alt="media image"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Header;
