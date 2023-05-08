import React from 'react';
import { Typography, Box, useTheme } from '@mui/material';
import { tokens } from '../../hooks/theme';

const Header = ({ title, subtitle }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box>
        <Typography 
            variant="h2" 
            color={colors.grey[100]} 
            fontWeight="bold" 
            sx={{ mb: '5px' }}
        >
            {title}
        </Typography>  
      <Typography 
        variant="h5" 
        color={colors.blueAccent[100]}
      >
        {subtitle}
      </Typography>
    </Box>
  )
}

export default Header