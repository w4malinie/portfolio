import React from 'react'
import {  Divider,  Container, Typography, Grid, Button, Link, Stack, Box } from '@mui/material';
import { motion as m } from "framer-motion";

import ux from '../assets/google-ux-design-professional-certificate.1.png'
import front from '../assets/meta-front-end-developer-certificate.png'
import dm from '../assets/google-digital-marketing-e-commerce-certificate.png'
import smm from '../assets/image.png'
import ass from '../assets/meta-certified-digital-marketing-associate.png'
import kkb from '../assets/kkb.png'

const buttonStyle = {
  width: '100%',
  fontWeight: 'bold'

}

export default function About() {
  return (
    <m.div
    initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
  >
      <Container maxWidth="xl" id='about'>
      <Box mt={10}mb={6} >
        <Divider  sx={{
        "&::before, &::after": {
        borderColor: "#FFB3B5",
        borderWidth: '2px'
       },
      }} textAlign="left"><Typography  variant='h2'>About Me</Typography>
       </Divider>
      </Box>
        <Stack direction='row' sx={{flexWrap: 'wrap'}}
        spacing={{ xs: 2, sm: 2, md: 4 }} alignItems='center' justifyContent='center'>
                <Link href='https://www.credly.com/badges/9184b194-6d9f-4791-966b-8fc9733b6bf3'><img src={ux} alt='Google UX Design Professional Certificate badge' style={{height: 150}}/></Link>
                <Link href='https://www.credly.com/badges/462f919f-0441-48c9-b786-fc0391a9b85b'><img src={front} alt='Meta Front-End Developer Certificate Badge
'style={{height: 120}}/></Link>
                <Link href='https://www.credly.com/badges/cf080ff7-78eb-497c-928b-765ccc40406a'><img src={dm} alt='Google Digital Marketing & E-commerce Certificate'style={{height: 150}}/></Link>
                <Link href='https://www.credly.com/badges/b599fb33-2b55-4076-95e7-42ac5187945a'><img src={smm} alt='Meta Social Media Marketing Professional Certificate badge' style={{height: 120}}/></Link>
                <Link href='https://www.credly.com/badges/343bbf76-5321-47d9-961e-66b85276b3ff'><img src={ass} alt='Meta Certified Digital Marketing Associate
Badge' style={{height: 120}}/></Link>
        </Stack>

      <Grid container justifyContent='space-between' gap={0}                            >
        <Grid item sx={{ maxWidth: 800 }}>
        <Typography variant='h3' mt={5} mb={1} >A passionate learner, natural problem-solver, and believer in unicorns</Typography>
            <Typography variant='body1' mt={3} mb={2} >
                                <p>My name is Karolina. With over 9 years of experience as a graphic designer, I've also delved into UX/UI design and webmastering. I'm deeply interested in social media content design, UX writing, and AI prompt engineering.</p>
                <p>I'm a strong advocate for inclusion, believing that accessibility equates to "usability for all." I always keep in mind that making something accessible for people with disabilities also enhances the experience for everyone else. </p>
                <p>Beyond my professional interests, I'm an activist involved with several animal rescue and human rights organisations.</p>
        </Typography>
                <Button variant="contained" sx={buttonStyle}  component="a" href="https://drive.google.com/file/d/1gQYnrKsfsHT7Gw051WuVk8jeFuGYIlEJ/view?usp=sharing">View my Resume</Button>

             </Grid>
             <Grid item sx={{ flex: 1, textAlign: 'center' }} >
               <img alt="my portrait" src={kkb}  style={{ maxWidth: 480, minWidth:250, width: '100%'}}/>
        </Grid>
      </Grid>

      </Container>
    </m.div>
  );
}
