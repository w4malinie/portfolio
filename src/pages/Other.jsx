import React from 'react'
import {  Container, Typography,Box,  Link } from '@mui/material';
import { motion as m } from "framer-motion";
import other from '../assets/tinified/other.jpg'
import autoweb from '../assets/tinified/autoweb.png'
import mkweb from '../assets/tinified/mkweb.png'
import mechweb from '../assets/tinified/mechweb.png'
import przeweb from '../assets/tinified/przeweb.png'
import orlengazelazny from '../assets/tinified/orlengazelazny.png'


function BinkyApp() {
  return (
    <m.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    >
     <Container id='other' maxWidth='md'>
        <Box>
            <img src={other} alt='other projects'/>
        </Box>
        <Typography variant='h1' component='h2'sx={{textAlign: 'center', mt: 4, mb: 6}}>
        Webmastering
        </Typography>

        <Box sx={{display: {sm: 'flex', xs: 'block'}, justifyContent: 'space-around', mb:4, borderTop: '1px solid #FFB3B5', borderBottom: '1px solid #FFB3B5', pt: 2, pb: 2 }}>
            <Typography variant='h5'>
            Role: <span style={{fontWeight: 'normal'}}>UX/UI designer, Webmaster, SEO</span>
            </Typography>
            
        </Box>
        <Typography variant='h4' >
            Projects Overview
        </Typography>
        <Typography variant='body1' >
        <p>Beyond graphic design, I've been immersed in webmastering for years. Whether it's enhancing an existing site or designing a new one from scratch, I'm up for the challenge! I dive into each project with enthusiasm, always eager to learn and adapt. While I've lost count of the websites I've designed or managed, here are a few highlights.
</p>
        </Typography>
       {/* PROJECT */}
       <Typography textAlign='center' variant='h3' mt={4}>
       ORLEN Grupa Akrobacyjna ZELAZNY 
        </Typography>
        <hr style={{borderColor: '#FFB3B5'}}/>
        <Box mt={4}>
        <Link href='https://orlengazelazny.pl/'><img src={orlengazelazny} alt='ORLEN Grupa Akrobacyjna ZELAZNY homepage'/> </Link>   
        </Box>
        <Typography variant='body1' >
        <p><Link href='https://orlengazelazny.pl/'> ORLEN Grupa Akrobacyjna ŻELAZNY</Link> is the longest-running civilian aerobatic team in Poland, founded in 1999 out of a passion for aerobatic flying. Since January 2020, as a member of the ORLEN TEAM, the group has continuously raised the bar in aviation performances.</p>
<p>
I've collaborated with OGAŻ for many years, primarily as a graphic designer. Recently, I was tasked with designing and developing their new website due to the urgency of not having a functioning site. Drawing on my expertise in coding, UI/UX writing, and digital marketing, I managed to create a dynamic website that captures the spirit of ORLEN Grupa Akrobacyjna ŻELAZNY within just a few weeks.</p> 
      
        </Typography>
        {/* PROJECT */}
        <Typography textAlign='center' variant='h3' mt={4}>
        AutoPsychoTerapia
        </Typography>
        <hr style={{borderColor: '#FFB3B5'}}/>
        <Box mt={4}>
        <Link href='http://www.autopsychoterapia.pl/'><img src={autoweb} alt='AutoPsychoTerapia homepage'/> </Link>   
        </Box>
        <Typography variant='body1' >
        <p><Link href='http://www.autopsychoterapia.pl/'>AutoPsychoTerapia </Link> is a site dedicated to this therapeutic method and serves as a psychologist's online business card. The design was inspired by an existing paper business card, and thanks to clear directives and excellent client collaboration, we launched the site in less than a week.  </p> 
      
        </Typography>
       {/* PROJECT */}
       <Typography textAlign='center' variant='h3' mt={4}>
        Marta Kuchcińska Fotografia
        </Typography>
        <hr style={{borderColor: '#FFB3B5'}}/>
        <Box mt={4}>
        <Link href='https://martakuchcinska.pl/'><img src={mkweb} alt='Marta Kuchcińska Fotografia Homepage'/></Link>
        </Box>
        <Typography variant='body1' >
        <p><Link href='https://martakuchcinska.pl/'>Marta Kuchcińska Fotografia </Link> showcases the portfolio of a photographer specialising in wedding and lifestyle photography. Facing compatibility issues with an outdated WordPress template, I revamped the site with a new template, improved its layout and UX, and optimised it for SEO. The results? The site's owner recently mentioned that demand for photo sessions has surpassed her capacity! </p> 
        
        </Typography>
        {/* PROJECT */}
        <Typography textAlign='center' variant='h3' mt={4}>
        przesławska art
        </Typography>
        <hr style={{borderColor: '#FFB3B5'}}/>
        <Box mt={4}>
        <Link href='https://przeslawska.art/'><img src={przeweb} alt='przesławska art homepage'/></Link> 
        </Box>
        <Typography variant='body1' >
        <p><Link href='https://przeslawska.art/'>przesławska art </Link> is a portfolio site for a business and classic glamour photographer. We built the site from scratch on WordPress CMS, installing and customising a template while refining the UX. This project marked my first foray into React.JS, as the WordPress template was built on this technology. </p> 
        
        </Typography>
        {/* PROJECT */}
        <Typography textAlign='center' variant='h3' mt={4}>
        Mechatronika
        </Typography>
        <hr style={{borderColor: '#FFB3B5'}}/>
        <Box mt={4}>
        <Link href='https://mechatronika.pl/'><img src={mechweb} alt='Mechatronika Homepage'/></Link>
        </Box>
        <Typography variant='body1' >
        <p><Link href='https://mechatronika.pl/'>Mechatronika</Link> is a company offering a comprehensive range of technical and educational support for specialised fields like automotive, aviation, and agricultural mechanisation education. When I was approached to help with their website, it hadn't been updated for over a year due to an unintuitive CMS and confusing features. In the initial weeks, I added dozens of overdue subpages with new products, revamped the site architecture, and improved existing content. Now boasting over 160 subpages (up from 50), the site features cohesive content, updated offerings, and consistent imagery.
 </p> 
        
      
        </Typography>
     </Container>
    </m.div>
  )
}

export default BinkyApp
