"use client"
import React from 'react';
import {
  Box, VStack, HStack, Avatar, Text, Button, Divider, Badge,
  IconButton, useMediaQuery, SimpleGrid, Heading, Stack
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { AppointmentHistory, HealthInformation, MessagesNotifications } from './addons/ProfileComponents';
import HamburgerMenu from './layout/Sidebar';

const UserProfilePage = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  // This would be replaced with actual user data
  const user = {
    name: 'John Doe',
    age: 30,
    imageUrl: 'path-to-image',
    bio: 'Lorem ipsum dolor sit amet...',
    appointments: [/* ... */],
    messages: [/* ... */]
  };

  return (
      <Box  pb={5}>
          <HStack bg="#5C7CFA" w="full" p={3}>
              <HamburgerMenu />
              <Text textColor="white" fontWeight={"bold"} fontSize="xl">Your Profile</Text>
        </HStack>
          <VStack px={5} spacing={4} mt={3}  align="stretch">

        {/* User Information */}
        <HStack spacing={4}>
          <Avatar size="xl" name={user.name} src={user.imageUrl} />
          <VStack align="start">
            <Text fontWeight="bold" fontSize="xl">{user.name}</Text>
            <Text fontSize="sm">Age: {user.age}</Text>
            <Text fontSize="sm">Bio: {user.bio}</Text>
            <IconButton aria-label="Edit Profile" icon={<EditIcon />} />
          </VStack>
        </HStack>

        <Divider />

        {/* Health Information */}
        <VStack align="start">
          <Heading size="md">Health Information</Heading>
          <HealthInformation />
        </VStack>

        <Divider />

        {/* Appointment History */}
        <VStack align="start">
          <Heading size="md">Appointment History</Heading>
                  {/* Map through appointments */}
            <AppointmentHistory />
        </VStack>

        <Divider />

        {/* Messaging and Notifications */}
        <VStack align="start">
          <Heading size="md">Messages & Notifications</Heading>
                  {/* List messages */}
            <MessagesNotifications />
        </VStack>

      </VStack>
    </Box>
  );
};

export default UserProfilePage;
