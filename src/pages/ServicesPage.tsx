import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import WebIcon from '@mui/icons-material/Web';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import DevicesIcon from '@mui/icons-material/Devices';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import UpdateIcon from '@mui/icons-material/Update';
import { Link } from 'react-router-dom';
import { wingmanLogo } from '../assets';

const services = [
  {
    icon: WebIcon,
    title: 'Custom Website Design',
    description: 'Professional, modern websites tailored to your brand and business needs.',
    features: [
      'Responsive design for all devices',
      'Modern UI/UX principles',
      'Brand-aligned color schemes',
      'Custom animations and transitions',
    ],
  },
  {
    icon: SpeedIcon,
    title: 'Performance Optimization',
    description: 'Lightning-fast websites that keep your visitors engaged.',
    features: [
      'Optimized loading speeds',
      'SEO best practices',
      'Image optimization',
      'Caching implementation',
    ],
  },
  {
    icon: SecurityIcon,
    title: 'Security & Maintenance',
    description: 'Keep your website secure and up-to-date with our maintenance service.',
    features: [
      'SSL certification',
      'Regular security updates',
      'Backup management',
      'Performance monitoring',
    ],
  },
  {
    icon: DevicesIcon,
    title: 'Mobile-First Development',
    description: 'Websites that look and work great on any device.',
    features: [
      'Mobile-responsive design',
      'Touch-friendly interfaces',
      'Cross-browser compatibility',
      'Progressive Web Apps',
    ],
  },
  {
    icon: SupportAgentIcon,
    title: '24/7 Support',
    description: 'Round-the-clock assistance for all your website needs.',
    features: [
      'Technical support',
      'Content updates',
      'Bug fixes',
      'Feature requests',
    ],
  },
  {
    icon: UpdateIcon,
    title: 'Regular Updates',
    description: 'Keep your website fresh and current with regular updates.',
    features: [
      'Content management',
      'Feature additions',
      'Design refreshes',
      'Performance improvements',
    ],
  },
];

const ServicesPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box sx={{ pt: { xs: 3, md: 6 }, pb: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 0, mb: 2 }}>
          <Box
            component="img"
            src={wingmanLogo}
            alt="Web Wingman Logo"
            sx={{
              width: { xs: 100, md: 140 },
              height: 'auto',
              filter: 'drop-shadow(0 5px 15px rgba(100,255,218,0.5))',
            }}
          />
        </Box>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ mb: 8, textAlign: 'center' }}>
            <Typography
              component="span"
              variant="overline"
              color="secondary.main"
              fontWeight="bold"
              sx={{ 
                mb: 2, 
                display: 'block',
                letterSpacing: '0.2em',
              }}
            >
              OUR SERVICES
            </Typography>
            <Typography
              component="h1"
              variant="h3"
              color="text.primary"
              gutterBottom
              sx={{
                background: 'linear-gradient(120deg, #e6f1ff 0%, #64ffda 50%, #14cba8 100%)',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 2px 4px rgba(100,255,218,0.2))',
              }}
            >
              What We Offer
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ 
                maxWidth: 800, 
                mx: 'auto',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -16,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 60,
                  height: 3,
                  background: 'linear-gradient(90deg, #64ffda, transparent)',
                  borderRadius: 2,
                }
              }}
            >
              Comprehensive web solutions designed to help your business succeed online.
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid size={{xs: 12, sm: 6, md: 4}} key={index}>
                <motion.div variants={itemVariants}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'linear-gradient(145deg, rgba(23,42,69,0.5) 0%, rgba(10,25,47,0.8) 100%)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(100,255,218,0.1)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 20px rgba(0,0,0,0.2)',
                        border: '1px solid rgba(100,255,218,0.2)',
                        '& .service-icon': {
                          transform: 'scale(1.1) rotate(5deg)',
                          color: '#64ffda',
                        },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        mb: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <service.icon
                        className="service-icon"
                        sx={{
                          fontSize: 50,
                          color: 'primary.light',
                          transition: 'all 0.3s ease-in-out',
                        }}
                      />
                    </Box>
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      color="text.secondary"
                      paragraph
                      sx={{
                        mb: 3,
                        lineHeight: 1.7,
                      }}
                    >
                      {service.description}
                    </Typography>
                    <Box component="ul" sx={{ 
                      m: 0, 
                      p: 0, 
                      listStyle: 'none',
                      mb: 3,
                    }}>
                      {service.features.map((feature, idx) => (
                        <Box 
                          component="li" 
                          key={idx}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 1,
                            '&:last-child': { mb: 0 },
                            '&::before': {
                              content: '""',
                              display: 'inline-block',
                              width: 6,
                              height: 6,
                              borderRadius: '50%',
                              backgroundColor: 'secondary.main',
                              mr: 1.5,
                            },
                          }}
                        >
                          <Typography variant="body2" color="text.secondary">
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                    <Box sx={{ mt: 'auto', pt: 2 }}>
                      <Button
                        component={Link}
                        to="/contact"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        sx={{
                          borderWidth: 2,
                          '&:hover': {
                            borderWidth: 2,
                          },
                        }}
                      >
                        Learn More
                      </Button>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ServicesPage;