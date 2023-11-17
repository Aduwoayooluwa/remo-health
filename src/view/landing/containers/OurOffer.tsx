import { Box, Heading, Text, SimpleGrid, Stack, Image } from '@chakra-ui/react'
import React from 'react'
import AnimatedBtn from '../components/AnimatedBtn'
import { FiArrowRight } from 'react-icons/fi'

type Props = {}

const OurOffer = (props: Props) => {
  return (
      <Box py={"10"} px={{base: 10, md:0}}>
          <Heading textAlign={"start"} fontWeight={400} mb={{base:5, md:8}} fontSize={{ base: "28px", md: "40px", lg: "50px" }}>
             Our Benefits
          </Heading>

          <Text>Discover the benefits of using a remote platform to manage your Health</Text>

          <SimpleGrid mt={10} columns={[1, 2, 3]} gap={6}>
              {
                  Array.from([1, 2, 4].map((item, index) => (
                      <Stack  position="relative" p={6} borderRadius={{ base: 5, md: 10 }} bg="#9AC5F4" w={{ base: "full", md: "300px", lg: "350px" }} h={{ base: "full", md: "300px", lg: "320px" }} key={index}>
                          <Box border={"dashed"} className='rhm-clip' w={{ base: "70px", md: "100px" }} h={{ base: "70px", md: "100px" }}>
                              <Image src={"/focus.png"} alt="remoHealth focus" />
                          </Box>
                          <Heading textAlign={"start"} fontWeight={400} fontSize={{ base: "24px", md: "28px", lg: "32px" }}>
                            Our Benefits
                          </Heading>
                          
                          <Text my={{base:5, md:8}} mb={{base:10, md:8}}>Focusing on Making Healthcare accessible to everyone at anytime.</Text>
                          <Box position={"absolute"} bottom={2} w="40px">
                              <AnimatedBtn icon={FiArrowRight} text='View More' />
                          </Box>
                      </Stack>
                  )))
              }
          </SimpleGrid>
    </Box>
  )
}

export default OurOffer