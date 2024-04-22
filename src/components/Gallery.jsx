import * as React from 'react';
import {  ImageList , Divider,  Container, Typography, Button, Box } from '@mui/material';
import { motion as m } from "framer-motion";
import GalleryItem from './GalleryItem'
import stol from '../assets/tinified/STOL.png'
import kable from '../assets/tinified/KABLOZERCA.png'
import potykacz from '../assets/tinified/POTYKACZ.png'
import rpg from '../assets/tinified/rpg.png'
import rpg2 from '../assets/tinified/rpgpoz.png'
import manual from '../assets/tinified/P4JQUZ1.png'
import pasik from '../assets/tinified/pasik — kopia.png'
import extra1 from '../assets/tinified/extra-czarna.png'
import omnibus from '../assets/tinified/OMNIBUS.png'
import gaz1 from '../assets/tinified/GAZ1.png'
import kalendarz from '../assets/tinified/5650481.png'
import gaz2 from '../assets/tinified/gaz.png'
import zlot from '../assets/tinified/ZLO.png'
import gaz3 from '../assets/tinified/biala-extra.jpg'
import sowa from '../assets/tinified/sowa.png'
import lat100 from '../assets/tinified/100lat.png'
import booklet from '../assets/tinified/396.jpg'
import gaz4 from '../assets/tinified/GAZpowstanie.png'
import tos from '../assets/tinified/tos.png'
import chinchilla from '../assets/tinified/KOSMOS.png'
import kombinezon from '../assets/tinified/zelazny-kombinezon.jpg'
import kkblogo from '../assets/tinified/kkblogo.png'
import acro from '../assets/tinified/acrologo.png'

const buttonStyle = {
  width: '50%',
  fontWeight: 'bold'

}

const itemData = [
    {
      img: manual,
      title: 'ASSD+PL manual ',
    }, 
    {
      img: stol ,
      title: 'rabbit warning sticker with table' ,
    },
    {
        img: kable,
        title: 'rabbit warning sticker with cords',
    }, 
    {
      img: extra1,
      title: 'extra aerobatic plane tshirt',
    },
    {
      img: rpg,
      title: 'rpg hoodie',
    },
    {
      img: pasik,
      title: 'rabbit Pasikonik from Azyl dla ',
    },
   
   
    {
        img: potykacz,
        title: 'rabbit warning sticker with falling human',
    },
    {
      img: rpg2,
      title: 'rpg mug',
    },
    {
      img: gaz1,
      title: 'Grupa Akrobacyjna Zelazny poster',
    },
    {
      img: omnibus,
      title: 'omnibus logo',
    },
    {
      img: acro,
      title: 'AcroYoga Poznan logo',
    },
    {
        img: kalendarz ,
        title: 'Grupa Akrobacyjna Zelazny calendar' ,
      },
      {
        img: gaz2,
        title: 'Grupa Akrobacyjna Zelazny hoodie',
      },
      {
        img: zlot,
        title: 'Zlot gigantow poster',
      },
      {
        img: gaz3,
        title: 'extra aerobatic plane black tshirt',
      },
      {
          img: sowa,
          title: 'sticker with lizard',
      },
      {
        img: lat100,
        title: '100th anniversary of the poznan aero club',
      },
      {
        img: booklet,
        title: 'booklet Jastrowie',
      },
      {
        img: kombinezon,
        title: 'Grupa Akrobacyjna Zelazny flight suite',
      },
      {
        img: kkblogo,
        title: 'kkb personal logo',
      },
      {
        img: gaz4,
        title: 'Grupa Akrobacyjna Zelazny poster Powstanie warszawskie',
      },
      {
        img: tos,
        title: 'rabbit magnets the omyk story',
    },
    {
        img: chinchilla,
        title: 'chinchilla space poster',
    },
  ];

export default function QuiltedImageList() {
  return (
    <m.div
    initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
  >
    <Container maxWidth="xl" id='graphics'>
      <Box mt={8}mb={6} >
        <Divider  sx={{
      "&::before, &::after": {
        borderColor: "#FFB3B5",
        borderWidth: '2px'
      },
    }} textAlign="left"><Typography  variant='h2'>Graphic Design</Typography>
       </Divider>
       <Box sx={{ maxWidth: 980 }}>
            <Typography variant='body1' mt={3} mb={2} >
                <p>Since 2014, I've been crafting graphic designs across diverse fields, from aviation to charitable foundations. My work spans various mediums, including aircraft exteriors, apparel, and web banners. Many of my designed posters, calendars, and publications have been printed in large quantities (some with over 10.000 copies). Additionally, my contributions to charity fundraisers have supported homeless animals. Here are some of my favourite projects.</p>
        </Typography>
      </Box>
      </Box>
    <ImageList  variant="masonry" cols={3} gap={16}>
        {itemData.map((item) => <GalleryItem item={item} /> )}
      </ImageList>
     <Box sx={{textAlign:"center"}}> <Button variant="outlined" sx={buttonStyle}  component="a" href="https://new.express.adobe.com/published/urn:aaid:sc:EU:3288c5bc-0e14-4baa-b444-319eb7affb3b?promoid=Y69SGM5H&mv=other">View my Social Media Portfolio</Button></Box>

    </Container >
    </m.div>
  );
}
