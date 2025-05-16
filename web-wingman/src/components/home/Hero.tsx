import { Box, Button, Container, Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';
import { wingmanLogo } from '../../assets';

const Hero = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        pt: { xs: 6, md: 12 },
        pb: { xs: 6, md: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: 6, md: 4 },
          }}
        >
          <Box sx={{ order: { xs: 1, md: 2 } }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
              <Box
                sx={{
                  width: { xs: '100%', md: '60%' },
                  maxWidth: { xs: 480, md: 600 },
                  height: { xs: 200, md: 440 },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  mb: { xs: 2, md: 0 },
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: { xs: 280, md: 420 },
                    height: { xs: 280, md: 420 },
                    background: 'radial-gradient(circle, rgba(100,255,218,0.15) 0%, rgba(10,25,47,0) 70%)',
                    zIndex: 0,
                    borderRadius: '50%',
                  }}
                />
                <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <motion.img
                    src={wingmanLogo}
                    alt="Web Wingman Logo"
                    style={{ 
                      width: '100%',
                      maxWidth: '480px',
                      height: 'auto',
                      marginBottom: '10px'
                    }}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 6,
                      ease: 'easeInOut',
                      repeat: Infinity,
                    }}
                  />
                  <Typography
                    variant="h4"
                    sx={{
                      color: '#64ffda',
                      fontSize: '2rem',
                      lineHeight: 1,
                      textAlign: 'center',
                      display: { xs: 'none', md: 'block' },
                      mt: '-10px'
                    }}
                  >
                    Web Wingman
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Box>
          
          <Box sx={{ order: { xs: 2, md: 1 } }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <Box sx={{ maxWidth: { xs: '100%', md: '90%' }, flexBasis: { md: '40%' } }}>
                <Typography
                  component="h1"
                  variant="h2"
                  color="text.primary"
                  fontWeight="bold"
                  gutterBottom
                  sx={{
                    background: 'linear-gradient(120deg, #e6f1ff 0%, #64ffda 50%, #14cba8 100%)',
                    backgroundClip: 'text',
                    textFillColor: 'transparent',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 2px 4px rgba(100,255,218,0.2))',
                    maxWidth: '1000px',
                    mx: 'auto',
                    lineHeight: 1.2,
                    fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
                    mb: { xs: 2, sm: 3 },
                  }}
                >
                  Professional Websites{" "}
                  <Box component="span" display="block" sx={{ mt: { xs: 1, sm: 1 } }}>
                    for Businesses & Individuals
                  </Box>
                </Typography>
                
                <Typography
                  variant="h5"
                  color="text.secondary"
                  sx={{ 
                    mb: 4,
                    position: 'relative',
                    maxWidth: '800px',
                    mx: 'auto',
                    fontSize: { xs: '1.1rem', sm: '1.25rem' },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -16,
                      left: 0,
                      width: '75%',
                      height: 3,
                      background: 'linear-gradient(90deg, #64ffda, transparent)',
                      borderRadius: 2,
                    }
                  }}
                >
                  <Box 
                    component="span" 
                    sx={{ 
                      color: 'secondary.main', 
                      fontWeight: 500,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    No technical expertise required
                  </Box>
                </Typography>
                
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      component={Link}
                      to="/services"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        background: 'linear-gradient(45deg, #64ffda 30%, #14cba8 90%)',
                        boxShadow: '0 3px 12px rgba(100,255,218,0.2)',
                      }}
                    >
                      Explore Our Services
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outlined"
                      color="secondary"
                      size="large"
                      component={Link}
                      to="/contact"
                      sx={{
                        borderWidth: 2,
                        '&:hover': {
                          borderWidth: 2,
                        },
                      }}
                    >
                      Get in Touch
                    </Button>
                  </motion.div>
                </Stack>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;