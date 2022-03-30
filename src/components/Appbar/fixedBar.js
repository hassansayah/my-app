import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import {FaPhone} from "react-icons/fa";
import {IoIosMail} from 'react-icons/io';


const FixedBar = () => {
  return (
    <AppBar
      position="static"
      align
      sx={{
        backgroundColor: "#193A63",
        height: "36px",
        display: "flex",
        justifyContent: "center",
        px: 25,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center">
          <FaPhone />

          <Typography  sx={{mr: 4, ml: 2, fontSize: '.7rem'}}>
            +2 40.993.7266
          </Typography>
            <IoIosMail/>
          <Typography  sx={{ ml: 2, fontSize: '.7rem'}}>
            info@evotech.com{" "}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <FaFacebookF />
          <AiFillYoutube style={{ margin: "1.5rem" }} />
          <AiOutlineGooglePlus style={{ margin: "1.5rem" }} />
          <AiOutlineInstagram />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default FixedBar;
