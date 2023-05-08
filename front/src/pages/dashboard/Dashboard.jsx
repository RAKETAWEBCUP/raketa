import React from 'react'
import { Box, Button, Typography, IconButton, useMediaQuery } from '@mui/material';
import { tokens } from '../../hooks/theme';

import Pie from '../pie/Pie';
import { useTheme } from '@emotion/react';

const Dashboard = () => {

  // Theme & Colors
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);

  // Page Title
  const title = 'DASHBOARD'
  const subtitle ='Welcome to your dashboard'

  // Mobile devise
  const isNonMobile = useMediaQuery("(min-width:800px)");

  return (
    <Pie/>
  )
}

export default Dashboard