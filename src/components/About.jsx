import React from 'react'
import {  Divider,  Container, Typography, Grid, Stack, Button, Link, Box } from '@mui/material';
import { motion as m } from "framer-motion";
import kkb2 from '../assets/kkb2.jpg'
import ux from '../assets/google-ux-design-professional-certificate.1.png'
import front from '../assets/meta-front-end-developer-certificate.png'
import dm from '../assets/google-digital-marketing-e-commerce-certificate.png'
import smm from '../assets/image.png'
import ass from '../assets/meta-certified-digital-marketing-associate.png'

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
      <Box mt={6}mb={4} >
        <Divider  sx={{
        "&::before, &::after": {
        borderColor: "#FFB3B5",
        borderWidth: '2px'
       },
      }} textAlign="left"><Typography  variant='h2'>About Me</Typography>
       </Divider>
      </Box>
        <Stack   direction='row' sx={{flexWrap: 'wrap'}}
        spacing={{ xs: 2, sm: 2, md: 4 }} alignItems='center' justifyContent='center'>
                <Link href='https://www.credly.com/badges/9184b194-6d9f-4791-966b-8fc9733b6bf3'><img src={ux} alt='Google UX Design Professional Certificate badge' style={{height: 150}}/></Link>
                <Link href='https://www.credly.com/badges/462f919f-0441-48c9-b786-fc0391a9b85b'><img src={front} alt='Meta Front-End Developer Certificate Badge
'style={{height: 120}}/></Link>
                <Link href='https://www.credly.com/badges/cf080ff7-78eb-497c-928b-765ccc40406a'><img src={dm} alt='Google Digital Marketing & E-commerce Certificate'style={{height: 150}}/></Link>
                <Link href='https://www.credly.com/badges/b599fb33-2b55-4076-95e7-42ac5187945a'><img src={smm} alt='Meta Social Media Marketing Professional Certificate badge' style={{height: 120}}/></Link>
                <Link href='https://www.credly.com/badges/343bbf76-5321-47d9-961e-66b85276b3ff'><img src={ass} alt='Meta Certified Digital Marketing Associate
Badge' style={{height: 120}}/></Link>
        </Stack>

      <Grid container justifyContent='space-between' gap={3}>
        <Grid item sx={{ maxWidth: 800 }}>
        <Typography variant='h3' mt={5} mb={1} >An avid learner, natural-born problem solver & unicorn believer</Typography>
            <Typography variant='body1' mt={3} mb={2} >
                <p>My name is Karolina Krupa-Bartkowiak. I’m a UX/UI designer, graphic designer, and aspiring coder. You can also call me UX unicorn.</p>
                <p>I’m passionate about designing and implementing functional and beautiful things accessible to all. </p>
                <p>I'm an advocate for inclusion. I believe that accessibility means “usability for all”. The one thing I like to remember is that making something accessible for people with a disability also makes it significantly better for everyone else. </p>
                <p>I’m also an activist in several animal rescue and human-rights organizations.</p>
        </Typography>
                <Button variant="outlined" sx={buttonStyle}  component="a" href="https://drive.google.com/file/d/1gQYnrKsfsHT7Gw051WuVk8jeFuGYIlEJ/view?usp=sharing">See my resume</Button>

             </Grid>
             <Grid item sx={{ flex: 1, justifyContent: 'center', display: {md: 'flex', }}} >
               <img src={kkb2}  style={{display: 'block', maxWidth: 480, minWidth: 400, width: '100%'}}/>
        </Grid>
      </Grid>

      </Container>
    </m.div>
  );
}
