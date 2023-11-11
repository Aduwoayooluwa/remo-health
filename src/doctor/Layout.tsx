"use client"
import Image from "next/image";
import { Box, Flex, VStack, Link, useColorModeValue, Heading, Text, Stack, HStack, Divider } from '@chakra-ui/react';
import { SettingIcon, CalendarIcon, MeterIcon, PersonIcon, LogoutIcon } from '@/assets';
import Profile from "./Profile";

const doctorProfile = {
    name: 'Dr. Ayra Starr',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    rating: 4.5,
    patientCount: 120,
    newAppointments: 5,
};
  
const Layout = ({ children } : Readonly<{children: React.ReactNode}>) => {
  return (
    <Flex w="full" overflow="hidden">
      <VStack position="relative" w="200px" align="start" h="100vh" p={5} bg={useColorModeValue('gray.100', 'gray.700')}>
              <Stack  mb={10}>
                  <Heading as={"h4"} size="md">remo<span style={{ color: "blue" }}>Health</span></Heading>
                <Text textColor={"gray.500"} fontSize="xs">Remote Healthcare</Text>
              </Stack>
              
              <Divider w="150px" color={"gray.700"} orientation="horizontal"/>
              
              <Link textColor="gray.500" display={"flex"} my={5} href="/dashboard">
                <Image src={MeterIcon} width={25} height={20} alt="meter icon" />
                <Text ml={"3"}>Home</Text>
            </Link>
              <Link display={"flex"} textColor="gray.500" href="/settings">
                  <Image src={PersonIcon} width={25} height={20} alt="Person icon" />
                  <Text ml={"3"}>Patients</Text>
              </Link>
              <Link display={"flex"}textColor="gray.500" my={5} href="/dashboard">
                  <Image src={CalendarIcon} width={25} height={20} alt="appointment icon" />
                <Text ml={"3"}>Appointments</Text>
              </Link>
              
              <Link display={"flex"} textColor="gray.500" href="/settings">
                  <Image src={SettingIcon} width={25} height={20} alt="settings icon" />
                  <Text ml={"3"}>Settings</Text>
              </Link>

              <Link bottom={20} position="absolute" display={"flex"} textColor="gray.500" href="/settings">
                  <Image src={LogoutIcon} width={25} height={20} alt="logout icon" />
                  <Text ml={"3"}>Logout</Text>
              </Link>

      </VStack>

          <Box flex="1" p={5}>
              <HStack mb={6} as="nav" justify={"space-between"}>
                  <Text fontWeight="bold">Dashoard</Text>
                  
                  <Text fontWeight="bold" textColor={"gray.600"}>{new Date().toDateString()}</Text>
            </HStack>
            {children}
          </Box>
          <VStack w="300px" align="start" h="100vh" p={5} bg={useColorModeValue('gray.100', 'gray.700')}>
                <Text fontWeight="bold">Profile</Text>
              {/* You can add more content here for the right sidebar */}
              
              <Profile doctorProfile={doctorProfile}/>
            </VStack>
    </Flex>
  );
};

export default Layout;
