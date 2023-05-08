import { Box } from "@mui/material";
import {Header, LineChart} from "../../components";

const Line = () => {
  return (
    <Box>
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh" mt="20px">
        <LineChart />
      </Box>
    </Box>
  )
}

export default Line