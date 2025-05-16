import { Box, Container, Typography, Paper, Button, List, ListItem, ListItemIcon, ListItemText, Switch, FormControlLabel } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import { Link } from 'react-router-dom';
import { wingmanLogo } from '../assets';
import { motion } from 'framer-motion';
import React from 'react';

const plans = [
  {
    title: 'Individual Plan',
    monthlyPrice: '$4.95',
    annualPrice: '$53.46',
    icon: PersonIcon,
    description: 'Perfect for personal websites and portfolios',
    features: [
      'Custom Personal Website',
      'SSL Certificate',
      'Enterprise Security',
      'SEO Optimization',
      'Content Updates',
      'Professional Design',
      'Up to 10 Pages',
    ],
  },
  {
    title: 'Small Business Plan',
    monthlyPrice: '$19.95',
    annualPrice: '$215.46',
    icon: PersonIcon,
    description: 'Perfect for personal websites and portfolios',
    features: [
      'Custom Personal Website',
      'SSL Certificate',
      'Enterprise Security',
      'SEO Optimization',
      'Content Updates',
      'Professional Design',
      'Up to 15 Pages',
    ],
    highlight: true,
  },
  {
    title: 'Big Business Plan',
    monthlyPrice: '$34.95',
    annualPrice: '$377.46',
    icon: BusinessIcon,
    description: 'Comprehensive solution for businesses',
    features: [
      'Custom Business Website',
      'SSL Certificate',
      'Enterprise Security',
      'SEO Optimization',
      'Content Updates',
      'Professional Design',
      'Up to 20 Pages',
      'Third-Party API Integration',
    ],
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const priceAnimation = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.3 }
};

const strikethroughAnimation = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 0.7, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.2 }
};

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = React.useState(false);

  const handlePricingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsAnnual(event.target.checked);
  };

  return (
    <Box sx={{ pt: { xs: 4, md: 3 }, pb: { xs: 8, md: 12 } }}>
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
        <motion.div {...fadeInUp}>
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
              PRICING PLANS
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
              Choose Your Plan
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
              Affordable plans for individuals and businesses
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={isAnnual}
                    onChange={handlePricingChange}
                    color="secondary"
                  />
                }
                label={
                  <Typography
                    variant="body1"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    Bill Annually
                    {isAnnual && (
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{
                          color: 'secondary.main',
                          bgcolor: 'rgba(100,255,218,0.1)',
                          px: 1,
                          py: 0.5,
                          borderRadius: 1,
                          ml: 1,
                        }}
                      >
                        Save 10%
                      </Typography>
                    )}
                  </Typography>
                }
              />
            </Box>
          </Box>
        </motion.div>
        <motion.div {...fadeInUp} transition={{ duration: 0.5, delay: 0.2 }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
            {plans.map((plan) => (
              <Paper
                key={plan.title}
                elevation={4}
                sx={{
                  minWidth: 300,
                  maxWidth: 400,
                  flex: '1 1 320px',
                  p: 4,
                  borderRadius: 3,
                  background: 'linear-gradient(145deg, rgba(23,42,69,0.5) 0%, rgba(10,25,47,0.8) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(100,255,218,0.1)',
                  boxShadow: plan.highlight ? '0 8px 32px rgba(100,255,218,0.18)' : '0 8px 32px rgba(100,255,218,0.08)',
                  color: 'text.primary',
                  mb: { xs: 4, md: 0 },
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <plan.icon sx={{ fontSize: 40, color: 'secondary.main', mr: 2 }} />
                  <Typography variant="h5" fontWeight="bold">{plan.title}</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
                  {isAnnual && (
                    <motion.div
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      variants={strikethroughAnimation}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', mb: 1 }}>
                        <Typography
                          variant="h5"
                          color="text.secondary"
                          sx={{
                            textDecoration: 'line-through',
                          }}
                        >
                          ${(parseFloat(plan.monthlyPrice.replace('$', '')) * 12).toFixed(2)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                          / year
                        </Typography>
                      </Box>
                    </motion.div>
                  )}
                  <motion.div
                    key={isAnnual ? 'annual' : 'monthly'}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={priceAnimation}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center' }}>
                      <Typography variant="h3" color="secondary.main" fontWeight="bold">
                        {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ ml: 1, fontWeight: 500 }}>
                        / {isAnnual ? 'year' : 'month'}
                      </Typography>
                    </Box>
                  </motion.div>
                </Box>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                  {plan.description}
                </Typography>
                <List>
                  {plan.features.map((feature) => (
                    <ListItem key={feature} sx={{ py: 0, color: 'text.secondary' }}>
                      <ListItemIcon sx={{ minWidth: 32, color: 'secondary.main' }}>
                        <CheckCircleIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>
                <Box sx={{ flexGrow: 1 }} />
                <Button
                  variant={plan.highlight ? 'contained' : 'outlined'}
                  color="secondary"
                  size="large"
                  fullWidth
                  sx={{ mt: 2, fontWeight: 600, borderWidth: 2, letterSpacing: 1 }}
                  component={Link}
                  to={`/contact?plan=${encodeURIComponent(plan.title)}`}
                >
                  Get Started
                </Button>
              </Paper>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default PricingPage;