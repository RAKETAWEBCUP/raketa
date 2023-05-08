import { Box, Toolbar } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components'

// Context
import { useStateContext } from '../contexts/ContextProvider';

const RootLayouts = () => {
  const { drawerWidth } = useStateContext();
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  )
}

export default RootLayouts