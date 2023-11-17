import React from 'react';
import { Box, Text, VStack, Circle, SimpleGrid, Heading } from '@chakra-ui/react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import withScrollAnimation from '../components/ScrollAnimation';

const steps = [
  { title: "Choose Your Doctor", description: "Select from a range of qualified professionals." },
  { title: "Book an Appointment", description: "Pick a time and date that works for you." },
  { title: "Attend the Virtual Visit", description: "Use our platform to meet with your doctor online." },
  { title: "Follow Up", description: "Easily schedule follow-up appointments if needed." }
];


const MotionCircle = motion(Circle);
const AnimatedBox = withScrollAnimation(Box);
const StepsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, 
    triggerOnce: false 
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        scale: 1.2,
        transition: { duration: 0.5, staggerChildren: 0.2 }
      });
    }
  }, [controls, inView]);

  return (
      <AnimatePresence>
          <AnimatedBox py={20} px={{ base: "10", md: 0 }} ref={ref} position="relative">
      <Heading textAlign="center" fontWeight={400} fontSize={{ base: "28px", md: "40px", lg: "50px" }}>
        Book an Appointment with few steps
      </Heading>
      <SimpleGrid mt={{base:10, md:14}} columns={[1, 2]} spacing={8}>
        {steps.map((step, index) => (
            <AnimatedBox key={index}>
                <AnimatedBox  display="flex" alignItems="center">
            <MotionCircle 
              size="40px" 
              bg="#5C7CFA" 
              initial={{ scale: 0.8 }} 
              animate={controls}
              mr={4} 
            />
            <AnimatedBox>
              <Text fontSize="xl" fontWeight="bold">{step.title}</Text>
              <Text>{step.description}</Text>
              
            </AnimatedBox>    
            
            </AnimatedBox>
                <AnimatedBox mr={4}  display={{base:`${index=== 3 ? "none" : "block"}`, md:"none"}} h={"200px"} w="5px" bg="#5C7CFA"></AnimatedBox>
          </AnimatedBox>
        ))}
      </SimpleGrid>
    </AnimatedBox>
    </AnimatePresence>
  );
};

export default StepsSection;

