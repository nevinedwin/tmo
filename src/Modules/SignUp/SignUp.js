import { Button, Divider, Grid, Hidden, Paper, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { Constants } from '../../utilities'




const SignUp = () => {

    const initialValue = {
        email: '',
        otp: ''
    }

    const [formInput, setFormInput] = useState(initialValue)
    const [showSubmitButton, setShowSubmitButton] = useState(false)

    const handleEmailInput = (event) => {
        setFormInput(prev => ({
            ...prev,
            email: event.target.value,
            otp: ''
        }))
        setShowSubmitButton(false)
    }

    const handleOtpValue = (event) => {
        setFormInput(prev => ({
            ...prev,
            otp: event.target.value
        }))
    }

    const handleGetOtp = () => {
        setShowSubmitButton(true)
    }

    const handleSubmit = () => {
        setFormInput(initialValue)
        setShowSubmitButton(false)

    }



    return (
        <Grid container direction='row' sx={{ height: '100vh', width: '100vw', overflow: 'hidden', justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Hidden smDown>
                <Grid item container sx={{ backgroundColor: 'primary.main' }} md={7}>

                </Grid>
            </Hidden>
            <Divider />
            <Grid item xs={12} md={5} component={Paper} elevation={6} square>
                <form autoComplete='off' onSubmit={handleSubmit}>
                    <Box sx={{ p: { xs: 4, sm: 2 }, my: '15rem' }}>
                        <Typography fontSize={30} variant='h4' gutterBottom>{Constants.signUp.loginHeading}</Typography>
                        {/* <Typography variant='body1'>{Constants.signup.description}</Typography> */}
                        <Box sx={{ py: '.5rem', width: '15rem' }}>
                            <TextField type={'text'} label={Constants.signUp.emailLabel} fullWidth variant='standard' placeholder={Constants.signUp.emailPlaceholder} value={formInput.email} onChange={handleEmailInput} size={'small'} />
                        </Box>
                        {showSubmitButton && <Box sx={{ py: '.5rem', width: '15rem' }}>
                            <TextField type={'text'} label={Constants.signUp.otpLabel} fullWidth variant='standard' value={formInput.otp} onChange={handleOtpValue} size={'small'} />
                        </Box>}
                        <Box my={2}>
                            {showSubmitButton ? <Button size='small' variant='contained' onClick={handleSubmit}>{Constants.signUp.submitButtonLabel}</Button>
                                : <Button variant='contained' size='small' onClick={handleGetOtp}>{Constants.signUp.getOtpButtonLabel}</Button>}
                        </Box>
                    </Box>
                </form>
            </Grid>

        </Grid>
    )
}

export default SignUp