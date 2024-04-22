import React from 'react'
import {  Divider, Container, Typography, Grid, Box } from '@mui/material';
import Card from './Card'
import binky from '../assets/Binky.png'
import pawma from '../assets/pawma/pawma.png'
import vinted from '../assets/vinted.jpg'
import other from '../assets/tinified/other.jpg'
import { motion as m } from "framer-motion";
import { HashLink } from 'react-router-hash-link';



export default function SimpleContainer() {
  return (
    <m.div
    initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
  >
      <Container id='ux-ui' maxWidth="xl" mt={4}>
      <Box mt={8}mb={6} >
        <Divider  sx={{
      "&::before, &::after": {
        borderColor: "#FFB3B5",
        borderWidth: '2px'
      },
    }} textAlign="left"><Typography  variant='h2'>UX/UI Projects & webmastering</Typography>
       </Divider>
       <Box sx={{ maxWidth: 980 }}>
            <Typography variant='body1' mt={3} mb={2} >
                <p>In 2021, I embarked on my UX journey with Google's UX Professional Certificate and instantly fell in love with UX's problem-solving approach. Along the way, I've honed my skills in UI design, UX writing, digital marketing, and even React.JS coding.</p>
        </Typography>
        </Box>
      </Box>
      <Grid container spacing={3}>
            <Grid item md={6} sm={12}>
                  <HashLink to='/binky-app#binky'>
                    <Card image={binky} alt='Binky app' 
                    title="Binky App" 
                    description='Make finding care for every kind of pet easy, no matter the time and circumstances.'
                    />
                  </HashLink>  
            </Grid>
            <Grid item md={6} sm={12}>
              <HashLink to='/vinted-seearch#vinted'>
                    <Card image={vinted} alt='Vinted' 
                    title="Vinted" 
                    description='To improve the search experience and overall UX with a minimal amount of changes. '
                    />
              </HashLink>
            </Grid>
            <Grid item md={6} sm={12}>
            <HashLink to='/pawma#pawma'>
                    <Card image={pawma} alt='pawma app' 
                    title="pawma Website" 
                    description='A registration & files management website for animal rescue organizations.  '
                    />
            </HashLink>
            </Grid>
            <Grid item md={6} sm={12}>
            <HashLink to='/other#other'>
                    <Card image={other} alt='other projects' 
                    title="Other projects: UX/UI, webmastering" 
                    description='Here are a few websites I have had the pleasure to work on'
                    />
            </HashLink>
            </Grid>
        </Grid>
      </Container>
    </m.div>
  );
}
