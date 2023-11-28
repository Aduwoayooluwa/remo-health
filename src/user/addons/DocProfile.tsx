import React from 'react';
import { Drawer, DrawerOverlay, DrawerContent, DrawerBody, Avatar, Text, Button, Badge, Box, HStack, Stack } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
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
              <Avatar size="xl" name={`${doctor.first_name} ${doctor.last_name}`}src={doctor.imageUrl} />
              <Text fontSize={"lg"} mb={5} fontWeight="bold" mt={2}>{`${doctor.first_name} ${doctor.last_name}`}</Text>
              <Badge w="80px" colorScheme={true ? 'green' : 'red'}>{true ? 'Online' : 'Offline'}</Badge>
              <Text fontSize="sm">Rating: {doctor.rating}</Text>
              <HStack my={5}>
                <BookAppointment doctorEmail={doctor?.email} doctorName={`${doctor.first_name} ${doctor.last_name}`} doctorId={doctor.id} />
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
