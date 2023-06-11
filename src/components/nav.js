import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, Container, Drawer, IconButton, List, ListItem, ListItemButton, Toolbar, Typography } from '@mui/material';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
const Nav = () => {

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    return (
        <AppBar position='sticky'>
            <Container maxWidth="lg">
                <Toolbar disableGutters>

                    <Link to="/"><StaticImage alt="crossdot logo" src="../images/crossdot.svg" style={{ maxWidth: "6rem" }} /></Link>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
                        <IconButton size="large" color='inherit' onClick={handleDrawerToggle} edge="end">
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            variant='temporary'
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true,
                            }}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                            }}
                        >
                            <Box >
                                <List>
                                    <ListItem>
                                        <ListItemButton>
                                            <Link to="/articles/about-us" style={{ textDecoration: 'none' }}><Typography variant='body1' color="primary.main" textTransform='uppercase'>About</Typography></Link>
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemButton>
                                            <Link to="/articles" style={{ textDecoration: 'none' }}><Typography variant='body1' color="primary.main" textTransform='uppercase'>Articles</Typography></Link>
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </Box>
                        </Drawer>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                        <Button>
                            <Link to="/articles/about-us" style={{ textDecoration: 'none' }}><Typography variant='body1' color="common.white">About</Typography></Link>
                        </Button>
                        <Button>
                            <Link to="/articles" style={{ textDecoration: 'none' }}><Typography variant='body1' color="common.white">Articles</Typography></Link>
                        </Button>
                    </Box>


                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Nav
