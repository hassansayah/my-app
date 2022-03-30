import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import surface from "../../images/surface1.png";
import clock from "../../images/clock (6).png";
import research from "../../images/research.png";
const useStyles = makeStyles({
  container: {
    backgroundColor: "#F5F5F5",
  },
  img: {
    width: "2rem",
  },
  title : {
   fontSize: ".95rem",
   marginBottom: '.5rem'
  },
  subtitle: {
  fontSize: '.7rem',
  },
});

const Content3 = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container} sx={{ py: 5, px: 28 }}>
      <Grid item sm={4.5} display="flex" alignItems="center">
        <Box sx={{ mr: 2 }}>
          <img src={clock} alt="surface" className={classes.img} />
        </Box>
        <Box>
          <Typography className={classes.title}>
            Fast Process
          </Typography>
          <Typography className={classes.subtitle} >
            The process takes minutes and you
          </Typography>
          <Typography className={classes.subtitle}>
            {" "}
            get instant quots online.
          </Typography>
        </Box>
      </Grid>
      <Grid item sm={4.5} display="flex" alignItems="center">
        <Box sx={{ mr: 2 }}>
          <img src={research} alt="surface" className={classes.img} />
        </Box>
        <Box>
          <Typography className={classes.title} >
            Compare Prices
          </Typography>
          <Typography className={classes.subtitle}>
            Compare quotes online and find the
          </Typography>
          <Typography className={classes.subtitle}>
            policy that’s right for you.
          </Typography>
        </Box>
      </Grid>
      <Grid item sm={3} display="flex" alignItems="center">
        <Box sx={{ mr: 2 }}>
          <img src={surface} alt="surface" className={classes.img} />
        </Box>
        <Box>
          <Typography className={classes.title} >
            Guaranteed Deal
          </Typography>
          <Typography className={classes.subtitle}>
            We guarantee the cheapest car insurance ever!
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
export default Content3;
