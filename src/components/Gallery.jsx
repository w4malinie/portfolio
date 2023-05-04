import * as React from 'react';
import {  ImageList , ImageListItem , Divider,  Container, Typography, Grid } from '@mui/material';
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
        img: gaz1,
        title: 'Grupa Akrobacyjna Zelazny poster Powstanie warszawskie',
      },
      {
        img: tos,
        title: 'rabbit magnets the omyk story',
    },
    {
        img: chinchilla,
        title: 'chincvhilla space poster',
    },
    
  ];

export default function QuiltedImageList() {
  return (
    <Container maxWidth="xl">
    <Divider  sx={{
  "&::before, &::after": {
    borderColor: "#616161",
  },
}} textAlign="left"><Typography  mt={8} mb={4}variant='h2'>Graphic Design</Typography></Divider>
    <ImageList variant="masonry" cols={3} gap={16}>
        {itemData.map((item) => <GalleryItem item={item} /> )}
      </ImageList>
    </Container >
  );
}

  