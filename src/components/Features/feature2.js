import { makeStyles } from "@mui/styles";
import Image from "../../images/Mask Group 8.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Paper, Box } from "@mui/material";

const useStyles = makeStyles({
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
  nextline: {
    position: "absolute",
    height: "2rem",
    width: ".20rem",
    background: "#E9E9E9",
    top: "17.5rem",
  },
  newsBtn: {
    position: "absolute",
    bottom: ".25rem",
    right: 0,
    zIndex: 10,
    padding: ".25rem 1.7rem",
    fontSize: ".7rem",
    borderRadius: 0
  },
  image: {
    width: "100%",
    height: "15rem",
  },
  title: {
     fontSize: ".45rem" ,
     
  },
  subtitle: {
    fontSize: ".8rem",
    fontWeight: 600
  },
  description : {
     fontSize: ".6rem",
      paddingTop: "1rem", 
      paddingBottom: "2rem"
  }
});

const Feature2 = () => {
  const classes = useStyles();

  return (
    <Paper elevation={0}>
      <div className={classes.nextline}></div>
      <div style={{position: 'relative'}}>
      <Button
        size="small"
        variant="contained"
        color="secondary"
        className={classes.janBtn}
      >
        <Typography> 05</Typography>
        JAN
      </Button>
      <Button className={classes.newsBtn} variant="contained">
        News
      </Button>
      <img src={Image} alt="Mask Group " className={classes.image} />
      </div>
      <Box sx={{ px: 4, py: 2 }}>
      
        <Typography  className={classes.title}>
          26/06/2017, POSTED BY
          <Typography
           className={classes.title}
            component="span"
            color="secondary"
          >
            KHALID SAIED
          </Typography>
        </Typography>
        <Typography className={classes.subtitle}>
          THE BEST NEWS TITLE
        </Typography>
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
export default Feature2;
