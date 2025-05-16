import { useState, useRef, useEffect } from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Paper, Snackbar, Alert, MenuItem, FormControlLabel, Switch } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import { wingmanLogo } from '../assets';


const planOptions = ['Individual Plan', 'Small Business Plan', 'Big Business Plan'];

const ContactPage = () => {
  const location = useLocation();
  // Get plan from query string if present
  const params = new URLSearchParams(location.search);
  const planFromQuery = params.get('plan');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    plan: planFromQuery && planOptions.includes(planFromQuery) ? planFromQuery : '',
    hasWebsite: false,
    websiteUrl: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });
  
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });

  const formRef = useRef<HTMLFormElement>(null);

  // Autofill plan if coming from pricing page
  useEffect(() => {
    if (planFromQuery && planOptions.includes(planFromQuery)) {
      setFormData((prev) => ({ ...prev, plan: planFromQuery }));
    }
  }, [planFromQuery]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown }>) => {
    const { name, value } = e.target as HTMLInputElement;
    if (name === 'hasWebsite') {
      setFormData({
        ...formData,
        hasWebsite: (e.target as HTMLInputElement).checked,
        // Clear website URL if they switch to no website
        websiteUrl: (e.target as HTMLInputElement).checked ? formData.websiteUrl : ''
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
    
    // Clear error when user types
    if (name in errors) {
      setErrors({
        ...errors,
        [name]: false
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    // Validate required fields
    const newErrors = {
      name: formData.name.trim() === '',
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      message: formData.message.trim() === '',
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) {
      setSnackbar({
        open: true,
        message: 'Please fill in all required fields correctly.',
        severity: 'error'
      });
      return;
    }

    // Prepare the data for the email service
    const emailData = {
      source: 'webwingman.dev',
      name: formData.name,
      email: formData.email,
      phone: formData.phone || 'Not provided',
      company: formData.company || 'Not provided',
      plan: formData.plan || 'Not specified',
      website: formData.hasWebsite ? formData.websiteUrl : 'No existing website',
      message: formData.message
    };

    // Send to the email service
    fetch('https://emailbackend-6l9u.onrender.com/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        setSnackbar({
          open: true,
          message: "Thank you for your message! We'll get back to you soon.",
          severity: 'success'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          plan: '',
          hasWebsite: false,
          websiteUrl: '',
          message: ''
        });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    })
    .catch(error => {
      console.error('Submission error:', error);
      setSnackbar({
        open: true,
        message: error.message || 'There was an error sending your message. Please try again later.',
        severity: 'error'
      });
    });
  };
  

  const handleCloseSnackbar = () => {
    setSnackbar({
      ...snackbar,
      open: false
    });
  };

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: { xs: 4, md: 4 } }}>
      <Container maxWidth="md">
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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Paper elevation={4} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', boxShadow: '0 8px 32px rgba(100,255,218,0.08)', background: 'linear-gradient(145deg, rgba(23,42,69,0.5) 0%, rgba(10,25,47,0.8) 100%)', backdropFilter: 'blur(10px)', border: '1px solid rgba(100,255,218,0.1)' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, justifyContent: 'center' }}>
              <EmailIcon sx={{ fontSize: 32, color: 'secondary.main', mr: 2 }} />
              <Typography variant="h6" color="text.primary">contact@webwingman.dev</Typography>
            </Box>
            <Typography variant="h4" component="h2" gutterBottom align="center" color="text.primary" fontWeight="bold">
              Send Us a Message
            </Typography>
            <Typography variant="body1" paragraph align="center" color="text.secondary" sx={{ mb: 4 }}>
              Fill out the form below and we'll get back to you as soon as possible.
            </Typography>
            <Box component="form" ref={formRef} onSubmit={handleSubmit} noValidate>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    name="name"
                    label="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    helperText={errors.name ? 'Name is required' : ''}
                    sx={{
                      '& .MuiInputBase-root.Mui-focused': {
                        backgroundColor: 'rgba(100,255,218,0.08)',
                        color: 'text.primary',
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: 'secondary.main',
                      },
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    name="email"
                    label="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    helperText={errors.email ? 'Please enter a valid email address' : ''}
                    sx={{
                      '& .MuiInputBase-root.Mui-focused': {
                        backgroundColor: 'rgba(100,255,218,0.08)',
                        color: 'text.primary',
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: 'secondary.main',
                      },
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    id="phone"
                    name="phone"
                    label="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    sx={{
                      '& .MuiInputBase-root.Mui-focused': {
                        backgroundColor: 'rgba(100,255,218,0.08)',
                        color: 'text.primary',
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: 'secondary.main',
                      },
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    id="company"
                    name="company"
                    label="Company Name (optional)"
                    placeholder="Leave blank if not applicable"
                    value={formData.company}
                    onChange={handleChange}
                    sx={{
                      '& .MuiInputBase-root.Mui-focused': {
                        backgroundColor: 'rgba(100,255,218,0.08)',
                        color: 'text.primary',
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: 'secondary.main',
                      },
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    select
                    fullWidth
                    id="plan"
                    name="plan"
                    label="Plan Interested In (optional)"
                    value={formData.plan}
                    onChange={handleChange}
                    sx={{
                      '& .MuiInputBase-root.Mui-focused': {
                        backgroundColor: 'rgba(100,255,218,0.08)',
                        color: 'text.primary',
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: 'secondary.main',
                      },
                    }}
                  >
                    <MenuItem value="">None</MenuItem>
                    {planOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={formData.hasWebsite}
                        onChange={handleChange}
                        name="hasWebsite"
                        color="secondary"
                      />
                    }
                    label="I have an existing website"
                  />
                </Grid>
                {formData.hasWebsite && (
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      id="websiteUrl"
                      name="websiteUrl"
                      label="Current Website URL"
                      placeholder="https://example.com"
                      value={formData.websiteUrl}
                      onChange={handleChange}
                      sx={{
                        '& .MuiInputBase-root.Mui-focused': {
                          backgroundColor: 'rgba(100,255,218,0.08)',
                          color: 'text.primary',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: 'secondary.main',
                        },
                      }}
                    />
                  </Grid>
                )}
                <Grid size={{ xs: 12 }}>
                  <TextField
                    required
                    fullWidth
                    id="message"
                    name="message"
                    label="Your Message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message}
                    helperText={errors.message ? 'Please enter your message' : ''}
                    sx={{
                      '& .MuiInputBase-root.Mui-focused': {
                        backgroundColor: 'rgba(100,255,218,0.08)',
                        color: 'text.primary',
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: 'secondary.main',
                      },
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    size="large"
                    fullWidth
                    endIcon={<SendIcon />}
                    sx={{ py: 1.5, fontWeight: 600, fontSize: '1.1rem', letterSpacing: 1 }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </motion.div>
      </Container>
      {/* Snackbar for form submission feedback */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactPage;