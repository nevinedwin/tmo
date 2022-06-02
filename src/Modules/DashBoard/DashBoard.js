import { Divider, Grid } from '@mui/material'
import gsap from 'gsap'
import gsapCore from 'gsap/gsap-core'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useEffect, useRef, useState } from 'react'
import Login from '../Login/Login'
import Signup from '../SignUp/Signup'

const DashBoard = () => {

  const formComponent = useRef()
  const q = gsap.utils.selector(formComponent)
  gsap.registerPlugin(ScrollTrigger)

  const [newUser, setNewUser] = useState(false)

  useEffect(() => {
    gsap.to(q(".slide"), {
      scrollTrigger: {
        trigger: '.slide',
        start: 'top bottom',
        toggleActions: 'restart pause reverse pause'
      },
      xPercent: -100,
      duration: 3,
      ease: 'back'
    })
  }, [])

  console.log({ newUser })

  return (
    <Grid container sx={{ backgroundColor: 'black', width: '100%', height: '100%' }} ref={formComponent}>
      <Grid height={'100%'} width={'100%'}>Evin</Grid>
      <Grid item sx={{
        width: { xs: '0%', md: '50%', lg: '60%' },
        height: '100vh',
        backgroundColor: 'black'
      }}>
      </Grid>
      <Grid
        item
        container
        className='slide'
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