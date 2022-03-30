import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import SectionImage from "../../images/Section.png";

const useStyles = makeStyles({
  fixedContainer: {
    backgroundColor: "#FFFFFF",
    height: "3.5rem",
  },
  container: {
    backgroundImage: `url(${SectionImage})`,
    backgroundSize: "cover",
    height: "17rem",
    backgroundColor: "#1E61AA",
    padding: "2rem 8rem",
    color: "#FFFFFF"
  },
  title: {
    textTransform: "uppercase",
    fontSize: ".9rem",
    
  },
  subtitle: {
    fontSize: "2rem",
    fontWeight: 700,
    textTransform: "uppercase",
  },
  info: {
    fontSize: "1.3rem",
  },
  description: {},
  proposalBtn: {
    marginTop: "2rem",
    padding: ".5rem 2.3rem ",
    borderRadius: 25,
    color: "#FFFFFF",
    filter: "brightness(70%)",
    backgroundColor: "#000000",
    "&:hover": {
      backgroundColor: "#090000",
    },
  },
});

const Partner = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.fixedContainer} />
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        className={classes.container}
      >
        <Typography  className={classes.title}>
          We are your partner to make your business always better
        </Typography>
        <Typography  className={classes.subtitle}>
          Ready To Grow Your Business
        </Typography>
        <Typography  className={classes.info}>
          Fill Out The Form Below And One Of Our Team Will
        </Typography>
        <Typography  className={classes.description}>
          Contact You Personally
        </Typography>
        <Button className={classes.proposalBtn}>GET PROPOSAL</Button>
      </Box>
    </>
  );
};
export default Partner;
