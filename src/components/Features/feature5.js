import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";
import Image2 from "../../images/Mask Group 10.png";

const useStyles = makeStyles({
  
  nextline: {
    position: "absolute",
    height: "2rem",
    width: ".20rem",
    background: "#E9E9E9",
    top: "17.5rem",
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
  image: {
    width: "100%",
    height: "15rem",
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
    paddingBottom: ".4rem",
  },
});
const Feature5 = () => {
  const classes = useStyles();

  return (
    <Paper elevation={0}>
      <div className={classes.nextline}/>
      <div style={{position: 'relative', padding: 0}}>
      <img src={Image2} alt="Mask Group " className={classes.image} />
      <Button variant="contained" className={classes.blogBtn}>
        Blog
      </Button>
      </div>
      <Box sx={{ px: 4, pt: 2  }}>
        <Typography className={classes.title}>
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
        <Typography  className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et
        </Typography>
      </Box>
    </Paper>
  );
};
export default Feature5;
