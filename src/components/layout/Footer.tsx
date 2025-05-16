import { Box, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { wingmanLogo } from '../../assets';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(100,255,218,0.2), transparent)',
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{xs: 12, sm: 6}}>
            <Box sx={{ mb: 2 }}>
              <Box 
                component="img"
                src={wingmanLogo}
                alt="Web Wingman Logo"
                sx={{ 
                  height: 60,
                  width: 'auto',
                  mb: 1,
                  filter: 'drop-shadow(0 2px 8px rgba(100,255,218,0.3))',
                }}
              />
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 400 }}>
              Creating and hosting professional websites for businesses and individuals with our subscription service.
            </Typography>
          </Grid>
          
          <Grid size={{xs: 12, sm: 6}}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none' }}>
              {links.map((item) => (
                <Box component="li" key={item.name} sx={{ py: 0.5 }}>
                  <Link
                    to={item.path}
                    style={{ 
                      color: 'inherit',
                      textDecoration: 'none',
                    }}
                  >
                    <Typography
                      color="text.secondary"
                      sx={{ 
                        transition: 'color 0.2s ease-in-out',
                        '&:hover': { 
                          color: 'secondary.main',
                        }
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
        
        <Box 
          sx={{ 
            mt: 5, 
            textAlign: 'center',
            pt: 3,
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Web Wingman. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;