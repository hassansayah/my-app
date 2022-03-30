import { Paper, Typography } from "@mui/material";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGooglePlusSquare } from "react-icons/fa";
import Box from "@mui/material/Box";
import iconImage1 from "../../images/facebook.png"; 
import iconImage2 from "../../images/twitter.png";
import iconImage3 from "../../images/google.png"; 
import iconImage4 from "../../images/icon.png"; 
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  
  title :{
    fontSize: '.8rem',
     fontFamily: 'monospace',
  },
  subtitle :{
color: "#175293",
fontSize: '.5rem'
  },
});
const TeamCard = ({image}) => {
  const classes = useStyles();
  return (
    <Paper elevation={0} sx={{bgcolor: 'background.default', mx: 1.5 }}>
      <img
        src={image}
        alt="image Card"
        style={{ width: "100%", height: "8.5rem" }}
      />
      <Typography className={classes.title}>Dr. Mohamed Ahmed</Typography>
      <Typography color="secondary" className={classes.subtitle}> Chairman of Board of Directors</Typography>
      <Box sx={{p: 3}}>
        {/* <FaFacebookSquare color="#3B65C8" /> */}
        {/* <FaTwitterSquare color="#11A1D6" /> */}
        {/* <FaGooglePlusSquare color="#D93535" /> */}

        <img src={iconImage1} alt="icon" style={{width: '1.5rem', height: '1.5rem'}}/>
        <img src={iconImage2}  alt="icon" style={{width: '1.5rem', height: '1.5rem', margin: '0 .4rem'}}/>
        <img src={iconImage3} alt="icon" style={{width: '1.5rem', height: '1.5rem'}}/>
        <img src={iconImage4} alt="icon" style={{width: '1.5rem', height: '1.5rem', marginLeft: '.4rem'}}/>

        

      </Box>
    </Paper>
  );
};
export default TeamCard;
