import React from 'react'
import {  Container, Typography,Box,  Link } from '@mui/material';
import { motion as m } from "framer-motion";
import vinted from '../assets/vinted.jpg'
import clothes1 from '../assets/vinted/clothes.jpg'
import ujv from '../assets/vinted/uj.png'
import filters from '../assets/vinted/filters.png'
import skirt from '../assets/vinted/Shiny_pleated_skirt.jpg'
import problem from '../assets/vinted/2.png'
import search1 from '../assets/vinted/3.png'
import describing from '../assets/vinted/4.png'
import selling from '../assets/vinted/5.png'
import sollution1 from '../assets/vinted/2b.png'
import sollution2 from '../assets/vinted/6.png'
import sollution2b from '../assets/vinted/7.png'
import sollution2c from '../assets/vinted/8.png'
import clothes2 from '../assets/vinted/clothes2.jpg'

function BinkyApp() {
  return (
    <m.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    >
     <Container id='vinted' maxWidth='md'>
        <Box>
            <img src={vinted} alt='vinted logo'/>
        </Box>
        <Typography variant='h1' component='h2'sx={{textAlign: 'center', mt: 4, mb: 6}}>
        Vinted - search redesign
        </Typography>

        <Box sx={{display: {sm: 'flex', xs: 'block'}, justifyContent: 'space-around', mb:4, borderTop: '1px solid #FFB3B5', borderBottom: '1px solid #FFB3B5', pt: 2, pb: 2 }}>
            <Typography variant='h5'>
            Role: <span style={{fontWeight: 'normal'}}>UX Designer</span>
            </Typography>
            <Typography variant='h5'>
            Duration: <span style={{fontWeight: 'normal'}}>June 2022</span>
            </Typography>
        </Box>
        <Typography variant='h4' >
            Product Overview
        </Typography>
        <Typography variant='body1' >
        <p><Link href='https://www.vinted.pl/'>Vinted </Link> is an online marketplace for buying, selling and exchanging new or secondhand items, mainly clothing and accessories. Currently, Vinted is available in 16 countires.</p>
        </Typography>
        <Box mt={4}>
            <img src={clothes1} alt='woman folding clothes'/>
        </Box>
        <Typography variant='h4' mt={4}>
            Project
        </Typography>
        <Typography variant='body1' >
        <p>I'm a big fan of Vinted and have been using it for a year, but I can tell many UX drawbacks of the app. I was curious if others were experiencing issues like I do. Because of that, I started asking people about their experience using Vinted. </p> 
        <p>The majority of my respondents were very fond of Vinted, but they experienced a lot of pain points similar to mine.</p>
        </Typography>
        <Typography variant='h4' mt={4}>
            Goal
        </Typography>
        <Typography variant='body1' >
        <p>To improve the search experience and overall UX with a minimal amount of changes. </p> 
        </Typography>
        <Typography variant='h4' mt={4}>
            Pain points
        </Typography>
        <Typography variant='body1' >
        <ul>
            <li>issues finding interesting clothes and items

        </li>
            <li>the clothes didn't fit them despite the size specified in the item’s description</li>
            <li>poor clothes description </li>
            <li>necessity to DM's seller about details</li>
        </ul> 
        </Typography>
        {/* NEXT SECTION */}
        <Typography textAlign='center' variant='h3' mt={4}>
            User journey
        </Typography>
        <hr style={{borderColor: '#EF87C7'}}/>
        <Box mt={4}>
            <img src={ujv} alt='vinted user journey'/>
        </Box>
        <Typography variant='body1' >
        <p>The user, named Kate is a 29 year old florist living in Poznań, Poland. She is a zero waste enthusiast concerned about environmental and social issues. 
        </p> 
        <p>
        She wants to buy a pre-owned skirt. </p>
        <p>
        Kate doesn't have very specific requirements about colors but wants a mid-length, A-line, pleated skirt. 
        </p>
        <p>
        She goes to the skirts category. There are 13 sub-categories, separate for midi, A-line, and pleated.  
        </p>
        </Typography>
        <Box mt={4}>
            <img src={filters} alt='vinted filters'/>
        </Box>
        <Typography variant='body1' >
        <p>Kasia decides to check the "all skirts” category and search for "midi pleated". She receives only 5 results. 
        </p> 
        <p>
        She goes to the filters to check 3 colors and 3 style features she is interested in. </p>
        <p>
        Even though she can select multiple colors, only one style option is available because "style" is assigned to sub-categories.
        </p>
        <p>
        Kasia decides to pick the "pleated skirts" style and starts scrolling. After 20 minutes she finds a nice A-line pleated skirt. 
        </p>
        </Typography>
        <Box mt={4}>
            <img src={skirt} alt='long pink pleated skirt'/>
        </Box>
        <Typography variant='body1' >
        <p>She goes to the description and reads "Very good condition". This information is obvious, because she marked this filter option. 
        </p> 
        <p>
        She wants to know how long the skirt is? (model can be tall or petite) and what material it is made of?</p>
        <p>
        She doesn't know the brand so she is also unsure about size. She can DM's seller, but thinks it's not worth it. 
        </p>
        <p>
        After almost an hour, Kasia feels irritated and closes the app.
        </p>
        </Typography>
        {/* NEXT SECTION */}
        <Typography textAlign='center' variant='h3' mt={4}>
           UX Problems
        </Typography>
        <hr style={{borderColor: '#EF87C7'}}/>
        <Box mt={4}>
            <img src={problem} alt='inconsistent filters'/>
        </Box>
        <Typography variant='body1' >
        <p>After analyzing the user journey and multiple app screens, I discovered that the problem stems from the seller panel. 
        </p> 
        <p>Firstly, products are grouped into categories based on only one main feature. The problem is the majority of clothes have at least 2 features. Both buyer and seller have to make multiple decisions. </p>
        <p>Some choices are obvious, like choosing “clothes for a woman” category for skirts. However, some decisions force users to tell which feature is the most important: length, material, style or other. 
        </p>
        </Typography>
        <Box mt={4}>
            <img src={search1} alt='adding and searching inconsistency'/>
        </Box>
        <Typography variant='body1' >
        <p>Another problem is the absence of helpful suggestions for the seller about describing items. On the other side, the buyer has a tough time finding the item. 
        </p> 
        </Typography>
        <Box mt={4}>
            <img src={describing} alt='describing item'/>
        </Box>
        <Typography variant='body1' >
        <p>And lastly, the seller panel is not consistent with app filters. While sellers have to follow the category path, a buyer can choose both category and a style.
        </p> 
        </Typography>
        <Box mt={4}>
            <img src={selling} alt='describing item'/>
        </Box>
        {/* NEXT SECTION */}
        <Typography textAlign='center' variant='h3' mt={4}>
            UX Solutions 
        </Typography>
        <hr style={{borderColor: '#EF87C7'}}/>
        <Typography variant='h5' mt={4}>1.Making selling and searching analogous process by enabling users to make multiple choices
        </Typography>
        <Typography variant='body1' >
        <p>If a seller could assign multiple style features to an item, it would appear in several categories - not only in one. An item would be easier to find using filters.  
        </p>
        <p>This is the way many ecommerce apps, including Zalando, work. </p>
        </Typography>
        <Box mt={4}>
            <img src={sollution1} alt='multiple choice filter'/>
        </Box>
        <Typography variant='h5' mt={4}>2. Making consistent hints and suggestions.
        </Typography>
        <Typography variant='body1' >
        <p>Currently, Vinted suggests sellers titles e.g. "White COS Jumper", but the search bar placeholder text says "Search for items or members".  
        </p>
        <p>It would be more consistent and helpful to suggest users to search for the "White COS Jumper" or "Black ZARA dress" (feature, brand, product).</p>
        </Typography>
        <Box mt={4}>
            <img src={sollution2} alt='consistent hints and suggestions in titl'/>
        </Box>
        <Typography variant='body1' >
        <p>The suggestion in the description is "Only worn a few times, true to size". But this hint is not helpful, as there is an obligatory Condition field. Information "true to size" is also problematic. It's very subjective assumption and most brands have different sizing. Most buyers want to know least the item’s material and dimensions; Vinted could suggest seller providing that information.
        </p>
        </Typography>
        <Box mt={4}>
            <img src={sollution2b} alt='consistent hints and suggestions in description'/>
        </Box>
        <Typography variant='body1' >
        <p>One of the most popular marketplace platforms, OLX, tells the seller that "The more details, the better!". They also suggest providing relevant details, and be precise and honest. </p>
        <p>Also, the description can't be shorter than 80 characters. It prevents skipping it by typing only one word. </p>
        </Typography>
        <Box sx={{display: 'flex', justifyContent: 'center'}} mt={4}>
            <img src={sollution2c} alt='olx description hint'/>
        </Box>
        <Typography textAlign='center' variant='h3' mt={4}>
           Summary
        </Typography>
        <hr style={{borderColor: '#EF87C7'}}/>
        <Typography variant='body1' >
        <p>My goal was to improve the search experience with a minimal amount of changes. It turned out making the search experience better and less distracting is easier to achieve than I had thought. It boils down to minimizing users’ mental effort and constantly helping them in making decisions. 
        </p> 
        </Typography>
        <Box mt={4}>
            <img src={clothes2} alt='pile of clothes'/>
        </Box>
     </Container>
    </m.div>
  )
}

export default BinkyApp
