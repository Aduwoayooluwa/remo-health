"use client"
import React from 'react';
import {
  Box, VStack, HStack, Avatar, Text, Button, Divider, Badge,
  IconButton, SimpleGrid, Heading, ModalOverlay, Center, useColorModeValue, useDisclosure
} from '@chakra-ui/react';
import { EditIcon, InfoIcon, CalendarIcon, ChatIcon } from '@chakra-ui/icons';
import { AppointmentHistory, HealthInformation, MessagesNotifications } from './addons/ProfileComponents';
import HamburgerMenu from './layout/Sidebar';
import useUserStore from '@/lib/store';
import WalletModal from "./addons/Wallet"

const UserProfilePage = () => {
  const user = useUserStore((state) => state.user)
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const cardHoverBg = useColorModeValue("gray.200", "gray.600");

  const [isWalletModalOpen, setIsWalletModalOpen] = React.useState(false);

  const openWalletModal = () => {

    setIsWalletModalOpen(true)
  };
  const closeWalletModal = () => setIsWalletModalOpen(false);

  return (
    <Box pb={5}>
      {/* Top Bar */}
      <HStack bg="#5C7CFA" w="full" p={3}>
        <HamburgerMenu />
        <Text textColor="white" fontWeight="bold" fontSize="xl">Your Profile</Text>
      </HStack>

      <Center>
        <VStack px={5} spacing={6} mt={6} align="stretch" w="full" maxW="container.md">
          {/* User Information */}
          <Box bg={bgColor} p={5} borderRadius="lg" boxShadow="md" _hover={{ bg: cardHoverBg }}>
            <HStack spacing={4}>
              <Avatar size="xl" name={user?.first_name + " " + user?.last_name} src={user?.imageUrl} />
              <VStack align="start">
                <Text fontWeight="bold" fontSize="xl">{user?.first_name + " " + user?.last_name}</Text>
                <Text fontSize="sm">Age: {user?.age}</Text>
                <Text fontSize="sm">Bio: {user?.bio}</Text>
                <IconButton aria-label="Edit Profile" icon={<EditIcon />} />
              </VStack>
            </HStack>
            <Button
              bg="#5C7CFA" 
              color="white" 
              _hover={{ bg: "blue.600" }} 
              _focus={{ boxShadow: "0 0 0 3px rgba(92, 124, 250, 0.6)" }} // Focus styles
              
              onClick={openWalletModal}
              >
              View Wallet
            </Button>
          </Box>

          <SimpleGrid columns={[1, null, 2]} gap={5}>
            {/* Health Information */}
            <Box bg={bgColor} p={5} borderRadius="lg" boxShadow="md" _hover={{ bg: cardHoverBg }}>
              <VStack align="start">
                <HStack>
                  <InfoIcon />
                  <Heading size="md">Health Information</Heading>
                </HStack>
                <HealthInformation />
              </VStack>
            </Box>

            {/* Appointment History */}
            <Box bg={bgColor} p={5} borderRadius="lg" boxShadow="md" _hover={{ bg: cardHoverBg }}>
              <VStack align="start">
                <HStack>
                  <CalendarIcon />
                  <Heading size="md">Appointment History</Heading>
                </HStack>
                <AppointmentHistory />
              </VStack>
            </Box>
          </SimpleGrid>

          {/* Messaging and Notifications */}
          <Box bg={bgColor} p={5} borderRadius="lg" boxShadow="md" _hover={{ bg: cardHoverBg }}>
            <VStack align="start">
              <HStack>
                <ChatIcon />
                <Heading size="md">Messages & Notifications</Heading>
              </HStack>
              <MessagesNotifications />
            </VStack>
          </Box>
        </VStack>
      </Center>
      
      <VStack>
        <WalletModal 
        isOpen={isWalletModalOpen} 
        onClose={closeWalletModal} 
      />
      </VStack>
    </Box>
  );
};

export default UserProfilePage;
