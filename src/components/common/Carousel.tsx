import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';

interface CarouselProps {
  items: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
}

const Carousel = ({ 
  items, 
  autoPlay = true, 
  interval = 5000,
  showDots = true,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const getItemWidth = () => {
    if (!sliderRef.current) return 0;
    const containerWidth = sliderRef.current.clientWidth;
    if (isMobile) return containerWidth;
    if (window.innerWidth >= theme.breakpoints.values.md) {
      return containerWidth / 3;
    }
    return containerWidth / 2;
  };

  const scrollToIndex = useCallback((index: number) => {
    if (!sliderRef.current) return;
    const itemWidth = getItemWidth();
    const containerWidth = sliderRef.current.clientWidth;
    let scrollPosition;
    if (index === 0) {
      scrollPosition = 0;
    } else if (index === items.length - 1) {
      scrollPosition = sliderRef.current.scrollWidth - containerWidth;
    } else {
      scrollPosition = (index * itemWidth) - (containerWidth / 2) + (itemWidth / 2);
    }
    sliderRef.current.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
    setCurrentIndex(index);
  }, [isMobile, theme.breakpoints.values.md, items.length]);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items]);

  const goToSlide = useCallback((index: number) => {
    scrollToIndex(index);
  }, [scrollToIndex]);

  // Handle scroll events to update current index
  useEffect(() => {
    const handleScroll = () => {
      if (!sliderRef.current) return;
      const itemWidth = getItemWidth();
      const containerWidth = sliderRef.current.clientWidth;
      const scrollPosition = sliderRef.current.scrollLeft;
      
      if (scrollPosition <= 0) {
        setCurrentIndex(0);
        return;
      }
      if (scrollPosition >= sliderRef.current.scrollWidth - containerWidth) {
        setCurrentIndex(items.length - 1);
        return;
      }

      const centerPosition = scrollPosition + (containerWidth / 2);
      const newIndex = Math.round(centerPosition / itemWidth);
      if (newIndex !== currentIndex && newIndex >= 0 && newIndex < items.length) {
        setCurrentIndex(newIndex);
      }
    };

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
      return () => slider.removeEventListener('scroll', handleScroll);
    }
  }, [currentIndex, items.length]);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isDragging) return;
    
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, next, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (sliderRef.current) {
      const itemWidth = getItemWidth();
      const containerWidth = sliderRef.current.clientWidth;
      const scrollPosition = sliderRef.current.scrollLeft;
      
      if (scrollPosition <= 0) {
        scrollToIndex(0);
        return;
      }
      if (scrollPosition >= sliderRef.current.scrollWidth - containerWidth) {
        scrollToIndex(items.length - 1);
        return;
      }

      const centerPosition = scrollPosition + (containerWidth / 2);
      const newIndex = Math.round(centerPosition / itemWidth);
      if (newIndex >= 0 && newIndex < items.length) {
        scrollToIndex(newIndex);
      }
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      {/* Slides */}
      <Box
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          gap: 2,
          px: { xs: 0, sm: 2 },
          py: 1,
        }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              flex: '0 0 auto',
              width: { xs: '100%', sm: 'calc(50% - 8px)', md: 'calc(33.333% - 16px)' },
              scrollSnapAlign: 'center',
              opacity: currentIndex === index ? 1 : 0.5,
              transition: 'opacity 0.3s ease',
            }}
          >
            {item}
          </Box>
        ))}
      </Box>

      {/* Dots */}
      {showDots && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 1,
            mt: 2,
          }}
        >
          {items.map((_, index) => (
            <Box
              key={index}
              onClick={() => goToSlide(index)}
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: index === currentIndex ? 'secondary.main' : 'rgba(100,255,218,0.2)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: index === currentIndex ? 'secondary.main' : 'rgba(100,255,218,0.4)',
                },
              }}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Carousel; 