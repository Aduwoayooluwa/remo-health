import React from 'react';
import { Drawer, DrawerBody, DrawerOverlay, DrawerContent, Input, Button, useDisclosure, FormControl, FormLabel, Textarea } from '@chakra-ui/react';

const BookAppointment = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>Book Appointment</Button>

      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent borderTopRadius="md">
          <DrawerBody p={4}>
            <FormControl id="appointment-date" mb={4}>
              <FormLabel>Date</FormLabel>
              <Input type="date" />
            </FormControl>
            <FormControl id="appointment-time" mb={4}>
              <FormLabel>Time</FormLabel>
              <Input type="time" />
            </FormControl>
            <FormControl id="appointment-reason" mb={4}>
              <FormLabel>Reason for Visit</FormLabel>
              <Textarea placeholder="Describe the reason for your visit" />
            </FormControl>
            <Button colorScheme="blue" onClick={onClose}>Book Appointment</Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default BookAppointment;
