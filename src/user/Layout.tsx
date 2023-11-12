import { Avatar, Box, Center, HStack, Input, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { BellIcon } from "@chakra-ui/icons";
import { DoctorCategories } from './addons/Doctors';
import HamburgerMenu from './layout/Sidebar';

type Props = {
    children: React.ReactNode
}

const Layout = ({children }: Readonly<Props>) => {
  return (
      <Stack className='user-app' bg="gray.50">
          <Box p={6} bg={"#5C7CFA"} w="full" textColor="white" h={"150px"}>
              <HStack justify={"space-between"} w="full"> 
                  <HStack>
                      <HStack>
                          <HamburgerMenu />
                          <Avatar ml={3} name={"Ayo Aduwo"} size={"sm"} />
                      </HStack> 
                    
                    
                    <Box>
                        <Text>Welcome back,</Text>
                        <Text fontWeight={"bold"} fontSize={"xl"}>Ayooluwa!</Text>
                    </Box>
                  
                  </HStack>


                  <BellIcon w={6} h={6} color="white.500"/>
              </HStack>
              

              <Input w={{base: "full", md: "full"}} bg="white" textColor={"black"} my={5}  borderRadius={{base:"50px", md:"none"}} placeholder='search for doctors'/>
          </Box>
          <Center>
              <Box w={{base:"full", md: "90%"}}  bg="#F5F7F8">
              <HStack pr={6}>
                  <DoctorCategories />
                </HStack>
                { children }   
          </Box>
          </Center>
    </Stack>
  )
}

export default Layout