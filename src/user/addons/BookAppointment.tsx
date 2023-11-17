import React, { useState } from 'react';
import { Drawer, DrawerBody, DrawerOverlay, DrawerContent, Input, Button, useDisclosure, FormControl, FormLabel, Textarea, useToast } from '@chakra-ui/react';
import { createUserAppointment } from '@/helper';
import useUserStore from '@/lib/store';

const BookAppointment = ({ doctorId, doctorName }: Readonly<{doctorId: string, doctorName: string}>) => {
  const user = useUserStore((state) => state.user)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [appointment, setAppointment] = useState({
    date: '',
    time: '',
    reason: ''
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setAppointment({ ...appointment, [name]: value });
  };

  const payload = {
    patient_name: `${user.first_name} ${user.last_name}`,
    reason: appointment.reason,
    doctorId,
    timeOfAppointment: appointment.date,
    isApproved: false,
    doctor_name: doctorName,
    senderEmail: user.email
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createUserAppointment(payload)
    toast({
      status: "success",
      description: `${payload.reason} appointment, with ${doctorName}`
    })
    onClose(); 
  };

  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>Book Appointment</Button>

      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent borderTopRadius="md">
          <DrawerBody p={4} as="form" onSubmit={handleSubmit}>
            <FormControl id="appointment-date" mb={4}>
              <FormLabel>Date</FormLabel>
              <Input type="date" name="date" value={appointment.date} onChange={handleInputChange} />
            </FormControl>
            <FormControl id="appointment-time" mb={4}>
              <FormLabel>Time</FormLabel>
              <Input type="time" name="time" value={appointment.time} onChange={handleInputChange} />
            </FormControl>
            <FormControl id="appointment-reason" mb={4}>
              <FormLabel>Reason for Visit</FormLabel>
              <Textarea name="reason" placeholder="Describe the reason for your visit" value={appointment.reason} onChange={handleInputChange} />
            </FormControl>
            <Button type="submit" colorScheme="blue">Book Appointment</Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default BookAppointment;

