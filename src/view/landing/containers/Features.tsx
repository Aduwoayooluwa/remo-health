import { Box, Center, Heading, SimpleGrid, Text, Image, Button } from '@chakra-ui/react'
import React from 'react'
import { features } from '../pages/utils,'

type Props = {}

const Features = (props: Props) => {
  return (
      <Box minH="100vh" position={"relative"} py={"10"} px={{base: 10, md:0}}>
          <Heading textAlign={"center"} fontWeight={400} fontSize={{ base: "28px", md: "40px", lg: "50px" }}>
             Healthcare, Reimagined 
          </Heading>
          
          <Center>
              <Text mt={8} w={{base:"full", md:"60%"}} textAlign={"center"}>
                Welcome to a new era of healthcare where convenience, efficiency, and personalized care converge. Our telemedicine platform brings a transformative approach to your health and wellness. 
            </Text>
          </Center>
          
          <Center>
              <Box position={{ base: "initial", md: "absolute" }} ml={{base: 0, md:-28}} top={"30%"} mt={{base:8, md:0}}>
              <Image w="48" h="48" alt="remohealth heart" src={"/lp_heart.gif"} />
            </Box>    
         </Center>

          <SimpleGrid gap={{base:6, md:12}} mt={{base:8, md:20}} columns={[1, 2]}>
              {
                  features.map((ft) => (
                      <Box w={{base:"full", md:"500px"}} key={ft.title}>
                          <Heading textAlign={"start"} fontWeight={400} fontSize={{ base: "24px", md: "30px", lg: "36px" }}>
                            {ft.title}
                          </Heading>
                          
                          <Text mt={4}>
                              {ft.description}
                          </Text>
                      </Box>
                  ))
              }
          </SimpleGrid>
          
          <Center mt={{base:"10", md:14}}>
              <Button
                        bg="#5C7CFA" 
                        color="white" 
                        _hover={{ bg: "blue.600" }} 
                        _focus={{ boxShadow: "0 0 0 3px rgba(92, 124, 250, 0.6)" }} // Focus styles
                        w="200px" 
                        >
                        Learn More
                      </Button>
          </Center>
    </Box>
  )
}

export default Features