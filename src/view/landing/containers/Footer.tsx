// components/Footer.tsx
import React from 'react';
import { 
  Box, Container, Stack, Text, Link, IconButton, Input, Button, 
  Heading, useMediaQuery, VStack, HStack, SimpleGrid 
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const MotionLink = motion(Link);
const MotionIconButton = motion(IconButton);

const Footer = () => {
  const hoverAnimation = { scale: 1.1 };

  return (
    <Box as="footer" px={{ base: 6, md: 0 }} h={"auto"} py={10} w="full" bg={"#9AC5F4"}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          <Stack display={{base: "inherit", md:"none"}} spacing={3}>
              <Heading size="md">Newsletter</Heading>
              <Text>Stay updated with our latest news</Text>
              <Input placeholder="Enter your email" />
              
            </Stack>
          <SimpleGrid columns={[2, 3, 4]} spacing={5}>
            <Stack spacing={3}>
              <Heading size="md">Quick Links</Heading>
              <MotionLink whileHover={hoverAnimation} href="/about">About Us</MotionLink>
              <MotionLink whileHover={hoverAnimation} href="/services">Services</MotionLink>
              <MotionLink whileHover={hoverAnimation} href="/support">Support</MotionLink>
              <MotionLink whileHover={hoverAnimation} href="/contact">Contact</MotionLink>
            </Stack>
            
            <Stack spacing={3}>
              <Heading size="md">Legal</Heading>
              <MotionLink whileHover={hoverAnimation} href="/privacy-policy">Privacy Policy</MotionLink>
              <MotionLink whileHover={hoverAnimation} href="/terms">Terms of Use</MotionLink>
            </Stack>
            <Stack h={"100px"} display={{base: "none", md:"inherit"}} spacing={3}>
              <Heading size="md">Follow Us</Heading>
              <HStack spacing={2}>
                <MotionIconButton whileHover={hoverAnimation} aria-label="Facebook" icon={<FiFacebook />} />
                <MotionIconButton whileHover={hoverAnimation} aria-label="Twitter" icon={<FiTwitter />} />
                <MotionIconButton whileHover={hoverAnimation} aria-label="Instagram" icon={<FiInstagram />} />
              </HStack>
            </Stack>
            <Stack display={{base: "none", md:"inherit"}} spacing={3}>
              <Heading size="md">Newsletter</Heading>
              <Text>Stay updated with our latest news</Text>
              <Input placeholder="Enter your email" />
              <Button
                  bg="#5C7CFA" 
                  color="white" 
                  _hover={{ bg: "blue.600" }} 
                  _focus={{ boxShadow: "0 0 0 3px rgba(92, 124, 250, 0.6)" }} // Focus styles
                  w="full" 
                  >
                  Subscribe
                </Button>
            </Stack>
          </SimpleGrid>
          <Stack align="center">
            <Button
                bg="#5C7CFA" 
                color="white" 
                _hover={{ bg: "blue.600" }} 
                _focus={{ boxShadow: "0 0 0 3px rgba(92, 124, 250, 0.6)" }} // Focus styles
                w="200px" 
                >
                <Link href="/login">Book Appointment</Link>
              </Button>
            <Stack mt={5} display={{base: "inherit", md:"none"}} spacing={3}>
              <Heading textAlign={"center"} size="md">Follow Us</Heading>
              <HStack spacing={2}>
                <MotionIconButton whileHover={hoverAnimation} aria-label="Facebook" icon={<FiFacebook />} />
                <MotionIconButton whileHover={hoverAnimation} aria-label="Twitter" icon={<FiTwitter />} />
                <MotionIconButton whileHover={hoverAnimation} aria-label="Instagram" icon={<FiInstagram />} />
              </HStack>
            </Stack>
            <HStack mt={5} fontSize="sm"> <span> </span> <Text size="md">&copy; {new Date().getFullYear()} remo<span style={{ color: "#5C7CFA" }}>Health.</span>  All Rights Reserved.</Text></HStack>
          </Stack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;
