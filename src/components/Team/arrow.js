import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";

const useStyles = makeStyles({
    container : {
        height: '100%', display: 'flex', alignItems: 'center'
    },
   
    Btn: {
      padding: "1.3rem .1rem",
      borderRadius: "25px",
      border: "none",
      backgroundColor: "#165191",
      color:"#FFFFFF",
      "&:hover": {
        backgroundColor: "#BABABA",
      },
    },
  });
  
const Arrow = ({icon}) => {
    const classes = useStyles();

    return (
        <Box className={classes.container} >
        <button variant="contained"  className={classes.Btn}>
        {icon }
      </button>
      </Box>
    )
}
export default Arrow