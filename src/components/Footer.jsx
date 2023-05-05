import React from 'react'
import { Link, Button, Typography, Container, ListItemText, ListItemButton, ListItem, List, IconButton, Drawer, Divider, CssBaseline, Box, AppBar, Stack   } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const style = {
  left: 0,
  bottom: 0,
  width: '100%',
  backgroundColor:'#272727', 
  display: 'flex', 
  paddingTop: 4, 
  paddingBottom: 2, 
  alignItems:'center', 
  justifyContent:'center',
  mt: 4
}

function Footer() {

    const getYear = () => {
        const date = new Date()
        return date.getFullYear();
    }

  return (
    <>
        <Box sx={style}>
            <CssBaseline />
            <Container maxWidth="xl" >
                <Stack direction='row' sx={{flexWrap: 'wrap'}}
                spacing={{ xs: 2, sm: 2, md: 2 }} alignItems='center' justifyContent='center'>
                    <Typography variant='h5'>Let's get in touch!</Typography> 
                    <Stack direction='row' gap={2} >
                        <Link href='mailto: w4malinie@gmail.com'><EmailIcon fontSize='medium' sx={{color:'white'}}/></Link>
                        <Link href='https://www.linkedin.com/in/karolina-krupa-bartkowiak-b586a6181/'><LinkedInIcon fontSize='medium' sx={{color:'white'}}/></Link>
                        <Link href='https://github.com/w4malinie'><GitHubIcon fontSize='medium' sx={{color:'white'}}/></Link>
                    </Stack>
                </Stack>
                <Box sx={{ display: 'flex', mt: 2, alignItems:'center', justifyContent:'center' }}>
                    <Typography variant='body2'>&copy; Karolina Krupa-Bartkowiak {getYear()}</Typography>
                </Box>
            </Container>
        </Box>
        
    </>
  )
}

export default Footer
