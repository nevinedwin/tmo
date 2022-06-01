import { RemoveRedEye, VisibilityOff } from '@mui/icons-material'
import { Button, Divider, Grid, Hidden, InputAdornment, Paper, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { LoginTextField } from '../../components/CustomeComponents'
import { Constants } from '../../utilities'



const Signup = ({ setNewUser }) => {
    const initialValue = {
        email: '',
        password: '',
        confirmPassword: ''
    }

    const [formInput, setFormInput] = useState(initialValue)
    const [submitted, setSubmitted] = useState(false)
    const [enableEye, setEnableEye] = useState(false)
    const [enableEye1, setEnableEye1] = useState(false)

    const handleInput = (event) => {
        const { name, value } = event.target
        setFormInput(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = () => {
        setFormInput(initialValue)
        setNewUser(false)
    }

    return (
        // <Grid container direction='row' sx={{ height: '100%', width: '100%', overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }}>
        //     <Grid item component={Paper} elevation={6} square sx={{ width: '500px', height: '400px' }}>
        <form autoComplete='off' onSubmit={handleSubmit}>
            <Box sx={{
                width: '100%',
                height: '400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'ease-in-out 1s'
            }}>
                <Typography fontSize={30} sx={{ marginBottom: '20px', color: 'primary.main', textTransform: 'uppercase', fontWeight: 800 }} variant='h4' gutterBottom>{Constants.Login.sigupheading}</Typography>
                {/* <Typography variant='body1'>{Constants.Login.description}</Typography> */}
                <Box sx={{
                    marginBottom: '20px',
                    width: '300px'
                }}>
                    <LoginTextField
                        type={'text'}
                        size={'small'}
                        name='email'
                        label={Constants.Login.emailLabel}
                        fullWidth
                        variant='outlined'
                        placeholder={Constants.Login.emailPlaceholder}
                        value={formInput.email}
                        onChange={handleInput}
                    />
                </Box>
                <Box sx={{
                    width: '300px',
                    marginBottom: '20px'
                }}>
                    <LoginTextField
                        type={enableEye ? 'text' : 'password'}
                        name='password'
                        size={'small'}
                        label={Constants.Login.password}
                        error={submitted && !formInput.password}
                        fullWidth
                        variant='outlined'
                        value={formInput.password}
                        onChange={handleInput}
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
                    width: '300px'
                }}>
                    <LoginTextField
                        type={enableEye1 ? 'text' : 'password'}
                        name='confirmPassword'
                        size={'small'}
                        label={Constants.Login.confirmpassword}
                        error={submitted && !formInput.confirmPassword}
                        fullWidth
                        variant='outlined'
                        value={formInput.confirmPassword}
                        onChange={handleInput}
                        InputProps={{
                            endAdornment:
                                <InputAdornment
                                    sx={{ cursor: 'pointer' }}
                                    position={'end'}
                                    onClick={() => setEnableEye1(prev => !prev)}>{
                                        enableEye1 ? <VisibilityOff /> : <RemoveRedEye />}
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
                </Box>
            </Box>
        </form>
        // </Grid>
        // </Grid>
    )
}

export default Signup