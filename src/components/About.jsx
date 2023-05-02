import React from 'react'
import {  Divider,  Container, Typography, Grid, Stack } from '@mui/material';
import kkb2 from '../assets/kkb2.jpg'
import ux from '../assets/google-ux-design-professional-certificate.1.png'
import front from '../assets/meta-front-end-developer-certificate.png'
import dm from '../assets/google-digital-marketing-e-commerce-certificate.png'
import smm from '../assets/meta-social-media-marketing-professional-certificate.png'
import ass from '../assets/meta-certified-digital-marketing-associate.png'


export default function About() {
  return (
    <React.Fragment>
      <Container maxWidth="xl">
      <Divider  sx={{
    "&::before, &::after": {
      borderColor: "#616161",
    },
  }} textAlign="left"><Typography  mt={8} mb={4}variant='h2'>About Me</Typography></Divider>
        <Stack   direction='row'
        spacing={{ xs: 1, sm: 2, md: 4 }} alignItems='center' >
                <img src={ux} style={{height: 120}}/>
                <img src={front} style={{height: 100}}/>
                <img src={dm} style={{height: 120}}/>
                <img src={smm} style={{height: 100}}/>
                <img src={ass} style={{height: 100}}/>
        </Stack>

      <Grid container justifyContent='space-between' gap={3}>
        <Grid item sx={{ maxWidth: 800 }}>
        <Typography variant='h3' mt={4} mb={2} >An avid learner, natural-born problem solver & unicorn believer</Typography>
            <Typography variant='body1' mt={4} mb={2} >
                <p>My name is Karolina Krupa-Bartkowiak. I’m a UX/UI designer, graphic designer, and aspiring coder. You can also call me UX unicorn.</p>
                <p>I’m passionate about designing and implementing functional and beautiful things accessible to all. </p>
                <p>I'm an advocate for inclusion. I believe that accessibility means “usability for all”. The one thing I like to remember is that making something accessible for people with a disability also makes it significantly better for everyone else. </p>
                <p>I’m also an activist in several animal rescue and human-rights organizations.</p>
                </Typography>

             </Grid>
             <Grid item sx={{ flex: 1, justifyContent: 'center', display: {xs: 'none', md: 'flex', }}} >
               <img src={kkb2}  style={{display: 'block', maxWidth: 480, minWidth: 400, width: '100%'}}/>
        </Grid>
      </Grid>

      </Container>
    </React.Fragment>
  );
}
