import { Box, IconButton, useDisclosure, VStack, CloseButton, Text, Stack, Heading, Button } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationLinks } from '@/utils/nav';
import { Link } from '@chakra-ui/next-js';

const MotionBox = motion(Box);

const HamburgerMenu = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: '-100%' },
  };

  return (
    <>
      <IconButton
        aria-label="Open Menu"
        icon={<HamburgerIcon />}
        onClick={onToggle}
      />
      <AnimatePresence>
        {isOpen && (
          <MotionBox
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            position="fixed"
            left="0"
            top="0"
            w="250px"
            h="100vh"
            bg="gray.100"
            zIndex="overlay"
          >
            <VStack p="5">
              <CloseButton w={6} h={6} color={"black"} onClick={onClose} />
                      
                <Stack  mb={10}>
                  <Heading textColor="black" as={"h4"} size="md">remo<span style={{ color: "#5C7CFA" }}>Health</span></Heading>
                <Text textColor={"gray.500"} fontSize="xs">Remote Healthcare</Text>
              </Stack>
                {  
                     navigationLinks.map((nav) => {
                            return (
                            <Link href={`${nav.link}`} p={4} my={3} key={nav.id}>
                                    <Text textColor={"black"}>{nav.title}</Text>          
                            </Link>
                        )
                    })
                          }
                <Button my={3} colorScheme='blue'>Logout</Button>
            </VStack>
          </MotionBox>
        )}
      </AnimatePresence>
    </>
  );
};

export default HamburgerMenu;
