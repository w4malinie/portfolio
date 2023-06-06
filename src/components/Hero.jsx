import React from 'react'
import { Container, Typography, Grid } from '@mui/material';
import { motion as m } from "framer-motion";
import Lottie from 'react-lottie-player'
import scroll from '../assets/108784-arrow-down-white.json'

import kkb from '../assets/kkb.png'


export default function SimpleContainer() {
  return (
    <m.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
  >
      <Container id='start' maxWidth="xl"  sx={{ height:'100vh', display: { xs: 'block'}  }}>
        <Grid container sx={{marginTop:1, height: '100%'}} alignItems='center' justifyContent='space-between' gap={3}>
            <Grid item sx={{flex:1}}>
                <Typography variant='h3' mt={4} mb={2} >
                    Hey, I'm Karola
                </Typography>
                <Typography variant='h1' >
                    UX/UI & graphic designer with a passion for coding.
                </Typography>
                <Lottie
                loop
                animationData={scroll}
                play
                style={{ width: 80, height: 80 }}
              />
               
             </Grid>
             <Grid item sx={{display: {xs: 'none', md: 'flex'}}}>
               <img src={kkb}  style={{borderRadius:'50%', maxWidth: 480 }}/>
             </Grid>
             
        </Grid>
        
      </Container>
    </m.div>
  );
}
