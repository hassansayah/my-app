import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const ServiceCard = ({ image, name, information }) => {
  return (
    <>
      <img
        src={image}
        alt="image"
        style={{ marginRight: ".8rem", height: "3rem" }}
      />
      <Box>
        <Typography
          sx={{
            color: "#FFFFFF",
            textTransform: "uppercase",
            fontSize: ".8rem",
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            color: "#FFFFFF",
            lineHeight: 1.2,
            fontSize: ".6rem",
            marginBottom: 0,
          }}
        >
          {information}
        </Typography>
      </Box>
    </>
  );
};
export default ServiceCard;
