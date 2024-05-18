//import logo from './logo.svg';
import './App.css';

import Header from './header/Header';
import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import ScrollToTop from './ScrollToTop/ScrollToTop.jsx';
import { CssBaseline } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import MainScreen from './pages/MainScreen.jsx';
import Login from './login/Login.jsx';
import MyProfile from './my-profile/MyProfile.jsx';
import ClearInvoice from './pages/ClearInvoice.jsx';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function App() {
  const theme = useTheme();
  const location = useLocation()
  const isloginpage = location.pathname === '/login'
  const [open, setOpen] = React.useState(false);

  return (
    <>
    {/* main wrapper start */}
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/****** top bar part start *******/}
      {
        !isloginpage ?
        <>
        <Header open={open} setOpen={setOpen}/>

        </>
        :
        null
      }
      {/******* top bar part end *******/}

      {/******* body part start *******/}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Routes>
          <Route exact path='/' element={<MainScreen />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/MyProfile' element={<MyProfile />} />
          <Route path='/ClearInvoice' element={<ClearInvoice />} />

        </Routes>
      </Box>
      {/******* body part end *******/}

    </Box>
      {/* main wrapper start */}
    </>
  );
}

export default App;
