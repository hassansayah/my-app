import Grid from "@mui/material/Grid";
import Image1 from "../../images/Mask Group 12.png";
import Image2 from "../../images/Mask Group 13.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { Paper } from "@mui/material";

const useStyles = makeStyles({
  container: {
    marginTop: "1.3rem",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "10rem",
  },
  nextline: {
    position: "absolute",
    height: "2rem",
    width: ".20rem",
    background: "#E9E9E9",
    top: "11rem",
  },
  blogBtn: {
    position: "absolute",
    bottom: ".25rem",
    right: 0,
    zIndex: 10,
    padding: ".25rem 1.7rem",
    fontSize: ".7rem",
    borderRadius: 0
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
    paddingTop: "1rem",
    paddingBottom: "1rem",
  },
  Btn: {
    position: "absolute",
    bottom: ".25rem",
    right: 0,
    zIndex: 10,
    padding: ".25rem 1.7rem",
    fontSize: ".7rem",
    borderRadius: 0
  },
});

const Feature4 = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item sm={5.7} sx={{ marginRight: "1.6rem" }}>
        <Paper elevation={0}>
          <div className={classes.nextline} />
          <div style={{ position: "relative" }}>
            <img src={Image1} alt="Mask Group " className={classes.image} />
            <Button variant="contained" className={classes.blogBtn}>
              Blog
            </Button>
          </div>
          <Box sx={{ p: "1rem" }}>
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
            <Typography className={classes.subtitle}>VIDEO POST </Typography>
            <Typography className={classes.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item sm={5.7}>
        <Paper elevation={0}>
          <div className={classes.nextline} />
          <div style={{ position: "relative" }}>
            <img src={Image2} alt="Mask Group " className={classes.image} />
            <Button variant="contained" className={classes.Btn}>
              Blog
            </Button>
          </div>
          <Box sx={{ p: "1rem" }}>
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
            <Typography className={classes.subtitle}>
              PROFESSIONAL BIDDING{" "}
            </Typography>
            <Typography className={classes.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default Feature4;
