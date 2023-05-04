import React from 'react'
import { Link, Button, Typography, Container, ListItemText, ListItemButton, ListItem, List, IconButton, Drawer, Divider, CssBaseline, Box, AppBar, Stack   } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {

    const getYear = () => {
        const date = new Date()
        return date.getFullYear();
    }

  return (
    <>
        <Box sx={{ backgroundColor:'#272727', display: 'flex', paddingTop: 4, paddingBottom: 2, alignItems:'center', justifyContent:'center' }}>
            <CssBaseline />
            <Container maxWidth="xl" >
                <Stack sx={{flexWrap: 'wrap'}}
        spacing={{ xs: 2, sm: 2, md: 2 }} alignItems='center' justifyContent='center'>
                  <Typography variant='h5'>Let's get in touch!</Typography> 
                <Stack direction='row' gap={3} >
                <Link href='mailto: w4malinie@gmail.com'><EmailIcon fontSize='large' sx={{color:'white'}}/></Link>
                <Link href='https://www.linkedin.com/in/karolina-krupa-bartkowiak-b586a6181/'><LinkedInIcon fontSize='large' sx={{color:'white'}}/></Link>
                <Link href='https://github.com/w4malinie'><GitHubIcon fontSize='large' sx={{color:'white'}}/></Link>
                </Stack>
                </Stack>
            </Container>
        </Box>
        <Box sx={{display: 'flex', paddingTop: 2, alignItems:'center', justifyContent:'center' }}>
            <Typography variant='body2'>&copy; KKB {getYear()}</Typography>
        </Box>
    </>
  )
}

export default Footer
