import { Box, Flex, IconButton, Link, Button, useBreakpointValue, useDisclosure, Heading, Stack, Center, MenuButton, MenuList, MenuItem, Menu } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { ChevronDownIcon } from "@chakra-ui/icons"
import { useViewportScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { linkAnimationVariants, menuVariants, sideBarVariants } from './utils,';

const MotionFlex = motion(Flex);

const Navbar = ({title} : {title?: string}) => {
    const { scrollY } = useViewportScroll();
    const navbarAnim = useAnimation();
    const { isOpen, onToggle } = useDisclosure();

    const isMobile = useBreakpointValue({ base: true, md: false });

    useEffect(() => {
        // Framer Motion and GSAP animations for navbar
        scrollY.onChange(y => {
            if (y > 20) {
                navbarAnim.start({
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)'
                });
            } else {
                navbarAnim.start({
                    boxShadow: 'none',
                    backgroundColor: 'transparent'
                });
            }
        });

        gsap.to('.link', { opacity: 1, stagger: 0.2 });
    }, [navbarAnim, scrollY]);

    return (
        <Stack w="100%">
            <MotionFlex
            as="nav"
            w="full"
            px={4}
            py={3}
            position="fixed"
            top={0}
            left={0}
            right={0}
            zIndex={28}
            initial={{ boxShadow: 'none', backgroundColor: '#fdf7ef' }}
            animate={navbarAnim}
            transition={{ duration: 0.3 }}
        
        >
                <Center w="full">
                    <Flex w={{base:"100%", md:"80%"}} align="center" justify="space-between">
                    <Stack>
                        <Heading as={"h4"} size="md">remo<span style={{ color: "#5C7CFA" }}>Health</span> {title}</Heading>
                    </Stack>
                {!isMobile ? (
                    <Flex align="center" textColor="black">
                        <Link  className="link" mr={6} opacity={1}>Services</Link>
                                {/* <Link className="link" >Resources</Link> */}
                        <Box mr={6}  className="link" opacity={1}>
                            <Menu >
                                <MenuButton as={Button} bgColor={"transparent"} cursor="pointer" rightIcon={<ChevronDownIcon />}>
                                    Resources
                                </MenuButton>
                                <MenuList>
                                    <MenuItem><Link href="/ai/assistant">AI Doctor</Link></MenuItem>
                                    <MenuItem><Link href="/ai/diagnose">AI Diagnostic Tool</Link></MenuItem>
                                </MenuList>
                            </Menu>  
                        </Box>
                        
                        <Link className="link" mr={6} opacity={1}>Get Doctors</Link>
                        <Link className="link" mr={6} opacity={1}>Contact</Link>
                        <Button
                        bg="#5C7CFA" 
                        color="white" 
                        _hover={{ bg: "blue.600" }} 
                        _focus={{ boxShadow: "0 0 0 3px rgba(92, 124, 250, 0.6)" }} // Focus styles
                        w="200px" 
                        >
                        <Link href="/login">Book Appointment</Link>
                      </Button>
                        
                    </Flex>
                ) : (
                    <IconButton
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        onClick={onToggle}
                            variant="ghost" aria-label={''}
                        />
                )}
            </Flex>
            </Center>
             
            </MotionFlex>
            
            <AnimatePresence>
                {isMobile && isOpen && (
                <motion.aside style={{zIndex: 20, overflow:"hidden", background:"#fdf7ef", width:"100%", height:"60vh", padding:"20px"}} 
                    initial={{ width: 0 }}
                    animate={{ width:"100%" }}
                    exit={{
                            width: 0,
                            transition: { delay: 0.2, duration: 0.2 }
                        }}
                    >
                    <motion.div
                    initial="closed"
                    animate={isOpen ? "open" : "closed"}
                    variants={sideBarVariants}
                    >
                        <IconButton
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        onClick={onToggle}
                            variant="ghost" aria-label={''}
                        />
                            <Flex direction="column" mt={4}>
                            <Link my={5} className="link" mb={2}>
                                <motion.p
                                    whileHover={{ scale: 1.1 }}
                                    variants={linkAnimationVariants}
                                    className="text-center hover:underline text-sm">
                                    {"Services"}
                                </motion.p>
                                </Link>
                            
                            <Link my={5} className="link" mb={2}>
                                 <motion.p
                                    whileHover={{ scale: 1.1 }}
                                    variants={linkAnimationVariants}
                                    className="text-center hover:underline text-sm">
                                    {"Get Doctors"}
                                </motion.p>
                                </Link>
                            <Link my={5} className="link" mb={2}>
                                 <motion.p
                                    whileHover={{ scale: 1.1 }}
                                    variants={linkAnimationVariants}
                                    className="text-center hover:underline text-sm">
                                    {"Contact"}
                                </motion.p>
                                </Link>

                                <Box my={3}  opacity={1}>
                                <Menu >
                                    <MenuButton bg="white"  className="link" textAlign="start" as={Button} rightIcon={<ChevronDownIcon />}>
                                       <motion.p
                                        whileHover={{ scale: 1.1 }}
                                        variants={linkAnimationVariants}
                                        className="text-center hover:underline text-sm">
                                        {"Resources"}
                                    </motion.p>
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem><Link href="/ai/assistant">AI Doctor</Link></MenuItem>
                                        <MenuItem><Link href="/ai/diagnose">AI Diagnostic Tool</Link></MenuItem>
                                    </MenuList>
                                </Menu>  
                            </Box>
                        
                                
                                <Button
                                bg="#5C7CFA" 
                                color="white" 
                                _hover={{ bg: "blue.600" }} 
                                _focus={{ boxShadow: "0 0 0 3px rgba(92, 124, 250, 0.6)" }} // Focus styles
                                    w="200px" 
                                    my={5}
                                >
                                <Link href="/login">Book Appointment</Link>
                            </Button>
                                
                    </Flex>
                </motion.div>
            </motion.aside>
                
            )}
            </AnimatePresence>
        </Stack>
        
    );
};

export default Navbar;
