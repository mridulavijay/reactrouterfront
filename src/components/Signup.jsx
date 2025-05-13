import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Signup = () => {
    const [my_name,setName]=useState('Maya');
const [count,setCount]=useState(0);
    function changeName() {
        setName('Harsha');
    }
    function counter() {
        setCount(count+1);
    }
  return (
    <div style={{marginTop:'10%',marginLeft:'40%'}}>
        <h4>Welcome {my_name} to ReactJs Programming</h4>
        <div>
        <TextField variant='outlined' color='secondary' label='First Name'></TextField>
        </div><br></br>
        <div>
        <TextField variant='outlined' color='secondary' label='Email'></TextField>
        </div><br></br>
        <div>
        <TextField variant='outlined' color='secondary' label='Password'></TextField>
        </div><br></br>
        <div>
        <TextField variant='outlined' color='secondary' label='Phone'></TextField>
        </div> <br></br>
        <div>
            <Button color='secondary' variant='contained' onClick={changeName}>Register</Button>
        </div>
        <div>
            <Button color='success' variant='contained' onClick={counter}>Count</Button>
            <p>The count button was clicked {count} times</p>
        </div>
    </div>
  )
}

export default Signup