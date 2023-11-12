"use client"
import React from 'react';
import { Box, VStack, HStack, Button, Switch, Input, Text, useBreakpointValue } from '@chakra-ui/react';
import Layout from './Layout';
import HamburgerMenu from './layout/Sidebar';

const UserSettingsPage = () => {

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box>
      {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
      <VStack spacing={4} align="stretch">
        {/* Personal Information Section */}
        <SettingsSection title="Personal Information">
          <Input placeholder="Name" />
          <Input my={3}  placeholder="Email" type="email" />
            {/* More fields as needed */}
            <Button colorScheme='blue'>Edit</Button>
        </SettingsSection>

        {/* Security Settings */}
        <SettingsSection title="Security">
          <Input placeholder="Change Password" type="password" />
          <Button mt={3} colorScheme='blue'>Change Password</Button>
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
  );
};

const SettingsSection = ({ title, children }: any) => (
  <Box p={6} border="1px" borderColor="gray.200" p={4}>
    <Text fontSize="lg" fontWeight="bold" mb={3}>{title}</Text>
    {children}
  </Box>
);

const MobileNavigation = () => {
    // Mobile navigation component
    return (<>
        <Box w="full" p="3" bg="#5C7CFA">
            <HStack>
                <HamburgerMenu />
                <Text textColor="white" fontSize="xl" fontWeight={"bold"}>Account Settings</Text>
            </HStack>
        </Box>
    </>)
};

const DesktopNavigation = () => {
    // Desktop navigation component
    return (<></>)
};

export default UserSettingsPage;
