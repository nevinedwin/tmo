import { RemoveRedEye, VisibilityOff } from '@mui/icons-material'
import { Button, Divider, Grid, Hidden, InputAdornment, Paper, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginTextField } from '../../components/CustomeComponents'
import { Constants } from '../../utilities'




const Login = ({ setNewUser }) => {

    const initialValue = {
        email: '',
        password: ''
    }

    const [formInput, setFormInput] = useState(initialValue)
    const [submitted, setSubmitted] = useState(false)
    const [enableEye, setEnableEye] = useState(false)

    const handleEmailInput = (event) => {
        setFormInput(prev => ({
            ...prev,
            email: event.target.value
        }))
    }

    const handlePassword = (event) => {
        setFormInput(prev => ({
            ...prev,
            password: event.target.value
        }))
    }


    const handleSubmit = () => {
        setFormInput(initialValue)
    }


    return (
        // <Grid container direction='row' sx={{ height: '100%', width: '100%', overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }}>
        //     <Grid item component={Paper} elevation={6} square sx={{ width: '500px', height: '300px' }}>
        <form autoComplete='off' onSubmit={handleSubmit}>
            <Box sx={{
                width: '100%',
                height: '300px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Typography fontSize={30} sx={{ marginBottom: '20px', color: 'white' }} variant='h4' gutterBottom>{Constants.Login.loginHeading}</Typography>
                {/* <Typography variant='body1'>{Constants.Login.description}</Typography> */}
                <Box sx={{
                    marginBottom: '20px',
                    width: '300px'
                }}>
                    <LoginTextField
                        type={'text'}
                        size={'small'}
                        label={Constants.Login.emailLabel}
                        fullWidth
                        variant='outlined'
                        placeholder={Constants.Login.emailPlaceholder}
                        value={formInput.email}
                        onChange={handleEmailInput}
                    />
                </Box>
                <Box sx={{
                    width: '300px'
                }}>
                    <LoginTextField
                        type={enableEye ? 'text' : 'password'}
                        size={'small'}
                        label={Constants.Login.password}
                        error={submitted && !formInput.password}
                        fullWidth
                        variant='outlined'
                        value={formInput.password}
                        onChange={handlePassword}
                        InputProps={{
                            endAdornment:
                                <InputAdornment
                                    sx={{ cursor: 'pointer' }}
                                    position={'end'}
                                    onClick={() => setEnableEye(prev => !prev)}>{
                                        enableEye ? <VisibilityOff color='white' /> : <RemoveRedEye color='white' />}
                                </InputAdornment>
                        }}
                    />
                </Box>
                <Box sx={{
                    marginTop: '20px'
                }}>
                    <Button size='small' sx={{ width: '180px' }} variant='contained' onClick={handleSubmit}>{Constants.Login.submitButtonLabel}</Button>
                </Box>
                <Box sx={{
                    marginTop: '5px'
                }}>
                    <Button size='small' sx={{ width: '180px', textTransform: 'none' }} variant='text' onClick={handleSubmit}>{Constants.Login.forgetPassword}</Button>
                    <Button size='small' sx={{ width: '180px', textTransform: 'none' }} variant='text' onClick={() => setNewUser(true)}>{Constants.Login.sigupheading}</Button>
                </Box>
            </Box>
        </form>
        //</Grid>

        //</Grid>
    )
}

export default Login