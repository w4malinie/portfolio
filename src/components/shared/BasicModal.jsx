import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: { md:'40vw', sm: '95%'},
  width: {

    sm: '70%',
    xs: '80%',
  },
  pt: 2,
  pl: 4,
  pr: 4,
  pb: 4,
  bgcolor: 'background.paper',
  boxShadow: 24,

};

export default function BasicModal({isOpen, handleClose, children}) {
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        maxWidth='lg'
      >
        <Box sx={style}>
            {children}
        </Box>
      </Modal>
    </div>
  );
}
