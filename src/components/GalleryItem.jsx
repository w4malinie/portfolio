import * as React from 'react';
import { Box, ImageListItem } from '@mui/material';
import BasicModal from './shared/BasicModal'

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
                onClick={() => setIsOpen(true)}
              />
          </ImageListItem>
    </>
    )
}