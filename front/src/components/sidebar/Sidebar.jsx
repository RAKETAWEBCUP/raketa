import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { Typography, useTheme } from '@mui/material'

// Context
import { useStateContext } from '../../contexts/ContextProvider';

// icons
import { AddCircleOutline, SubjectOutlined } from '@mui/icons-material';

// Redirect
import { useLocation, useNavigate } from 'react-router-dom';

// Topbar
import Topbar from '../topbar/Topbar';
import { tokens } from '../../hooks/theme';

function Sidebar(props) {
  // Color and theme
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { drawerWidth } = useStateContext();

  const navigate = useNavigate();
  const location = useLocation();
  
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuList = [
    {
      title: 'Home',
      menuItems: [
        {
          text: 'Tableau de bord',
          icon: <HomeOutlinedIcon />,
          path: '/'
        },
      ]
    },
    {
      title: 'Data',
      menuItems: [
        {
          text: 'Team',
          icon: <PeopleOutlinedIcon />,
          path: '/team'
        },
        {
          text: 'Dreamers',
          icon: <ContactsOutlinedIcon />,
          path: '/contacts'
        }
      ]
    },
  ]

  const drawer = (
    <Box sx={{ height: "100%", background: colors.primary[400] }}>
      <Toolbar>
        <Typography variant="h6" display={'block'} margin={'auto'} letterSpacing={1}>
          TEAM DREAMLY
        </Typography>
      </Toolbar>
      {menuList.map(menu => (
        <Box 
          key={menu.title}
          sx={{
              '& .css-rr7dug-MuiDivider-root, & .css-9mgopn-MuiDivider-root': {
                borderColor: colors.line,
              },
          }}
        >
          <Divider />
          <List>
            {menu.menuItems.map(item => (
              <ListItem 
                sx={{
                  '& .active': {
                    color: colors.blueAccent[100],
                    backgroundColor: colors.activeBgColorLink,
                    boxShadow: '0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)'
                  },
                  
                  '& .active:hover': {
                    color: 'currentColor',
                  },

                  '& .css-havevq-MuiSvgIcon-root' : {
                    fill: location.pathname == item.path ? colors.blueAccent[100] : 'currentColor'
                  },

                  '& :hover .css-havevq-MuiSvgIcon-root' : {
                    fill: 'currentColor'
                  },

                  // link:hover dark mode
                  '& .active.css-7tr4rn-MuiButtonBase-root-MuiListItemButton-root:hover': {
                    backgroundColor: 'rgba(51, 153, 255, 0.24)'
                  },

                  '& .css-7tr4rn-MuiButtonBase-root-MuiListItemButton-root:hover': {
                    backgroundColor: 'rgba(19, 47, 76, 0.4)'
                  },

                  // link:hover light mode 
                  '& .css-ydfnyo-MuiButtonBase-root-MuiListItemButton-root:hover': {
                    backgroundColor: 'rgb(243, 246, 249)'
                  },

                  '& .active.css-ydfnyo-MuiButtonBase-root-MuiListItemButton-root:hover': {
                    backgroundColor: 'rgba(0, 127, 255, 0.12)',
                  }

                }}
                key={item.text} 
                disablePadding
              >
                <ListItemButton
                  onClick={() => navigate(item.path)}
                  className={ location.pathname == item.path ? 'active' : null }
                  sx={{
                    margin: '4px 16px',
                    borderRadius: '8px',
                  }}
                  disableRipple
                >
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
        
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        '& .css-15b8vjn-MuiPaper-root-MuiDrawer-paper, & .css-12i7wg6-MuiPaper-root-MuiDrawer-paper': {
          backgroundColor: 'transparent !important',
          borderColor: colors.line,
          boxShadow: 1
        }
      }}
    >
      <Topbar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Sidebar.propTypes = {
  window: PropTypes.func,
};

export default Sidebar;