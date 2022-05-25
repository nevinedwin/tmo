import { Button, Divider, Grid, Hidden, Paper, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import constants from './Constants'



const SignUp = () => {

    const initialValue = {
        email: ''
    }

    const [formInput, setFormInput] = useState(initialValue)
    const [otpValue, setOtpValue] = useState('')
    const [showSubmitButton, setShowSubmitButton] = useState(false)

    const handleEmailInput = (event) => {
        setFormInput({
            email: event.target.value
        })
        setShowSubmitButton(false)
    }

    const handleOtpValue = (event) => {
        setOtpValue(event.target.value)
    }

    const handleSubmit = (params) => {
        if (params === 'submit') {
            console.log('submitted')
        }
        if (params === 'getOtp') {
            setShowSubmitButton(true)
        }
    }



    return (
        <Grid container direction='row' sx={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
            <Hidden xsDown>
                <Grid item container sx={{ backgroundColor: 'primary.main' }} sm={4} md={6}>

                </Grid>
            </Hidden>
            <Divider />
            <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
                <form autoComplete='off' onSubmit={handleSubmit}>
                    <Box sx={{ p: { xs: 4, sm: 2 }, my: '15rem' }}>
                        <Typography variant='h3' gutterBottom>{constants.mainHeading}</Typography>
                        <Typography variant='body1'>{constants.description}</Typography>
                        <Box sx={{ py: '.5rem', width: '15rem' }}>
                            <TextField label={constants.emailLabel} fullWidth variant='standard' placeholder={constants.emailPlaceholder} value={formInput.email} onChange={handleEmailInput} size={'small'} />
                        </Box>
                        {showSubmitButton && <Box sx={{ py: '.5rem', width: '15rem' }}>
                            <TextField label={constants.otpLabel} fullWidth variant='standard' value={otpValue} onChange={handleOtpValue} size={'small'} />
                        </Box>}
                        <Box>
                            {showSubmitButton ? <Button onClick={() => handleSubmit('submit')}>{constants.submitButtonLabel}</Button>
                                : <Button onClick={() => handleSubmit('getOTP')}>{constants.getOtpButtonLabel}</Button>}
                        </Box>
                    </Box>
                </form>
            </Grid>

        </Grid>
    )
}

export default SignUp