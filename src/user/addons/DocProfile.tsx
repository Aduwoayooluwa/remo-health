import React from 'react';
import { Drawer, DrawerOverlay, DrawerContent, DrawerBody, Avatar, Text, Button, Badge, Box, HStack, Stack } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/react';
import BookAppointment from './BookAppointment';

const DoctorProfile = ({ doctor, isOpen, onOpen, onClose }: any) => {


  return (
    <>
      <Button onClick={onOpen}>View Doctor Profile</Button>
      
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <Box w="full" bg="#5C7CFA" p={3} h="40px">
            </Box>
            <Stack mt={3} py={3}>
              <Avatar size="xl" name={doctor.name} src={doctor.imageUrl} />
              <Text fontSize={"lg"} mb={5} fontWeight="bold" mt={2}>{doctor.name}</Text>
              <Badge w="80px" colorScheme={doctor.isOnline ? 'green' : 'red'}>{doctor.isOnline ? 'Online' : 'Offline'}</Badge>
              <Text fontSize="sm">Rating: {doctor.rating}</Text>
              <HStack my={5}>
                <BookAppointment />
                <Button leftIcon={<PhoneIcon />} colorScheme="teal" ml={3}>Call</Button>
              </HStack>
              <Text fontSize="sm" lineHeight={"20px"}>{doctor.bio}</Text> 
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DoctorProfile;