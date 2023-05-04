import React from 'react'
import {  Divider, Box, Container, Typography, Grid, Paper, styled } from '@mui/material';
import Card from './Card'
import binky from '../assets/Binky.png'
import pawma from '../assets/pawma.png'
import vinted from '../assets/vinted.jpg'

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
      <Container maxWidth="xl" mt={4}>
      <Divider  sx={{
    "&::before, &::after": {
      borderColor: "#616161",
    },
  }} textAlign="left"><Typography  mt={5} mb={4}variant='h2'>UX/UI Projects</Typography></Divider>
      <Grid container spacing={3}>
            <Grid item md={6} sm={12}>
                    <Card image={binky} alt='Binky app' 
                    title="Binky App" 
                    description='Make finding care for every kind of pet easy, no matter the time and circumstances.'
                    />
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
