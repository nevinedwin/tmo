import { Box, Button, Card, CardMedia, Divider, Grid, Typography } from '@mui/material'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
// import ScrollSmoother from 'gsap/ScrollSmoother'
import React, { useEffect, useRef, useState } from 'react'
import Login from '../Login/Login'
import Signup from '../SignUp/Signup'
import cardImg from '../../Assets/img/cardImg.jpg'
import { LocalFireDepartment } from '@mui/icons-material'

const DashBoard = () => {

  gsap.registerPlugin(ScrollTrigger)

  // const smoother = ScrollSmoother.create({
  //   content: '#content',
  //   smooth: 3,
  //   effects: true
  // })

  const textBox = useRef()
  const cards = useRef()
  const q = gsap.utils.selector(textBox)
  const tl = useRef()
  const tl1 = useRef()

  const [newUser, setNewUser] = useState(false)


  useEffect(() => {
    tl.current = gsap.timeline()
      .from(cards.current, {
        scrollTrigger: {
          trigger: cards.current,
          toggleActions: 'restart pause reverse pause',
          start: 'top 700px',
          end: 'bottom bottom',
          // markers: true,
          scrub: 1,
          duration: 3,
          opacity: 0
        },
        xPercent: 100
      }).to(cards.current, {
        xPercent: 0,
        ease: 'back'
      })

    tl1.current = gsap.timeline()
      .from(q('#mainHeading'), {
        scrollTrigger: {
          trigger: '#mainHeading',
          toggleActions: 'play pause reverse pause',
          start: '100px 700px',
          end: '120px bottom',
          scrub: 3,
          // markers: true
        },
        scale: 0,
        opacity: 0,
        delay: .5,
        ease: 'back',
        duration: 2
      }).from(q('#boxContent'), {
        scrollTrigger: {
          trigger: '#boxContent',
          toggleActions: 'play pause reverse pause',
          start: '180px 700px',
          end: '200px bottom',
          scrub: 3,
          // markers: true
        },
        scale: 0,
        opacity: 0,
        delay: 1,
        ease: 'back',
        duration: 2
      }).from(q('#boxContent1'), {
        scrollTrigger: {
          trigger: '#boxContent1',
          toggleActions: 'play pause reverse pause',
          start: '180px 700px',
          end: '200px bottom',
          scrub: 3,
          markers: true
        },
        scale: 0,
        opacity: 0,
        delay: 1,
        ease: 'back',
        duration: 2
      }).from(q('#playButton'), {
        scrollTrigger: {
          trigger: '#playButton',
          toggleActions: 'play pause reverse pause',
          start: 'top 700px',
          end: 'bottom bottom',
          scrub: 3,
          markers: true
        },
        scale: 0,
        opacity: 0,
        delay: 1,
        ease: 'back',
        duration: 2
      })
  }, [])

  console.log({ newUser })

  return (
    <Grid container id='content' sx={{ backgroundColor: 'black', width: '100%', height: '100%' }} >
      <Grid item sx={{
        width: { xs: '0%', md: '50%', lg: '60%' },
        height: '100vh',
        backgroundColor: 'black'
      }}>
      </Grid>
      <Grid
        item
        container
        sx={{
          width: { xs: '100%', md: '50%', lg: '40%' },
          height: '100vh',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        {newUser ?
          <Signup setNewUser={setNewUser} /> :
          <Login setNewUser={setNewUser} />}
      </Grid>
      {[1, 2, 3, 4, 5].map(item => (<Grid
        container
        sx={{
          height: '100%',
          flexDirection: { xs: 'column', md: 'row' },
          backgroundColor: 'black'
        }}>
        <Grid
          item
          container
          sx={{
            width: { xs: '100%', md: '50%' },
            height: { xs: '50%', md: '100%' },
            justifyContent: 'center',
            alignItems: 'center',
            flexShrink: 0
          }}>
          <Box
            ref={textBox}
            sx={{
              width: '700px',
              height: '700px',
              display: 'flex',
              justifyContent: 'flex-start',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Typography
              id='mainHeading'
              variant='h3'
              sx={{
                fontWeight: 800
              }}
              color='primary.main'>Main Heading</Typography>
            <Typography variant='h6' id="boxContent" color="primary.main">content</Typography>

            <Typography variant='body1' id="boxContent1" mt={'200px'} mb={'100px'} color="white">contentcontentcontentcontentcontentcontentcontentcontentcontent contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcon tentcontentcontentcontentco ntentcontentcontentcontentcontentconten tcontentcontentcontentcontentcontentco ntentcontentcontentcontentcontent contentcontentcontentcontentcontentconte ntcontentcontentcontentcontentcontentcon tentcontentcontentcontentcontentcontentcontentcontentc ontentcontentcontentcontentcontentcontentcontentcontentconten tcontent</Typography>
            <Button variant='contained' id='playButton'>Play Game</Button>
          </Box>
        </Grid>
        <Divider />
        <Grid
          item
          container
          sx={{
            width: { xs: '100%', md: '50%' },
            height: { xs: '50%', md: '100%' },
            justifyContent: 'flex-end',
            alignItems: 'center',
            overflow: 'hidden'
          }}>
          <Card
            ref={cards}
            className='slide'
            elevation={0}
            sx={{
              width: '700px',
              height: '700px',
              borderRadius: 0,
            }}>
            <CardMedia
              component={'img'}
              height='100%'
              image={cardImg}
            />
          </Card>
        </Grid>

      </Grid>))}

    </Grid>
  )
}

export default DashBoard