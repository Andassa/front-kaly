import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './component/Theme/DarkTheme';
import Home from './component/Home/Home';
import RestaurantDetails from './component/Restaurant/RestaurantDetails';
import Cart from './component/Cart/Cart';
import Profile from './component/Profile/Profile';
import { CustomerRoute } from './Routers/CustomerRoute';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './component/State/Authentication/Action';
import { store } from './component/State/store';

function App() {
  const dispatch=useDispatch()
  const jwt=localStorage.getItem("jw")
  const {auth}=useSelector(store=>store)
  useEffect(()=>{
  dispatch(getUser(auth.jwt || jwt))
  },[auth.jwt])

  return (
  
     <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <CustomerRoute/>
      </ThemeProvider>
  );
}

export default App;
