import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" color='secondary'>
      <Toolbar>
       
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          StudentApp
        </Typography>
      <Link to={'/signup'}> <Button style={{color:'white'}}>Signup</Button></Link> 
     <Link to={'/'}>  <Button style={{color:'white'}}>Home</Button></Link> 
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar