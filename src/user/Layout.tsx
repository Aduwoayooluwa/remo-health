import { Avatar, Box, HStack, Input, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { BellIcon } from "@chakra-ui/icons";
import { DoctorCategories } from './addons/Doctors';

type Props = {
    children: React.ReactNode
}

const Layout = ({children }: Readonly<Props>) => {
  return (
      <Stack bg="gray.50">
          <Box p={6} bg={"#5C7CFA"} w="full" textColor="white" h={"150px"}>
              <HStack justify={"space-between"} w="full"> 
                  <HStack>
                    <Avatar name={"Ayo Aduwo"} size={"sm"} />
                    
                    <Box>
                        <Text>Welcome back,</Text>
                        <Text fontWeight={"bold"} fontSize={"xl"}>Ayooluwa!</Text>
                    </Box>
                  
                  </HStack>


                  <BellIcon w={6} h={6} color="white.500"/>
              </HStack>
              

              <Input bg="white" textColor={"black"} my={5}  borderRadius={"50px"} placeholder='search for doctors'/>
          </Box>
          <Stack bg="#F5F7F8">
              <HStack pr={6}>
                  <DoctorCategories />
                </HStack>
                { children }   
          </Stack>
    </Stack>
  )
}

export default Layout