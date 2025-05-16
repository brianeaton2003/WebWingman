import { Box, Container, Typography, Grid, Paper, useTheme, useMediaQuery } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { motion } from 'framer-motion';
import Carousel from '../common/Carousel';

const technologies = [
  {
    title: 'Modern Frameworks',
    description: 'We build with React, Vite, and other modern frameworks for optimal performance.',
    icon: CodeIcon,
  },
  {
    title: 'Robust Backend',
    description: 'Our backends are built with Node.js, Express, and other scalable technologies.',
    icon: StorageIcon,
  },
  {
    title: 'Advanced Security',
    description: 'Bank-grade HTTPS encryption and enterprise security features keep your website protected.',
    icon: SecurityIcon,
    features: [
      'SSL/TLS Encryption (HTTPS)',
      'Advanced DNS Protection',
      'DDoS Mitigation',
      'Automated Security Updates'
    ]
  },
  {
    title: 'Performance Optimization',
    description: 'We implement lazy loading, code splitting, and other performance techniques.',
    icon: SpeedIcon,
  },
  {
    title: 'TypeScript Integration',
    description: 'We use TypeScript for type-safe coding, reducing errors and improving maintainability.',
    icon: CodeIcon,
  },
  {
    title: 'Modern Design',
    description: 'Clean, professional designs with Material UI and custom styling for a polished user experience.',
    icon: DesignServicesIcon,
  },
];

const Technologies = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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

  const renderTechCard = (tech: typeof technologies[0], index: number) => (
    <motion.div variants={itemVariants} key={index}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 4 },
          height: '100%',
          minHeight: { xs: 320, md: 380 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          background: 'linear-gradient(145deg, rgba(23,42,69,0.3) 0%, rgba(10,25,47,0.5) 100%)',
          backdropFilter: 'blur(5px)',
          border: '1px solid rgba(100,255,218,0.05)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 20px rgba(0,0,0,0.1)',
            border: '1px solid rgba(100,255,218,0.15)',
            '& .tech-icon': {
              transform: 'scale(1.1) rotate(5deg)',
              color: '#64ffda',
            },
          },
        }}
      >
        <Box
          sx={{
            mb: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <tech.icon
            className="tech-icon"
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
          {tech.title}
        </Typography>
        <Typography 
          variant="body1" 
          color="text.secondary"
          sx={{
            lineHeight: 1.7,
          }}
        >
          {tech.description}
        </Typography>
      </Paper>
    </motion.div>
  );

  return (
    <Box
      sx={{
        py: { xs: 6, md: 12 },
        bgcolor: 'background.default',
        position: 'relative',
      }}
    >
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
              CUTTING-EDGE TOOLS
            </Typography>
            <Typography
              component="h2"
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
              Technologies We Use
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
              We leverage the latest technologies to build fast, secure, and scalable websites for your business.
            </Typography>
          </Box>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {isMobile ? (
            <Box sx={{ px: 2 }}>
              <Carousel
                items={technologies.map((tech, index) => renderTechCard(tech, index))}
                interval={5000}
                showDots={true}
              />
            </Box>
          ) : (
            <Grid container spacing={3}>
              {technologies.map((tech, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                  {renderTechCard(tech, index)}
                </Grid>
              ))}
            </Grid>
          )}
        </motion.div>
      </Container>
    </Box>
  );
};

export default Technologies;