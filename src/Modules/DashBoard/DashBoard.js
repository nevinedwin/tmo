import { Divider, Grid } from '@mui/material'
import React, { useState } from 'react'
import Login from '../Login/Login'
import Signup from '../SignUp/Signup'

const DashBoard = () => {

  const [newUser, setNewUser] = useState(false)
  console.log({ newUser })

  return (
    <Grid container sx={{ backgroundColor: 'black', width: '100%', height: '100%' }}>
      <Grid item sx={{
        width: { xs: '0%', md: '50%', lg: '60%' },
        height: '100vh'
      }}>
      </Grid>
      <Grid
        item
        container
        sx={{
          width: { xs: '100%', md: '50%', lg: '40%' },
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',

        }}>
        {newUser ? <Signup setNewUser={setNewUser} /> :
          <Login setNewUser={setNewUser} />}
      </Grid>
      <Grid
        container
        sx={{
          height: '100%',
          flexDirection: { xs: 'column', md: 'row' }
        }}>
        <Grid
          item
          sx={{
            width: { xs: '100%', md: '50%' },
            backgroundColor: 'black',
            height: { xs: '50%', md: '100%' }
          }}>

        </Grid>
        <Divider />
        <Grid
          item
          sx={{
            width: { xs: '100%', md: '50%' },
            height: { xs: '50%', md: '100%' }
          }}></Grid>

      </Grid>
    </Grid>
  )
}

export default DashBoard