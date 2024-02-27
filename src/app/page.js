'use client'
import Link from 'next/link';
import * as React from 'react';
import Main from './Components/Main';

// BIBLIOTECA
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import { styled, useTheme } from '@mui/material/styles';

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ArticleIcon from '@mui/icons-material/Article';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import GroupsIcon from '@mui/icons-material/Groups';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

//FUNÇÃO DA PÁGINA

export default function Home({children}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const menuItems = [
    { text: 'Cadastrar Empresa', icon: <CorporateFareIcon />, href: `/cadastroEmpresas`},
    { text: 'Cadastrar Funcionário', icon: <GroupAddIcon />, href:'/cadastroColaborador' },
    { text: 'Controle de Ponto', icon: <ArticleIcon />, href:'/controleDePonto'},
    { text: 'Gerenciar Equipe', icon: <GroupsIcon />, href:'/gerenciarEquipe' },
    { text: 'Calendário', icon: <CalendarMonthIcon />, href:'/calendario'},
    { text: 'FAQ', icon: <QuestionMarkIcon />, href:'/FAQ'},
  ];

  return (
 
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar 
          sx={{ backgroundColor: '#818274' }} 
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <img alt="logo-ponto-go" src="/images/logo.png" className='max-w-44 m-auto' />
         

        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        
        <Stack
          direction= "row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          mt={2.5}
          sx={{ display: open ? 'flex' : 'none'}}
        >
            {/* <img alt="logo-ponto-go" src="/images/logo.png" className='max-w-44 m-auto' /> */}
          </Stack>

        <Divider />
        
        <Stack
          direction= "column"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          mt={2.5}
          sx={{ display: open ? 'flex' : 'none'}}
          >
            <Avatar
              alt="ADM"
              src="/images/funcionaria.jpg"
              sx={{width: 60, height:60 }}
            />
            <h1>Angela Lima</h1>
            <p>Developer Junior</p>
            <Button variant="outlined" color="secondary" startIcon={<AccessAlarmIcon />}>
              Registrar Ponto
            </Button>
          </Stack>
            
        <List>
            {menuItems.map((item, index) => (
                <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
                  <Link href={item.href}>

                    <ListItemButton
                      sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                      }}
                     >
                      <ListItemIcon
                      sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                      }}
                      >
                      {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>

                  </Link>
                
                </ListItem>         
            ))}
        </List>

      </Drawer>
      <Main>{children}</Main> 
    </Box>
  );
}


