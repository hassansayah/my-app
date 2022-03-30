import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Feature1 from "./feature1";
import Feature2 from "./feature2";
import Feature3 from "./feature3";
import Feature4 from "./feature4";
import Feature5 from "./feature5"
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  moreBtn: {
    borderRadius: '25px', 
    marginRight: "1.3rem",
    backgroundColor: "#000000",
    "&:hover": {
      backgroundColor: "#000000",
    },

  },
});

const Features = () => {
  const classes = useStyles();

  return (
    <Box sx={{px: 28 , pt: 8, backgroundColor: "#F5F5F5"}} >    
      <Feature1 />
      <Grid container spacing={3}>
        <Grid item sm={7} sx={{ position: "relative" }}>
          <Feature2/>
          <Feature4 />
        </Grid>
        <Grid item sm={5} sx={{ position: "relative" }}>
          <Feature5/>
          <Feature3 />
          
        </Grid>
        
      </Grid>
      <Box display="flex" justifyContent="center" sx={{pt: 5, pb: 10}}  >
            <Button variant="contained" color="info" className={classes.moreBtn}>More News</Button>
            <Button  variant="contained" sx={{borderRadius: '25px'}}>More Blog</Button>
          </Box>
         
    </Box>
  );
};
export default Features;
