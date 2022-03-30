import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  title: {
    fontSize: "10px",
    letterSpacing: ".2rem",
  },
  subtitle: {
    fontSize: "1.9rem",
    fontWeight: 700,
    textTransform: "uppercase",
  },
  underline: {
    height: "0.25rem",
    width: "7rem",
    background: "#1079C0",
    margin: ".5rem auto",
  },
  description: {
    fontSize: "10px",
    margin: "1rem 0 3rem 0",
  },
});

const Feature1 = () => {
  const classes = useStyles();

  return (
    <Box textAlign="center">
      <Typography className={classes.title}>NEWS FROM BLOG</Typography>
      <Typography className={classes.subtitle}> LATEST NEWS & blog</Typography>
      <div className={classes.underline}></div>
      <Typography className={classes.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore
      </Typography>
    </Box>
  );
};
export default Feature1;
