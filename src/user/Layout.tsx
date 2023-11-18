import { Avatar, Box, Center, HStack, Input, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BellIcon } from "@chakra-ui/icons";
import { DoctorCategories } from './addons/Doctors';
import HamburgerMenu from './layout/Sidebar';
import useUserStore from '@/lib/store';
import { getUsers } from '@/helper/users';
import Loader from '@/app/loader';

type Props = {
    children: React.ReactNode
    doctors?: any[]
}
const Layout = ({ children }: Readonly<Props>) => {
    const user = useUserStore((state) => state.user)
    
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  if (isLoading) return (<Loader />);
  


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
                        <Text fontWeight={"bold"} fontSize={"xl"}>{user?.first_name}!</Text>
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