// CustomCursor.tsx
import React, { useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power1.out"
      });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <Box ref={cursorRef} pos="fixed" top="0" left="0" w="20px" h="20px"
         bgColor="black" borderRadius="50%" zIndex="9999"
         transform="translate(-50%, -50%)" pointerEvents="none" />
  );
};

export default CustomCursor;
