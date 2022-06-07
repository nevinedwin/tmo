import { Grid } from '@mui/material'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useEffect, useRef, useState } from 'react'
import Login from '../Login/Login'
import Signup from '../SignUp/Signup'
import { Games } from './components'


const DashBoard = () => {


  const t1 = useRef()

  const [newUser, setNewUser] = useState(false)



  console.log({ newUser })

  return (
    <Grid container id='content' sx={{
      backgroundColor: 'black', width: '100%', height: '100vh',
    }} >
      <Grid
        container
        sx={{
          height: '100vh',
          width: '100%',
        }}>
        <Grid item sx={{
          width: { xs: '0%', md: '50%', lg: '60%' },
          height: '100vh',
          // backgroundColor: 'black'
        }}>
        </Grid>
        <Grid
          item
          container
          sx={{
            width: { xs: '100%', md: '50%', lg: '40%' },
            height: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {newUser ?
            <Signup setNewUser={setNewUser} /> :
            <Login setNewUser={setNewUser} />}
        </Grid>
      </Grid>
      {
        [1, 2, 3, 4].map((item, index) => (
          index % 2 === 0 ? <Games even={true} /> : <Games even={false} />
        ))
      }
    </Grid>
  )
}

export default DashBoard