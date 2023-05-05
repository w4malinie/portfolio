import React from 'react'
import {  Divider, Container, Typography, Grid, Paper, styled, Box } from '@mui/material';
import Card from './Card'
import binky from '../assets/Binky.png'
import pawma from '../assets/pawma.png'
import vinted from '../assets/vinted.jpg'
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? 'blue' : '#fff',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderColor: 'white'
  }));

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <Container id='ux/ui' maxWidth="xl" mt={4}>
      <Box mt={4}mb={6} >
        <Divider  sx={{
      "&::before, &::after": {
        borderColor: "#EF87C7",
        borderWidth: '1px'
      },
    }} textAlign="left"><Typography  variant='h2'>UX/UI Projects</Typography>
       </Divider>
      </Box>
      <Grid container spacing={3}>
            <Grid item md={6} sm={12}>
                  <Link to='/binky-app'>
                    <Card image={binky} alt='Binky app' 
                    title="Binky App" 
                    description='Make finding care for every kind of pet easy, no matter the time and circumstances.'
                    />
                  </Link>  
            </Grid>
            <Grid item md={6} sm={12}>
            <Card image={vinted} alt='Vinted' 
                    title="Vinted" 
                    description='To improve the search experience and overall UX with a minimal amount of changes. '
                    />
            </Grid>
            <Grid item md={6} sm={12}>
            <Card image={pawma} alt='pawma app' 
                    title="pawma Website" 
                    description='A registration & files management website for animal rescue organizations.  '
                    />
            </Grid>
            
            
        </Grid>
    
      </Container>
    </React.Fragment>
  );
}
