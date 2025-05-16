import { Box, Container, Grid, Typography, Card, CardContent, useTheme, useMediaQuery } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
import DevicesIcon from '@mui/icons-material/Devices';
import SecurityIcon from '@mui/icons-material/Security';
import UpdateIcon from '@mui/icons-material/Update';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { motion } from 'framer-motion';
import Carousel from '../common/Carousel';

const features = [
  {
    title: 'Lightning Fast Performance',
    description: 'Our websites are optimized for speed, ensuring your visitors have a seamless experience.',
    icon: SpeedIcon,
  },
  {
    title: 'Responsive Design',
    description: 'Every website we build looks great on all devices, from desktops to smartphones.',
    icon: DevicesIcon,
  },
  {
    title: 'Enterprise-Grade Security',
    description: 'Your website is protected by industry-leading security measures.',
    icon: SecurityIcon,
    features: [
      'SSL Certificate Included',
      'DNS Security Protection',
      'DDoS Attack Prevention',
      'Regular Security Updates'
    ]
  },
  {
    title: 'Regular Updates',
    description: 'Our service includes complimentary small updates and revisions to keep your site current.',
    icon: UpdateIcon,
  },
  {
    title: 'Cost-Effective',
    description: 'Professional web presence without the hefty price tag of traditional agencies.',
    icon: MonetizationOnIcon,
  },
  {
    title: 'Ongoing Support',
    description: 'Quick response times for your content updates and technical questions.',
    icon: SupportAgentIcon,
  },
];

const Features = () => {
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

  const renderFeatureCard = (feature: typeof features[0], index: number) => (
    <motion.div variants={itemVariants} key={index}>
      <Card
        sx={{
          height: '100%',
          minHeight: { xs: 320, md: 380 },
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 0.3s ease-in-out',
          background: 'linear-gradient(145deg, rgba(23,42,69,0.3) 0%, rgba(10,25,47,0.5) 100%)',
          backdropFilter: 'blur(5px)',
          border: '1px solid rgba(100,255,218,0.05)',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 20px rgba(0,0,0,0.1)',
            border: '1px solid rgba(100,255,218,0.15)',
            '& .feature-icon': {
              transform: 'scale(1.1) rotate(5deg)',
              color: '#64ffda',
            },
          },
        }}
        elevation={0}
      >
        <Box
          sx={{
            p: 3,
            display: 'flex',
            justifyContent: 'center',
            color: 'primary.light',
          }}
        >
          <feature.icon 
            className="feature-icon"
            sx={{ 
              fontSize: 50,
              transition: 'all 0.3s ease-in-out',
            }} 
          />
        </Box>
        <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
          <Typography 
            gutterBottom 
            variant="h5" 
            component="h3"
            sx={{
              fontWeight: 600,
              mb: 2,
            }}
          >
            {feature.title}
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary"
            sx={{
              lineHeight: 1.7,
            }}
          >
            {feature.description}
          </Typography>
        </CardContent>
      </Card>
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
              Why Choose <Box component="span" sx={{ color: 'secondary.main' }}>Web Wingman</Box>
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
              We combine cutting-edge technology with professional design to deliver websites that help your business succeed.
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
                items={features.map((feature, index) => renderFeatureCard(feature, index))}
                interval={5000}
                showDots={true}
              />
            </Box>
          ) : (
            <Grid container spacing={3}>
              {features.map((feature, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                  {renderFeatureCard(feature, index)}
                </Grid>
              ))}
            </Grid>
          )}
        </motion.div>
      </Container>
    </Box>
  );
};

export default Features;