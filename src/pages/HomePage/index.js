import Header from "../../components/Header/index";
import Content from "../../components/Content/"
import Features from "../../components/Features";
import Team from "../../components/Team";
import Clinets from "../../components/Clients";
import { Box } from "@mui/material";
import Services from "../../components/Services";
import Partner from "../../components/PartnerBusiness";
import Business from "../../components/Business";
const HomePage = () => {
  return (
    <Box>
      <Header />
      <Content />
      <Services />
      <Features />
      <Partner />
      <Team />
      <Clinets />
      <Business />
    </Box>
  );
};
export default HomePage;
