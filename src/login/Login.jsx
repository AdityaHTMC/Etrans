import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import Logo from '../../src/images/logo.png';
const login = () => {
  return (
    // login page work start //
    <Card className='LoginBx mt50'>
      <CardContent>
        <div className='mt20 mb10'><img src={Logo} alt="Etrans" style={{ width: '90px' }} /></div>
        <h2 className='m0'>Welcome to Etrans</h2>
        <p className='m0 text14'>Please login to your account enter your user id and password</p>
        <div className='mt20'>
          <TextField color="success" className='width100 mb20' required label="Enter Your Name or Username" size="small" />
          <TextField color="success" className='width100 mb20' type="password" required label="Enter Password" size="small" />
          <Link className='customBtnOutline' to="/" variant="contained">Submit <SendIcon /></Link>
        </div>
      </CardContent>
    </Card>
    // login page work end //
  )
}
export default login