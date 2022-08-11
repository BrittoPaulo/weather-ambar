import React from 'react'
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';


function index({open = false, message, severity = 'success'}) {
  
  return (    
    <Snackbar open={open} autoHideDuration={6000} >
      <MuiAlert elevation={6} severity={severity} variant="filled"  >{message}</MuiAlert>        
  </Snackbar>
  )
}

export default index