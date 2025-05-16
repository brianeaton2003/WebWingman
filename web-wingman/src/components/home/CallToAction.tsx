import { Box, Button, Container, Typography, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CallToAction = () => {
  
  return (
    <Box
      sx={{
        py: { xs: 6, md: 12 },
        bgcolor: 'primary.main',
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            textAlign: 'center',
            borderRadius: 4,
            background: 'primary.main',
            border: '1px solid',
            borderColor: 'primary.light',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative elements */}
          <Box
            sx={{
              position: 'absolute',
              top: -30,
              right: -30,
              width: 150,
              height: 150,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(100,255,218,0.1) 0%, rgba(10,25,47,0) 70%)',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: -40,
              left: -40,
              width: 200,
              height: 200,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(100,255,218,0.08) 0%, rgba(10,25,47,0) 70%)',
            }}
          />
          
          <Typography
            variant="h3"
            component="h2"
            color="text.primary"
            gutterBottom
            sx={{ position: 'relative', zIndex: 1 }}
          >
            Ready to Get Started?
          </Typography>
          
          <Typography
            variant="h6"
            color="text.secondary"
            paragraph
            sx={{ 
              mb: 4, 
              maxWidth: 700, 
              mx: 'auto',
              position: 'relative',
              zIndex: 1
            }}
          >
            Join our growing list of satisfied clients and let us build a website that helps your business thrive. Our subscription model makes it easy to get started without breaking the bank.
          </Typography>
          
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              justifyContent: 'center',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              size="large"
              component={Link}
              to="/pricing"
              endIcon={<ArrowForwardIcon />}
              sx={{ px: 4 }}
            >
              View Pricing Plans
            </Button>
            
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              component={Link}
              to="/contact"
              sx={{ px: 4 }}
            >
              Contact Us
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default CallToAction;