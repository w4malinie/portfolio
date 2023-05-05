import React from 'react'
import {  Divider,  Container, Typography, Grid, Stack, Box, Button, Link } from '@mui/material';
import binky from '../assets/Binky.png'
import logo from '../assets/binky/binky-logo.png'


function BinkyApp() {
  return (
    <>
     <Container  maxWidth='md'>
        <Box>
            <img src={binky} alt='Binky App homescreen'/>
        </Box>
        <Typography variant='h2' sx={{textAlign: 'center', mt: 4, mb: 4}}>
        Binky App
        </Typography>
        
        <Box sx={{display: {sm: 'flex', xs: 'block'}, justifyContent: 'space-around', mb:4, borderTop: '1px solid #616161', borderBottom: '1px solid #616161', pt: 2, pb: 2 }}>
            <Typography variant='h5'>
            Role: <span style={{fontWeight: 'normal'}}>UX/UI Designer</span>
            </Typography>
            <Typography variant='h5'>
            Duration: <span style={{fontWeight: 'normal'}}>January 2022</span>
            </Typography>
        </Box>
        <Typography variant='h4' >
            Product Overview
        </Typography>
        <Typography variant='body1' >
        <p>Binky is an app for pet lovers willing to help each other. Pet owners can request pet sitting or other types of care and pet sitters contact them directly. </p>
        </Typography>
        <Box mt={4}>
            <img src={logo} alt='Binky App logo'/>
        </Box>
        <Typography variant='h4' mt={4}>
            Problem
        </Typography>
        <Typography variant='body1' >
        <p>Every year, millions of animals are brought to shelters during holidays or while an owner gets sick. One of many reasons behind that problem is that almost every pet owner struggles with finding pet care for the long or short term.</p> 
        <p> At the same time, many pet lovers are willing to devote their time to animals and take care of them even for free.</p>
 
        </Typography>
     </Container>
    </>
  )
}

export default BinkyApp
