import { Box } from "@mui/material";
import { Header, PieChart } from "../../components";
const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Schéma qui représente :" subtitle="Beau rêves et Cauchemars" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
