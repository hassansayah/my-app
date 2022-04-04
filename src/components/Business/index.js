import { makeStyles } from "@mui/styles";
import {  Box, Typography, Grid, Button } from "@mui/material";
import officeImage from "../../images/office.png";

const useStyles = makeStyles({
  container: {
   backgroundImage: `url(${officeImage})`,
    backgroundSize: "cover",
    height: "20rem",
    marginTop: "3rem",

  },
  content: {
    backgroundColor: "#2165B0",
    borderRadius: "25px",
    padding: "4rem 3rem",
    textTransform: "uppercase",
    transform: "translateY(-3rem)",
  },
  title: {
    fontSize: "2.3rem",
  },
  subtitlle: {
    fontSize: "1.3rem",
    marginBottom: "1.1rem",
  },
  description: {
    fontSize: ".65rem",
  },
  subscribeContainer : {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
    paddingTop: '.5rem',
  },
  input: {
    border: 'none',
    outlineWidth: 0, 
    padding: '.7rem .5rem',
     width: "90%",
     marginBottom: '1rem'
  },
  subscribeBtn: {
    backgroundColor: "#111111",
    width: "95%",
    color: "#FFFFFF",
    padding: ".4rem .5rem",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "#130F0F",
    },
  },
});
const Business = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container} sx={{ px: 28 }}>
      <Grid container className={classes.content}>
        <Grid item sm={6}  color="#FFFFFF">
          <Typography className={classes.title}>NEWSLETTER!..</Typography>
          <Typography className={classes.subtitlle}>
            Subscribe to our newsletter
          </Typography>
          <Typography className={classes.description}>
            Subscribe to our newsletter, so that you can be the first to know
            about new offers and promotions.
          </Typography>
        </Grid>
        <Grid item sm={1}/>
        <Grid
          item
          className={classes.subscribeContainer}
          sm={5}
        >
            <input type="name" placeholder="Name" className={classes.input} />
            <input type="email" placeholder="Email" className={classes.input} />
          <Button className={classes.subscribeBtn}>subscribe</Button>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Business;
