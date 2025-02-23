import { Avatar, Badge, Box, IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { pink } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navbar.css";
import zIndex from '@mui/material/styles/zIndex';
import { Person } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { store } from '../State/store';
export const Navbar = () => {

    const {auth}=useSelector(store=>store)
  
    const navigate=useNavigate();

    const handleAvatarClick=()=>{
        if(auth.user?.role==="ROLE_CUSTOMER"){
            navigate("/my-profile")
        }
        else{
            navigate("/admin/restaurant")
        }
    }

    return (
    <Box
      className="px-5 sticky top--0 z-50 py-[.8rem] bg-[#ffffff] lg:px-20 flex justify-between">
        
        

            <div className="lg:mr-10 cursor-pointer flex items-center">
               <li onClick={()=>navigate("/")} className="logo font-sembold text-black-300 text-2xl">
               Lazy Kaly

               </li>
            </div>   
        <div className='flex items-center space-x-2 lg:space-x-10'>
            <div className="">
                <IconButton sx={{ color: "#fff", boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }}>
                    <SearchIcon sx={{fontSize:"1.5rem", color: "#000"}}/>
                </IconButton>
            </div>
            <div className=''>
              {auth.user?(
              <Avatar onClick={handleAvatarClick} sx={{ bgcolor: "#fff", color: pink.A400, boxShadow: "0 0 10px rgba(0, 0, 0, 3)", color: "#000" }}>
                {auth.user?.fullName[0].toUpperCase()}
                </Avatar>
                ):(
            <IconButton onClick={()=>navigate("/account/login")}>
                <Person/>
            </IconButton>
        )}
            
           </div>
            <div className="">
               <IconButton sx={{ color: "#fff", boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }}>
                <Badge color="primary" badgeContent={3}>
                    <ShoppingCartIcon sx={{fontSize:"1.5rem", color: "#000"}}/>
                </Badge>
                </IconButton>
            </div>
        </div>
    </Box>
  )
}
