import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import manImage from "../../images/man.png";
import arrowImage from "../../images/Arrow.png";
import designImage from "../../images/design.png";
import hositing from "../../images/hositing.png";
import phoneImage from "../../images/phone.png";
import laptop from "../../images/laptop.png";
import { makeStyles } from "@mui/styles";
import ServiceCard from "./serviceCard";
const useStyles = makeStyles({
  container: {
    backgroundColor: "#2166B1",
    position: "relative",
  },
  arrowImage: {
    width: "150%",
    marginTop: "3rem",
    position: "absolute",
    bottom: "-1.5rem",
    left: "-8.2rem",
  },
  manImage: {
    width: "100%",
    height: "100%",
  },
  serviceContainer: {
    backgroundColor: "#2166B1",
    paddingTop: "2.5rem",
    color: "#FFFFFF",
  },
  title: {
    fontSize: "1.7rem",
  },
  subtitle: {
    fontSize: "1.4rem",
    fontWeight: 600,
  },
  info: {
    fontSize: ".6rem",
    letterSpacing: ".45rem",
    paddingTop: ".5rem",
    paddingBottom: "1rem",
  },
  description: {
    fontSize: ".9rem",
    lineHeight: 1.2,
    letterSpacing: .3
  },
  webContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#104E92",
    padding: "1rem 1rem 2rem 1rem",
    alignItems: "center",
    marginRight: "1rem",
    position: "relative",
  },
  developContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#104E92",
    padding: "1rem 1rem 2rem 1rem",
    alignItems: "center",
    filter: "brightness(110%)",
  },
  mobileContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#104E92",
    padding: "1rem 1rem 2rem 1rem",
    alignItems: "center",
    filter: "brightness(110%)",
    marginRight: "1rem",
    marginTop: "1rem",
  },
  hostingContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#104E92",
    padding: "1rem 1rem 2rem 1rem",
    alignItems: "center",
    filter: "brightness(110%)",
    marginTop: "1rem",
    position: "relative",
  },
  nextLine: {
    position: "absolute",
    height: "30%",
    width: ".1rem",
    background: "#113D6D",
    bottom: "-.4rem",
    left: "-.4rem",
  },
  underLine: {
    position: "absolute",
    height: ".1rem",
    width: "10%",
    background: "#113D6D",
    bottom: "-.4rem",
    left: "-.4rem",
  },
  aboveLine: {
    position: "absolute",
    height: ".1rem",
    width: "10%",
    background: "#113D6D",
    top: "-.4rem",
    right: "-.4rem",
  },
  rightLine: {
    position: "absolute",
    height: "30%",
    width: ".1rem",
    background: "#113D6D",
    top: "-.4rem",
    right: "-.4rem",
  },
  webLine: {
    position: "absolute",
    height: "70%",
    width: ".15rem",
    background: "#FFFFFF",
    bottom: "-.3rem",
    left: "-.3rem",
  },
  webUnderLine: {
    position: "absolute",
    height: ".15rem",
    width: "50%",
    background: "#FFFFFF",
    bottom: "-.3rem",
    left: "-.3rem",
  },
  webAboveLine: {
    position: "absolute",
    height: ".15rem",
    width: "55%",
    background: "#FFFFFF",
    top: "-.3rem",
    right: "-.3rem",
  },
  webRightLine: {
    position: "absolute",
    height: "30%",
    width: ".15rem",
    background: "#FFFFFF",
    top: "-.3rem",
    right: "-.3rem",
  },
});
const Services = () => {
  const classes = useStyles();
  return (
    <Grid container sx={{ height: "80vh" }}>
      <Grid item sm={2} className={classes.container}>
        <img
          src={arrowImage}
          alt="arrow image"
          className={classes.arrowImage}
        />
      </Grid>
      <Grid item sm={6} className={classes.serviceContainer}>
        <Typography className={classes.title}>Our Services</Typography>
        <Typography className={classes.subtitle}>
          {" "}
          Evolution Technology
        </Typography>
        <Typography className={classes.info}> MAKE WISHES IT TRUE</Typography>
        <Typography className={classes.description}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor
        </Typography>
        <Typography className={classes.description}>
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </Typography>
        <Typography className={classes.description}>
          At vero eos et accusam et justo duo dolores et ea rebum.{" "}
        </Typography>
        <Grid container sx={{ mt: 4 }}>
          <Grid item sm={5.5} className={classes.webContainer}>
            <div className={classes.webLine} />
            <div className={classes.webUnderLine} />
            <div className={classes.webAboveLine} />
            <div className={classes.webRightLine} />
            <ServiceCard
              image={designImage}
              name="web design"
              information=" Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy."
            />
          </Grid>
          <Grid item sm={5.5} className={classes.developContainer}>
            <div className={classes.nextLine} />
            <div className={classes.underLine} />
            <div className={classes.aboveLine} />
            <div className={classes.rightLine} />
            <ServiceCard
              image={laptop}
              name="Development "
              information=" Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy."
            />
          </Grid>
          <Grid item sm={5.5} className={classes.mobileContainer}>
            <div className={classes.nextLine} />
            <div className={classes.underLine} />
            <div className={classes.aboveLine} />
            <div className={classes.rightLine} />

            <ServiceCard
              image={phoneImage}
              name="Mobile App"
              information=" Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy."
            />
          </Grid>
          <Grid item sm={5.5} className={classes.hostingContainer}>
            <div className={classes.nextLine} />
            <div className={classes.underLine} />
            <div className={classes.aboveLine} />
            <div className={classes.rightLine} />
            <ServiceCard
              image={hositing}
              name="Hosting Services"
              information=" Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy."
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={4} sx={{ height: "100%" }}>
        <img src={manImage} alt="man image" className={classes.manImage} />
      </Grid>
    </Grid>
  );
};
export default Services;
