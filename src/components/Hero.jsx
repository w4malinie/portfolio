import React from 'react'
import {  Box, Container, Typography, Grid } from '@mui/material';
import kkb from '../assets/kkb.png'


export default function SimpleContainer() {
  return (
    <React.Fragment>
      <Container maxWidth="xl"  sx={{ height:'90vh', display: { xs: 'block'}  }}>
        <Grid container sx={{height: '100%'}} alignItems='center' justifyContent='space-between' gap={3}>
            <Grid item sx={{flex:1}}>
                <Typography variant='h3' mt={4} mb={2} >
                    Hey, I'm Karola. 
                </Typography>
                <Typography variant='h1' >
                    UX/UI & graphic designer with a passion for coding.
                </Typography>
             </Grid>
             <Grid item sx={{display: {xs: 'none', md: 'flex'}}}>
               <img src={kkb}  style={{borderRadius:'50%', maxWidth: 480 }}/>
             </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
