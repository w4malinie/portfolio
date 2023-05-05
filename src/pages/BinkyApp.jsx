import React from 'react'
import {  Divider,  Container, Typography, Grid, Stack, Box, Button, Link } from '@mui/material';
import binky from '../assets/Binky.png'
import logo from '../assets/binky/binky-logo.png'
import screens from '../assets/binky/screens.png'
import laptop from '../assets/binky/binky-laptop.jpeg'
import  smartphone from '../assets/binky/binky-screen2.png'
import persona1 from '../assets/binky/persona1.png'
import persona2 from '../assets/binky/persona2.png'
import uj from '../assets/binky/user-journey.png'
import appflow from '../assets/binky/uf.png'
import paper from '../assets/binky/paper-wireframes.png'
import dwr from '../assets/binky/digital-wr.png'
import lfpr from '../assets/binky/prototype-1.png'
import tests from '../assets/binky/tests.png'
import mocks from '../assets/binky/mock.jpeg'
import final from '../assets/binky/finalsreen.png'

const buttonStyle = {
    width: '100%',
    fontWeight: 'bold'

}

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

        <Box sx={{display: {sm: 'flex', xs: 'block'}, justifyContent: 'space-around', mb:4, borderTop: '1px solid #EF87C7', borderBottom: '1px solid #EF87C7', pt: 2, pb: 2 }}>
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
        <Typography variant='h4' mt={4}>
            Goal
        </Typography>
        <Typography variant='body1' >
        <p>Make finding care for every kind of pet easy, no matter the time and circumstances.</p> 
        </Typography>
        <Box mt={4}>
            <img src={screens} alt='Binky App final screens'/>
        </Box>
        <Typography variant='h4' mt={4}>
            Target audience
        </Typography>
        <Typography variant='body1' >
        <p>A target user is a busy, working pet owner between 25-60 yo with at least one animal.</p> 
        </Typography>
        <Typography variant='h4' mt={4}>
            Challenges & constrains
        </Typography>
        <Typography variant='body1' >
        <ul>
            <li>Design a simple, easy to use app for social good.</li>
            <li>Focus on pet owner view.</li>
            <li>The app should enable requesting help for pets of various species.</li>
            <li>Additionally, design a responsive website.</li>
        </ul> 
        </Typography>
        {/* NEXT SECTION */}
        <Typography textAlign='center' variant='h3' mt={4}>
            1. Emphatize
        </Typography>
        <hr style={{borderColor: '#EF87C7'}}/>
        <Box mt={4}>
            <img src={laptop} alt='Binky App final screens'/>
        </Box>
        <Typography variant='h4' mt={4}>
            User study details
        </Typography>
        <Typography variant='body1' >
        <p>First, I made a survey for pet owners about their experiences in finding care for their pets to develop interview questions which then I used for conducting user interviews. Then, I conducted 8 user studies.
        </p> 
        </Typography>
        <Box mt={4}>
            <img src={smartphone} alt='Binky App final screens'/>
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
            <img src={persona1} alt='Binky App final screens'/>
        </Box>
        <Box mt={4}>
            <img src={persona2} alt='Binky App final screens'/>
        </Box>
        <Typography variant='h4' mt={4}>
            User journey
        </Typography>
        <Box mt={4}>
            <img src={uj} alt='Binky App final screens'/>
        </Box>
        {/* NEXT SECTION */}
        <Typography textAlign='center' variant='h3' mt={4}>
            3. Ideate
        </Typography>
        <hr style={{borderColor: '#EF87C7'}}/>
        <Typography variant='h4' mt={4}>
            App user flow
        </Typography>
        <Typography variant='body1' >
        <p>I used the user journey map and findings of Binky’s competitors to draft a basic app user flow.  
        </p> 
        </Typography>
        <Box mt={4}>
            <img src={appflow} alt='Binky App final screens'/>
        </Box>
        <Typography variant='h4' mt={4}>
            Paper wireframes
        </Typography>
        <Typography variant='body1' >
        <p>When I outlined the basic user flow for the app, I started with creating paper sketches of each screen. On the bottom are the home screen variations and the refined one. 
        </p> 
        </Typography>
        <Box mt={4}>
            <img src={paper} alt='Binky App final screens'/>
        </Box>
        <Typography variant='h4' mt={4}>
            Digital wireframes
        </Typography>
        <Box mt={4}>
            <img src={dwr} alt='Binky App final screens'/>
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
        <p>To prepare for usability testing, I created a low-fidelity prototype that connected the user flow of choosing a pet sitting to the request’s confirmation.
        </p> 
        </Typography>
        <Box mt={4}>
            <img src={lfpr} alt='Binky App final low fidelity prototype'/>
            <Button variant='contained' component="a" href="https://www.figma.com/proto/Fhc4mkUP43VZlwyLxe8JSL/BINKY-APP?node-id=27-886&scaling=scale-down&page-id=27%3A885&starting-point-node-id=27%3A886" sx={buttonStyle}>Lo-fi FIGMA Prototype</Button>
        </Box>

        <Typography variant='h4' mt={4}>
            #1 User testing
        </Typography>
        <Typography variant='body1' >
        <p>The time for first user testing has come. I conducted an unmoderated usability study session with 10 participants. </p> 
        <p>My goal was to find out how users will manage to make requests for pet sitting and what is the overall experience with the app.</p>
        </Typography>
        <Box mt={4}>
            <img src={tests} alt='Binky App testing phase'/>
        </Box>
        <Typography variant='h4' mt={4}>
            Results
        </Typography>
        <Typography variant='body1' >
        <p>10/10 users completed the task without trouble, but there were some other findings uncovered by the usability study, like:
            <ol>
                <li>Users wanted to know how the service works.</li><br/>
                <li>They were confused about 4th pet care option and required additional explanation.</li><br/>
                <li>Users expected an option to add a new pet when making a request.</li>
            </ol>
         </p>
        </Typography>
        <Typography variant='h4' mt={4}>
            High fidelity prototype & #2 user testing
        </Typography>
        <Box mt={4}>
            <img src={lfpr} alt='Binky App final high fidelity prototype'/>
            <Button variant='contained' component="a" href="https://www.figma.com/proto/Fhc4mkUP43VZlwyLxe8JSL/BINKY-APP?node-id=170-2229&scaling=scale-down&page-id=170%3A2162&starting-point-node-id=170%3A2229" sx={buttonStyle}>Hi-fi FIGMA Prototype</Button>
        </Box>
        <Typography variant='body1' >
        <p>Based on the insights from the usability study, I made changes to digital wireframes. Also, I added 2 screens for welcome and boarding.</p> 
        <p>Then, I designed mockups and made high fidelity prototype. I run the tests one more time. Users reported minor concerns, but none of them was crucial for completing user flow.</p>
        </Typography>
        {/* NEXT SECTION */}
        <Typography textAlign='center' variant='h3' mt={4}>
            Takeaways
        </Typography>
        <hr style={{borderColor: '#EF87C7'}}/>
        <Box mt={4}>
            <img src={mocks} alt='Binky App'/>
        </Box>
        <Typography variant='body1' >
        <p>The idea for this app was with me for a long time. As a pet owner myself, I struggle with similar pain points as users. Yet, I had to keep in mind UX designers' mantra "you are not a user!". I finally came to understand that phase. Testing and asking questions is crucial, even if something seems obvious to me. 
        </p>      
        <p>
           After the last usability study, users shared that the app made finding a pet sitter easier and it could significantly help them to take care of their animals.  
        </p>
        <p>That means the project's goal was successful. </p>
        </Typography>
        
        <Box sx={{display: 'flex', justifyContent: 'center'}} mt={4}>
            <img src={final} alt='Binky App final screens' style={{width: '65%'}}/>
        </Box>
     </Container>
    </>
  )
}

export default BinkyApp
