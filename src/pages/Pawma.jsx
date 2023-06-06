import React from 'react'
import {   Container, Typography, Box, Button} from '@mui/material';
import { motion as m } from "framer-motion";
import pawma from '../assets/pawma/pawma.png'
import logo from '../assets/pawma/logo.png'
import tab from '../assets/pawma/tab.png'
import em from '../assets/pawma/em.png'
import laptop from '../assets/pawma/12025.png'
import pers1 from '../assets/pawma/persona1.png'
import pers2 from '../assets/pawma/persona2.png'
import sitemap from '../assets/pawma/srchitecture.png'
import dw from '../assets/pawma/dw.png'
import lofi from '../assets/pawma/lo-fi.png'
import ut1 from '../assets/pawma/ut.png'
import hifi from '../assets/pawma/hi-fi.png'
import mobile from '../assets/pawma/smartphone.png'
import end from '../assets/pawma/end.png'

const buttonStyle = {
    width: '100%',
    fontWeight: 'bold'

}

function BinkyApp() {
  return (
    <m.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
  >
     <Container id='pawma'  maxWidth='md'>
        <Box>
            <img src={pawma} alt='pawma homepage'/>
        </Box>
        <Typography variant='h1' component='h2'sx={{textAlign: 'center', mt: 4, mb: 6}}>
        pawma 
        </Typography>

        <Box sx={{display: {sm: 'flex', xs: 'block'}, justifyContent: 'space-around', mb:4, borderTop: '1px solid #FFB3B5', borderBottom: '1px solid #FFB3B5', pt: 2, pb: 2 }}>
            <Typography variant='h5'>
            Role: <span style={{fontWeight: 'normal'}}>UX/UI Designer</span>
            </Typography>
            <Typography variant='h5'>
            Duration: <span style={{fontWeight: 'normal'}}>December 2021</span>
            </Typography>
        </Box>
        <Typography variant='h4' >
            Product Overview
        </Typography>
        <Typography variant='body1' >
        <p>pawma is a registration & files management website for animal rescue organizations.  </p>
        </Typography>
        <Box mt={4}>
            <img src={logo} alt='pawma homepage'/>
        </Box>
        <Typography variant='h4' mt={4}>
            Problem
        </Typography>
        <Typography variant='body1' >
        <p>Available websites for animals rescue organizations are difficult to use, non-intuitive, and have an overwhelming amount of features. Many of them don’t support mobile versions. </p> 
        </Typography>
        <Typography variant='h4' mt={4}>
            Goal
        </Typography>
        <Typography variant='body1' >
        <p>The project goal is to make the animal registration process quick and simplify files management. </p> 
        </Typography>
        <Box mt={4}>
        <img src={laptop} alt='pawma on laptop with hands pointing at card'/>
        </Box>
        <Typography variant='h4' mt={4}>
            Target audience
        </Typography>
        <Typography variant='body1' >
        <p>A typical user is between 25-55 years old, and most users are animal organizations managers or volunteers. </p> 
        </Typography>
        <Typography variant='h4' mt={4}>
            Challenges & constrains
        </Typography>
        <Typography variant='body1' >
        <ul>
            <li>Design a user friendly, responsive, distraction-free website </li>
            <li>Navigation must be clear and easy to follow </li>
            <li>The Website should consist of only the most demanded features for registering and managing file</li>
            <li>Make overall experience welcoming and encouraging.</li>
        </ul> 
        </Typography>
        {/* NEXT SECTION */}
        <Typography textAlign='center' variant='h3' mt={4}>
            1. Emphatize
        </Typography>
        <hr style={{borderColor: '#EF87C7'}}/>
        <Box mt={4}>
        <img src={em} alt='empathy map card sorting'/>
        </Box>
        <Typography variant='h4' mt={4}>
            User research
        </Typography>
        <Typography variant='body1' >
        <p>I reached out to several animal rescue organizations and ask them for help with my project. Since people working there are extremely busy 24/7, I decided to send them short surveys instead of conducting typical user interviews. </p> 
        <p>Next, I turned their answers into empathy maps to better understand the target user and their needs. </p>
        </Typography>
        <Box mt={4}>
        <img src={tab} alt='pawma on tablet'/>
        </Box>
        <Typography variant='body1' >
        <p>The 3 main user pain points were: 
            <ol>
                <li>A regular need for a pet sitting or other type o care for their pets, e.g. for holidays or in emergencies like Covid-19 quarantine. </li><br/>
                <li>Difficulties with finding someone for taking care of their pets because of species or larger number of animals. </li><br/>
                <li>Browsing for the best match through available pet sitters is time-consuming and frustrating.</li>
            </ol>
        </p> 
        </Typography>
        {/* NEXT SECTION */}
        <Typography textAlign='center' variant='h3' mt={4}>
            2. Define
        </Typography>
        <hr style={{borderColor: '#EF87C7'}}/>
        <Typography variant='h4' mt={4}>
            Meet the users: personas
        </Typography>
        <Box mt={4}>
        <img src={pers1} alt='persona 1'/>
        </Box>
        <Box mt={4}>
        <img src={pers2} alt='persona 2'/>
        </Box>
        {/* NEXT SECTION */}
        <Typography textAlign='center' variant='h3' mt={4}>
            3. Ideate
        </Typography>
        <hr style={{borderColor: '#EF87C7'}}/>
        <Typography variant='h4' mt={4}>
            Sitemap
        </Typography>
        <Typography variant='body1' >
        <p>I started out by creating a sitemap. Difficulty with website navigation was a primary pain point for users, so I used that knowledge to create a sitemap. </p> 
        <p>My goal here was to make navigation easy and provide easy access with multiple available paths to the most important actions.</p>
        </Typography>
        <Box mt={4}>
        <img src={sitemap} alt='pawma sitemap'/>
        </Box>
        <Typography variant='h4' mt={4}>
            Paper & digital wireframes
        </Typography>
        <Typography variant='body1' >
        <p>Next, I sketched out paper wireframes for each page of my website. From several variations I picked one refined design</p> 
        <p>Moving from paper to digital wireframes, I arranged them into user flow for registering a new animal to be sure I design all necessary pages. </p> 
        </Typography>
        <Box mt={4}>
        <img src={dw} alt='digital wireframes'/>
        </Box>
       {/* NEXT SECTION */}
       <Typography textAlign='center' variant='h3' mt={4}>
            4. Prototype + 5. Test
        </Typography>
        <hr style={{borderColor: '#EF87C7'}}/>
        <Typography variant='h4' mt={4}>
            Low fidelity prototype
        </Typography>
        <Typography variant='body1' >
        <p>To create a low-fidelity prototype, I connected all of the screens involved in the primary user flow of registering a new animal to the organization.  
        </p> 
        </Typography>
        <Box mt={4}>
            <img src={lofi} alt='Lo-fi Adobe XD Prototype'/>
            <Button variant='contained' component="a" href="https://xd.adobe.com/view/df79d32b-bf42-479b-9a3a-76646d94f808-8a2a/" sx={buttonStyle}>Low fidelity Adobe XD Prototype</Button>
        </Box>

        <Typography variant='h4' mt={4}>
            #1 User testing
        </Typography>
        <Typography variant='body1' >
        <p>The time for first user testing has come. I conducted a short (10-15 min), unmoderated usability study session with 5 participants. </p> 
        <p>My goal was to find out if registration flow was easy to follow and what users think about the navigation.</p>
        </Typography>
        <Box mt={4}>
        <img src={ut1} alt='pawma user testing'/>
        </Box>
        <Typography variant='h4' mt={4}>
            Results
        </Typography>
        <Typography variant='body1' >
        <p>The main findings uncovered by the usability study were: 
            <ol>
                <li>The 4-step registration form is too long.</li><br/>
                <li>The Multilevel sidebar menu is confusing.</li><br/>
                <li>Square file covers don't have labels about an animal's adoption status.</li>
            </ol>
         </p>
        </Typography>
        <Typography variant='h4' mt={4}>
            High fidelity prototype & #2 user testing
        </Typography>
        <Box mt={4}>
        <img src={hifi} alt='High fidelity Adobe XD Prototype'/>
            <Button variant='contained' component="a" href="https://xd.adobe.com/view/0cbdc80e-17d5-4b62-a5a9-424d72bd606c-59ee/" sx={buttonStyle}>High fidelity Adobe XD Prototype</Button>
        </Box>
        <Typography variant='body1' >
        <p>Based on the insights from the usability study, I made changes to digital wireframes to improve registration flow and user experience. </p> 
        <p>Then, I designed mockups and made high fidelity prototype to conduct tests again. This time users didn't report any complaints.</p>
        </Typography>
        {/* NEXT SECTION */}
        <Typography textAlign='center' variant='h3' mt={4}>
            Takeaways
        </Typography>
        <hr style={{borderColor: '#EF87C7'}}/>
        <Box mt={4}>
        <img src={mobile} alt='pawma on mobile'/>
        </Box>
        <Typography variant='body1' >
        <p>For an animal lover, it was a pleasure to work on a project for an animal rescue organization. I learned a lot about actual registration forms, the adoption process and more.
        </p>      
        <p>
        I also Iearned that less is more. In this case, it meant reducing the number of features and giving users exactly what they really needed. 
        </p>
        <p>During this project, for the first time, I worked with Adobe XD.
 </p>
        </Typography>
        <img src={end} alt='confirmation page'/>
        <Box sx={{display: 'flex', justifyContent: 'center'}} mt={4}>
        </Box>
        <Button variant='outlined' component="a" href="https://drive.google.com/uc?export=download&id=1woscrwTeYhyw0uSiKHPVGvWPY3oOSTdD" sx={buttonStyle}>Download Full Case Study</Button>
     </Container>
    </m.div>
  )
}

export default BinkyApp
