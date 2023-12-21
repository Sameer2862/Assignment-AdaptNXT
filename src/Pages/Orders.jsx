import React from 'react'
import Sidenav from '../Components/Sidenav'
import Box from '@mui/material/Box';
import Grid from '../Components/Grid';
import Navbar from '../Components/Navbar'
import Lists from '../Settings/List';



function Order() {
  return (
    <> 
    <Navbar />
    <Box height={100}  />
     <Box sx={{ display: 'flex' }}>
    <Sidenav />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
     <Lists/>
      </Box>
    </Box>
    
    </>
  )
}

export default Order;