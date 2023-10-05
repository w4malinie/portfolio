import * as React from 'react';
import { Link, Toolbar, ListItemText, ListItemButton, ListItem, List, IconButton, Drawer, Divider, CssBaseline, Box, AppBar   } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import logo from '../assets/logo.svg'
import { HashLink } from 'react-router-hash-link';

const drawerWidth = 280;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Link href='/'><img src={logo} alt="Logo" style={{height: 
          '48px', marginTop: '8px'}}/></Link>
      <Divider />
      <List>
      <ListItem>
       <ListItemButton>
        <HashLink className='hash' smooth to="/#start">
          Home
        </HashLink>
        </ListItemButton>
       </ListItem>
       <ListItem>
        <ListItemButton component="a" href="#graphics">
          <ListItemText primary="Graphic Design" />
        </ListItemButton>
       </ListItem>
       <ListItem>
        <ListItemButton component="a" href="#ux-ui">
          <ListItemText primary="UX/UI" />
        </ListItemButton>
       </ListItem>
       
       <ListItem>
       <ListItemButton>
        <HashLink className='hash' smooth to="/#about">
          About
        </HashLink>
        </ListItemButton>
       </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" position='fixed'>
        <Toolbar>
          <Link href='/' sx={{ flexGrow: 1, display: { sm: 'block' } }}><img alt="Logo" src={logo} style={{height: 
          '48px', marginTop: '8px'}}/></Link>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 0, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box elevation={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <List sx={{ margin:0, display:'flex', m: 0, textAlign: 'center'}}>
      <ListItem>
        <ListItemButton component="a" href="/">
          <ListItemText primary="Home" />
        </ListItemButton>
       </ListItem>
       <ListItem>
       <ListItemButton>
        <HashLink className='hash' smooth to="/#graphics">
          Graphics
        </HashLink>
        </ListItemButton>
       </ListItem>
       <ListItem>
       <ListItemButton>
        <HashLink className='hash' smooth to="/#ux-ui">
          UX/UI
        </HashLink>
        </ListItemButton>
       </ListItem>
       
       <ListItem sx={{pr: 0}}>
        <ListItemButton>
        <HashLink
        className='hash' smooth to="/#about">
          About
        </HashLink>
        </ListItemButton>
       </ListItem>
      </List>
      </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}


export default DrawerAppBar;