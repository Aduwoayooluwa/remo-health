"use client"
import React from 'react';
import { Box, VStack, HStack, Button, Switch, Input, Text, useBreakpointValue, SimpleGrid, Center, Stack } from '@chakra-ui/react';
import HamburgerMenu from './layout/Sidebar';

const UserSettingsPage = () => {

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Stack bg="#F5F7F8">
      <Box display={{base: "none", md: "block"}} p={6} bg={"#5C7CFA"} w="full" textColor="white" h={"100px"}>
          <HStack>
                  <HamburgerMenu />
                  <Text fontWeight={"bold"} fontSize={"xl"}>Settings</Text>       
            </HStack> 
      </Box>

      <Center>
        <Box w={{base:"full", md: "90%"}}  bg="white">
        {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
        <VStack spacing={4} align="stretch">
          {/* Personal Information Section */}
          <SettingsSection title="Personal Information">
            <SimpleGrid gap={6} columns={{base: 1, md: 2}}>
              <Input placeholder="Name" />
              <Input  my={{base: 3, md: 0}}  placeholder="Email" type="email" />
            </SimpleGrid>
            
              {/* More fields as needed */}
              <Button mt={4}  colorScheme='blue'>Edit</Button>
          </SettingsSection>

          {/* Security Settings */}
          <SettingsSection title="Security">
            <Input w={{base:"full", md:"300px"}} placeholder="Change Password" type="password" />
            <Button ml={{base: 0, md: 4}} mt={{base: 3, md: 0}} colorScheme='blue'>Change Password</Button>
          </SettingsSection>

          {/* Notification Settings */}
          <SettingsSection title="Notifications">
            <HStack justify="space-between">
              <Text>Email Notifications</Text>
              <Switch />
            </HStack>
            
          </SettingsSection>

          {/* Account Management */}
          <SettingsSection title="Account Management">
            {/* Account management options */}
          </SettingsSection>

          {/* Wallet Check Button */}
          <SettingsSection title={"Your Wallet"}>
                    <Button colorScheme="blue">Check Wallet</Button>
          </SettingsSection>
          
                
        </VStack>
        </Box>
    </Center>
    </Stack>
  );
};

const SettingsSection = ({ title, children }: any) => (
  <Box p={6} border="1px" borderColor="gray.200">
    <Text fontSize="lg" fontWeight="bold" mb={3}>{title}</Text>
    {children}
  </Box>
);

const MobileNavigation = () => {
    // Mobile navigation component
    return (<Box>
        <Box w="full" p="3" bg="#5C7CFA">
            <HStack>
                <HamburgerMenu />
                <Text textColor="white" fontSize="xl" fontWeight={"bold"}>Account Settings</Text>
            </HStack>
        </Box>
    </Box>)
};

const DesktopNavigation = () => {
    // Desktop navigation component
    return (<></>)
};

export default UserSettingsPage;
