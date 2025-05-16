import { useState, useEffect } from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText,
  Container,
  ListItemIcon,
  alpha
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import PaidIcon from '@mui/icons-material/Paid';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Link, useLocation } from 'react-router-dom';
import { wingmanLogo } from '../../assets';

const navItems = [
  { name: 'Home', path: '/', icon: HomeIcon },
  { name: 'About', path: '/about', icon: InfoIcon },
  { name: 'Services', path: '/services', icon: DesignServicesIcon },
  { name: 'Pricing', path: '/pricing', icon: PaidIcon },
  { name: 'Contact', path: '/contact', icon: ContactMailIcon },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ my: 2, display: 'flex', justifyContent: 'center' }}>
        <Box 
          component="img"
          src={wingmanLogo}
          alt="Web Wingman Logo"
          sx={{ 
            height: 50,
            width: 'auto',
            filter: 'drop-shadow(0 2px 8px rgba(100,255,218,0.3))',
          }}
        />
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton 
              sx={{ 
                textAlign: 'center',
                color: location.pathname === item.path ? 'secondary.main' : 'text.primary',
                '&:hover': {
                  backgroundColor: 'rgba(100,255,218,0.1)',
                }
              }}
              component={Link}
              to={item.path}
            >
              <ListItemIcon sx={{ 
                minWidth: 40, 
                display: 'flex', 
                justifyContent: 'center',
                color: location.pathname === item.path ? 'secondary.main' : 'inherit'
              }}>
                <item.icon />
              </ListItemIcon>
              <ListItemText 
                primary={item.name}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="fixed" 
      color="primary" 
      elevation={0}
      sx={{
        backdropFilter: 'blur(8px)',
        backgroundColor: scrolled 
          ? alpha('#0a192f', 0.8)
          : 'transparent',
        transition: 'all 0.3s ease-in-out',
        borderBottom: scrolled 
          ? '1px solid rgba(100,255,218,0.1)'
          : 'none',
        py: 0.5,
        height: { xs: 60, md: 60 },
        
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'center', position: 'relative', minHeight: { xs: 48, md: 56 } }}>
          {/* Desktop logo */}
          <Box
            component={Link}
            to="/"
            sx={{
              mr: 4,
              display: { xs: 'none', md: 'flex' },
              textDecoration: 'none',
            }}
          >
            <Box 
              component="img"
              src={wingmanLogo}
              alt="Web Wingman Logo"
              sx={{ 
                height: 50,
                width: 'auto',
                filter: 'drop-shadow(0 2px 8px rgba(100,255,218,0.3))',
              }}
            />
          </Box>
          {/* Mobile logo aligned right */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: { xs: 'flex', md: 'none' },
              position: 'absolute',
              right: 0,
              top: 0,
              height: '100%',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <Box 
              component="img"
              src={wingmanLogo}
              alt="Web Wingman Logo"
              sx={{ 
                height: 40,
                width: 'auto',
                filter: 'drop-shadow(0 2px 8px rgba(100,255,218,0.3))',
              }}
            />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerToggle}
              color="inherit"
              sx={{ 
                fontSize: '2rem',
                '& .MuiSvgIcon-root': {
                  fontSize: '2rem'
                }
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          
          <Box sx={{ 
            display: { xs: 'none', md: 'flex' },
            gap: 2,
          }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={Link}
                to={item.path}
                startIcon={<item.icon />}
                sx={{
                  color: location.pathname === item.path ? 'secondary.main' : 'text.primary',
                  fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                  fontSize: '1.1rem',
                  py: 1,
                  px: 2,
                  '&:hover': {
                    backgroundColor: 'rgba(100,255,218,0.1)',
                  },
                  position: 'relative',
                  '&::after': location.pathname === item.path ? {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '80%',
                    height: 2,
                    backgroundColor: 'secondary.main',
                    borderRadius: 1,
                  } : {},
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: 240,
              backgroundColor: 'background.paper',
              borderRight: '1px solid rgba(100,255,218,0.1)',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar /> {/* Spacer for fixed AppBar */}
    </AppBar>
  );
};

export default Header;