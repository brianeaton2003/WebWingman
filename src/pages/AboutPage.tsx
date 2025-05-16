import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import PersonIcon from '@mui/icons-material/Person';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { wingmanLogo } from '../assets';

const AboutPage = () => {
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
    <Box sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
              OUR STORY
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
              About Web Wingman
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
              We're passionate about helping businesses and individuals establish a strong online presence through modern, professional websites.
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            <Grid size={{xs: 12, md: 6}}>
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    background: 'linear-gradient(145deg, rgba(23,42,69,0.5) 0%, rgba(10,25,47,0.8) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(100,255,218,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <Box
                    component="img"
                    src={wingmanLogo}
                    alt="Web Wingman Logo"
                    sx={{ 
                      width: '100%',
                      maxWidth: 200,
                      height: 'auto',
                      mb: 4,
                      filter: 'drop-shadow(0 5px 15px rgba(100,255,218,0.3))',
                    }}
                  />
                  <Typography variant="h5" color="text.primary" gutterBottom>
                    Our Mission
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    At Web Wingman, we believe that every business deserves a professional online presence. Our mission is to make high-quality web development accessible to everyone, regardless of technical expertise.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>

            <Grid size={{xs: 12, md: 6}}>
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    background: 'linear-gradient(145deg, rgba(23,42,69,0.5) 0%, rgba(10,25,47,0.8) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(100,255,218,0.1)',
                  }}
                >
                  <Typography variant="h5" color="text.primary" gutterBottom>
                    Our Values
                  </Typography>
                  <Box sx={{ mt: 3 }}>
                    {[
                      {
                        icon: PersonIcon,
                        title: 'Customer Focus',
                        description: 'We put our clients first, ensuring their needs and goals are always our top priority.',
                      },
                      {
                        icon: EmojiObjectsIcon,
                        title: 'Innovation',
                        description: 'We stay at the forefront of web technology to deliver cutting-edge solutions.',
                      },
                      {
                        icon: RocketLaunchIcon,
                        title: 'Excellence',
                        description: 'We strive for excellence in every aspect of our work, from design to performance.',
                      },
                    ].map((value, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          mb: 3,
                          '&:last-child': { mb: 0 },
                        }}
                      >
                        <Box
                          sx={{
                            mr: 2,
                            color: 'secondary.main',
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          <value.icon />
                        </Box>
                        <Box>
                          <Typography variant="h6" color="text.primary" gutterBottom>
                            {value.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {value.description}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutPage;