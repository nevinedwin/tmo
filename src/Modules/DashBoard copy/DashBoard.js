import React, { useState } from 'react'
import { AppBar, Avatar, Box, Button, Card, CardContent, Grid, Hidden, IconButton, ListItemIcon, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material'
import { NavButton, SearchIconWrapper, StyledInputBase, Search } from '../../components'
import { CloudDone, KeyboardArrowDown, Logout } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search'
import { Constants } from '../../utilities'


const DashBoard = () => {

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const [search, setSearch] = useState('')

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSearch = (event) => {
    console.log(event)
  }




  return (
    <Grid container height={'100%'} backgroundColor={'primary.main'}>
      <Grid item height={'100%'} width={'100%'} overflow='auto' backgroundColor={'primary.main'}>
        {/* navbar container */}
        <Grid item order={1} height={{ xs: '20%', md: '15%' }} backgroundColor={'primary.main'} container sx={{ paddingTop: { xs: '4%', md: 0 }, position: 'fixed', backgroundColor: 'white', opacity: '.9', width: '100%' }} >
          <Grid container xs={6} md={4} paddingLeft={'5%'} sx={{ justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Grid>
              <Typography variant='subtitle1' color={'grey'} fontWeight={400} >{Constants.dashboard.greetings}</Typography>
            </Grid>
            <Grid>
              <Typography variant='h4' fontSize={{ xs: '20px', md: '30px' }} fontWeight={800} >Nevin Edwin</Typography>
            </Grid>
          </Grid>
          {/* search bar */}
          <Grid item order={{ xs: 3, md: 2 }} xs={12} md={4} container justifyContent={'center'} alignItems={'center'} padding={{ xs: 3, md: 0 }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleSearch} />
            </Search>
          </Grid>
          {/* avatar */}
          <Grid item order={{ xs: 2, md: 3 }} xs={6} md={4} container justifyContent={'flex-end'} paddingRight={{ xs: 3, md: 5 }} alignItems='center' >
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
          </Grid>
        </Grid>
        <Grid container height={{ xs: '80%', md: '90%' }} marginTop={{ xs: '40%', md: '10%' }} width='100%' spacing={1} >
          {Constants.dashboard.games.map(item => (
            <Grid container key={item} item xs={12} sm={6} md={3} lg={4} sx={{ justifyContent: 'center', alignItems: 'center', width: { xs: '75%' }, height: { xs: '150px', md: '250px' } }}>
              <Card raised sx={{ color: 'black', border: '1px solid white', width: { xs: '75%' }, height: '90%', borderRadius: '16px' }}>
                <CardContent>
                  <Typography gutterBottom variant='h5' color='black' component={'div'}>{item}</Typography>
                  <Typography gutterBottom variant='body2' color='black' component={'div'}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, </Typography>
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