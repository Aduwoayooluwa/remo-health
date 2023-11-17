import React, { useRef, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { gsap } from 'gsap';

const items = [
  'Choose Your Doctor',
  'Book Your Appointment',
  'Virtual Waiting Room',
  'Consult Online',
  'Get Prescriptions',
  'Follow-up Care'
];

const BannerScroll = () => {
  const containerRef = useRef<any>(null);

  useEffect(() => {
    const elements = containerRef.current.children;
    const tl = gsap.timeline({
      repeat: -1, // Infinite loop
      defaults: { ease: "linear" }
    });

    tl.to(elements, {
      xPercent: -100 * (elements.length / 2),
      duration: 10, 
      stagger: {
        each: 1,
        repeat: -1
      }
    });

  }, []);

  return (
    <Box display={{base:"inherit", md:"none"}} bg="#5C7CFA" textColor="white" ref={containerRef}  overflow="hidden">
      {items.map((item, index) => (
        <Box key={index} p={5} minWidth="full">
          {item}
        </Box>
      ))}
      {/* Duplicate items for a seamless loop */}
      {/* {items.map((item, index) => (
        <Box key={'duplicate-' + index} p={5} minWidth="full">
          {item}
        </Box>
      ))} */}
    </Box>
  );
};

export default BannerScroll;
