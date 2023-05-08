import { Box, useTheme } from "@mui/material";
import { Header, GeographyChart } from "../../components";
import { tokens } from "../../hooks/theme";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Header title="Geography" subtitle="Simple Geography Chart" />

      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
        mt="20px"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
