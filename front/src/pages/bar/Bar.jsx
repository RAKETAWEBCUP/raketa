import { BarChart, Header } from '../../components'
import { Box } from '@mui/material'

const Bar = () => {
  return (
    <Box>
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh" mt="20px">
        <BarChart />
      </Box>
    </Box>
  )
}

export default Bar