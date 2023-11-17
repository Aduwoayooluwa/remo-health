import React, { ElementType, useRef, useEffect } from 'react';
import { Box, Text, Icon } from '@chakra-ui/react';
import { gsap } from 'gsap';

interface AnimatedBtnProps {
  icon: ElementType;
  text: string;
}

const AnimatedBtn: React.FC<AnimatedBtnProps> = ({ icon: IconComponent, text }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.set(textRef.current, { x: -20, opacity: 0 });
  }, []);

  const handleMouseEnter = () => {
    gsap.to(textRef.current, { x: 0, opacity: 1, duration: 0.3 });
  };

  const handleMouseLeave = () => {
    gsap.to(textRef.current, { x: -20, opacity: 0, duration: 0.3 });
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
      position="relative"
      borderStyle="dashed"
      borderRadius="100%"
      p="2"
      borderColor="black"
    borderWidth="1px"
    w="full"
          
      _hover={{ borderColor: "blue" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Icon as={IconComponent} w={6} h={6} />
      <Box
        ref={textRef}
        position="absolute"
        left="100%"
              w="full"
              ml={5}
        my={{base: 3, md:0}}
      >
        <Text w="100px">{text}</Text>
      </Box>
    </Box>
  );
};

export default AnimatedBtn;
