import * as React from 'react';
import { Box, Button, ImageListItem } from '@mui/material';
import BasicModal from './shared/BasicModal'
import CloseIcon from '@mui/icons-material/Close';

export default function GalleryItem({item}) {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <>
          <BasicModal
            isOpen={isOpen}
            handleClose={() => setIsOpen(false)}
          > 
            {/* MODAL CONTENT */}
            <Box>
              <Box sx={{display: 'flex', justifyContent: 'flex-end', marginBottom: 2}}>
                  <Box onClick={() => setIsOpen(false)} sx={{cursor: 'pointer', display: 'inline-block'}}><Button><CloseIcon/></Button></Box>
              </Box>
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                />
            </Box>
          </BasicModal>
            <ImageListItem key={item.img}>
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className='gallery-item-img'
                onClick={() => setIsOpen(true)}
              />
          </ImageListItem>
    </>
    )
}