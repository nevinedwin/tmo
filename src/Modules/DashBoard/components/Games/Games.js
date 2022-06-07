
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import cardImg from '../../../../Assets/img/cardImg.jpg'
import React, { useEffect, useRef } from 'react'
import { Box, Button, Card, CardMedia, Divider, Grid, Typography } from '@mui/material'


const Games = ({ even }) => {

   gsap.registerPlugin(ScrollTrigger)

   const textBox = useRef()
   const mainHeading = useRef()
   const subHeading = useRef()
   const content = useRef()
   const gameButton = useRef()
   const cards = useRef()
   const q = gsap.utils.selector(textBox.current)
   const tl = useRef()
   const tl1 = useRef()

   useEffect(() => {
      tl.current = gsap.timeline()
         .fromTo(cards.current, {
            opacity: 0,
            xPercent: even ? 100 : -100
         }, {
            scrollTrigger: {
               trigger: cards.current,
               toggleActions: 'restart pause reverse pause',
               start: 'top 500px',
               end: 'bottom bottom',
               // markers: true,
               scrub: 1,
            },
            xPercent: 0,
            ease: 'easeOut',
            opacity: 1
         })

      tl1.current = gsap.timeline()
         .fromTo(mainHeading.current, {
            // scale: 0,
            opacity: 0,
            yPercent: 50,
         }, {
            scrollTrigger: {
               trigger: mainHeading.current,
               toggleActions: 'play pause reverse pause',
               start: 'bottom 70%',
               end: 'bottom bottom',
               scrub: 1,
               // markers: true
            },
            ease: 'easeIn',
            duration: 1,
            opacity: 1,
            scale: 1,
            yPercent: 0
         })
         .fromTo(subHeading.current, {
            // scale: 0,
            opacity: 0,
            yPercent: 50,
         }, {
            scrollTrigger: {
               trigger: subHeading.current,
               toggleActions: 'play pause reverse pause',
               start: 'bottom 70%',
               end: '200px bottom',
               scrub: 1,
               // markers: true
            },
            ease: 'easeIn',
            duration: 1,
            opacity: 1,
            scale: 1,
            yPercent: 0,

         })
         .fromTo(content.current, {
            // scale: 0,
            opacity: 0,
            yPercent: 20,
         }, {
            scrollTrigger: {
               trigger: content.current,
               toggleActions: 'play pause reverse pause',
               start: 'bottom 80%',
               end: '200px bottom',
               scrub: 1,
               // markers: true
            },
            ease: 'easeIn',
            duration: 1,
            opacity: 1,
            scale: 1,
            yPercent: 0,

         })
         .fromTo(gameButton.current, {
            scale: 0,
            opacity: 0,
            yPercent: 50,
         }, {
            scrollTrigger: {
               trigger: gameButton.current,
               toggleActions: 'play pause reverse pause',
               start: 'top 95%',
               end: 'bottom bottom',
               scrub: 1,
               // markers: true
            },
            ease: 'back',
            duration: 1,
            opacity: 1,
            scale: 1,
            yPercent: 0,

         })
   }, [])


   return (
      <>
         {/* {[1, 2, 3, 4, 5].map(item => ( */}
         <Grid
            container
            sx={{
               height: '100vh',
               flexDirection: { xs: 'column', md: 'row' },
               backgroundColor: 'black'
            }}>
            <Grid
               order={even ? 1 : 2}
               item
               container
               sx={{
                  width: { xs: '100%', md: '50%' },
                  height: { xs: '50%', md: '100%' },
                  justifyContent: 'center',
                  alignItems: 'center',

               }}>
               <Box
                  ref={textBox}
                  sx={{
                     width: '600px',
                     height: '600px',
                     display: 'flex',
                     justifyContent: 'flex-start',
                     flexDirection: 'column',
                     alignItems: 'center',
                  }}>
                  <Typography
                     id='mainHeading'
                     ref={mainHeading}
                     variant='h3'
                     sx={{
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        marginBottom: '30px',
                        marginTop: '30px'
                     }}
                     color='primary.main'>Main Heading</Typography>
                  <Typography variant='h6' id="boxContent" ref={subHeading} color="primary.main" sx={{
                     fontWeight: 700,
                     marginBottom: '50px'
                  }}>Sub Heading</Typography>

                  <Typography variant='body1' id="boxContent1" ref={content} sx={{
                     color: 'white',
                     fontWeight: 500,
                     textAlign: 'center',
                     marginBottom: '100px'
                  }}>contentcontentcontentcontentcontentcontentcontentcontentcontent contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcon tentcontentcontentcontentco ntentcontentcontentcontentcontentconten tcontentcontentcontentcontentcontentco ntentcontentcontentcontentcontent contentcontentcontentcontentcontentconte ntcontentcontentcontentcontentcontentcon tentcontentcontentcontentcontentcontentcontentcontentc ontentcontentcontentcontentcontentcontentcontentcontentconten tcontent</Typography>
                  <Button variant='contained' ref={gameButton} id='playButton' sx={{
                     width: '200px',
                     height: '50px',
                  }}>Play Game</Button>
               </Box>
            </Grid>
            <Divider />
            <Grid
               order={even ? 2 : 1}
               item
               container
               sx={{
                  width: { xs: '100%', md: '50%' },
                  height: { xs: '50%', md: '100%' },
                  justifyContent: even ? 'flex-end' : 'flex-start',
                  alignItems: 'center',
                  overflow: 'hidden'
               }}>
               <Card
                  ref={cards}
                  className='slide'
                  elevation={0}
                  sx={{
                     width: '500px',
                     height: '550px',
                     borderRadius: 0,
                  }}>
                  <CardMedia
                     component={'img'}
                     height='100%'
                     image={cardImg}
                  />
               </Card>
            </Grid>

         </Grid>
         {/* ))} */}
      </>
   )
}

export default Games;