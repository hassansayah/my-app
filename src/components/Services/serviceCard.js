import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  img: {
    marginRight: ".8rem",
    height: "3rem",
    objectFit: "cover",
  },
  title: {
    color: "#FFFFFF",
    textTransform: "uppercase",
    fontSize: ".8rem",
  },
  subtitle: {
    color: "#FFFFFF",
    lineHeight: 1.2,
    fontSize: ".6rem",
    marginBottom: 0,
  },
});
const ServiceCard = ({ image, name, information }) => {
  const classes = useStyles();

  return (
    <>
      <img src={image} alt="image" className={classes.img} />
      <Box>
        <Typography className={classes.title}>{name}</Typography>
        <Typography className={classes.subtitle}>{information}</Typography>
      </Box>
    </>
  );
};
export default ServiceCard;
