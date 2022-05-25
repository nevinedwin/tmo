import { KeyboardArrowDown, Logout } from '@mui/icons-material'
import { AppBar, Avatar, Box, Button, Card, CardContent, Grid, Hidden, IconButton, ListItemIcon, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { NavButton } from '../../components/CustomeComponents'
import { Constants } from '../../utilities'


const DashBoard = () => {

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }




  return (
    <Grid container bgcolor={'primary.main'} height={'100%'} >
      <Grid item xs={12} sx={{ height: '9%', backgroundColor: 'primary.main', zIndex: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' component={'div'} sx={{ flexGrow: 1 }}>{Constants.dashboard.navHeading}</Typography>
            <Stack spacing={2} direction={'row'}>
              <Hidden smDown>
                {Constants.dashboard.navItem.map(item => (
                  <NavButton key={item} >{item}</NavButton>
                ))}
              </Hidden>
              <IconButton sx={
                {
                  width: 35,
                  height: 35,
                }}
                id='avatar-button'
                onClick={handleClick}
                aria-controls={open ? 'avatar-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}>

                <Avatar
                  sx={
                    {
                      width: 35,
                      height: 35,
                      cursor: 'pointer',
                      backgroundColor: 'secondary.light',
                      '&:hover': {
                        backgroundColor: 'secondary.dark'
                      }
                    }}>Ne</Avatar>
              </IconButton>
            </Stack>
            <Menu
              id='avatar-menu'
              keepMounted
              anchorEl={anchorEl}
              sx={{ cursor: 'pointer' }}
              open={open}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  width: '150px',
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  }
                },
              }}
              MenuListProps={{
                'aria-labelledby': 'avatar-button'
              }}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              {Constants.dashboard.avatarList.map(game => (
                <MenuItem key={game.text} onClick={handleClose}><ListItemIcon>{game.logo}</ListItemIcon> {game.text}</MenuItem>))}
            </Menu>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid item height={'91%'} p={'1% 4%'} width={'100%'}>
        <Box height={'20%'}>

        </Box>
        <Grid container width='100%' spacing={2} height='80%'>
          {[1, 2, 3, 4, 5, 6, 7].map(item => (
            <Grid key={item} item xs={12} sm={6} md={3} lg={4}>
              <Card sx={{ backgroundColor: 'info.dark', color: 'white', border: '1px solid white' }}>
                <CardContent>
                  <Typography gutterBottom variant='h5' color='white' component={'div'}>React</Typography>
                  <Typography gutterBottom variant='body2' color='white' component={'div'}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, nihil nisi. Ratione, impedit placeat nisi modi asperiores alias necessitatibus inventore provident, tempora vero explicabo quibusdam neque, nemo error officia totam?
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid >
  )
}

export default DashBoard