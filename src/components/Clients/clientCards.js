import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    border: "1px solid #BABABA",
    height: "4.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: "2.7rem",
  },
});
const ClientCard = ({ image, width }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container} sx={{ mx: 1 }}>
      <img src={image} alt="image Card" width={width} className={classes.img} />
    </Box>
  );
};
export default ClientCard;
