import { Box, Center, Heading, Image, VStack, Text, SimpleGrid, Flex, Button, HStack, Icon } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import AnimatedBtn from '../components/AnimatedBtn'
import { ArrowForwardIcon } from '@chakra-ui/icons'

type Props = {}

const Hero = (props: Props) => {
  return (
      <Box w="full"   minH="100vh" pt={{ base: 0, md: "20" }} zIndex={10}>
          <Flex w="full" align="center" justify={"space-between"} direction={{base:"column-reverse", md:"row"}}>
              <VStack w={{base:"100%", md:"40%"}} p={{base: 10, md:0}}>
                  <Box position="relative">
                      <Heading fontWeight={500} fontSize={{base:"40px", md:"48", lg:"60px"}}>
                      Bridging the <span style={{color:"#5C7CFA"}}>Health Horizons</span>
                    </Heading>
                    <Image position="absolute" bottom={0} right={0} src={"/rule_line.svg"} alt="Line" />
                  </Box>
                  
                  <Text mt={8} textAlign={{base:"center", md:"start"}}>
                      where cutting-edge technology meets personalized medical attention.
                       Our telemedicine platform is at the forefront of this transformation, offering a seamless blend of AI-driven insights and expert care from certified physicians.
                  </Text>

                  <Flex direction={{base: "column", md:"row"}} w="full" align="center" mt={{base:8, md:10}}>
                      <Button
                        bg="#5C7CFA" 
                        color="white" 
                        _hover={{ bg: "blue.600" }} 
                        _focus={{ boxShadow: "0 0 0 3px rgba(92, 124, 250, 0.6)" }} // Focus styles
                        w="200px" 
                        >
                        View
                      </Button>
                      
                      <Link  href={""}>
                          <HStack align="start"  my={{base:8, md:0}} ml={{base:0, md:10}}>
                              <AnimatedBtn icon={ArrowForwardIcon} text="Discover More"/> 
                          </HStack>
                      </Link>
                  </Flex>

              </VStack>

              {/*  */}
              <VStack align={{base:"center", md:"end"}}  w={{base:"100%", md:"60%"}}>
                  <SimpleGrid columns={2} gap={8}>
                      {
                          Array.from([1, 2, 4, 5]).map((item, index) => {
                              return (
                                  <Box zIndex={40}
                                      borderWidth="0.5px"
                                        borderColor="black"
                                        borderStyle="dashed"
                                        // borderRadius="100px"
                                        w={{ base: "150px", md: "200px" }}
                                        h={{ base: "150px", md: "200px" }}
                                      key={index}
                                      p={6}
                                    className="hero-clip"
                                  >
                                    <Image alt="the bg hero" src="https://plus.unsplash.com/premium_photo-1681966970815-10026413b0e3?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                                </Box>
                              )
                          })
                      }
                  </SimpleGrid>
              </VStack>     
          </Flex>
        </Box>
  )
}

export default Hero