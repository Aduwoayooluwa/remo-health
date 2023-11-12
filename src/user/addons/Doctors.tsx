// DoctorProfile.tsx
"use client"
import React, { useState } from 'react';
import { Box, List, ListItem, Avatar, Text, Badge, VStack, HStack, Button, useDisclosure } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { categories } from '@/utils/utils';
import ChatModal from './ChatDialog';
import BookAppointment from './BookAppointment';
import DoctorProfile from './DocProfile';
import { doctorProfile } from '@/app/profile/page';


export interface Doctor {
    id: number;
  name: string;
  imageUrl: string;
  rating: number;
    specialty: string;
    
}

export const doctors: Doctor[] = [
  { id: 1, name: 'Dr. Emily Smith', imageUrl: 'path-to-image', rating: 4.5, specialty: 'Dermatologist' },
  { id: 2, name: 'Dr. John Doe', imageUrl: 'path-to-image', rating: 4.2, specialty: 'Cardiologist' },
  { id: 3, name: 'Dr. Sarah Johnson', imageUrl: 'path-to-image', rating: 4.3, specialty: 'Neurologist' },
  { id: 4, name: 'Dr. Michael Brown', imageUrl: 'path-to-image', rating: 4.7, specialty: 'Pediatrician' },
  { id: 5, name: 'Dr. Linda Garcia', imageUrl: 'path-to-image', rating: 4.6, specialty: 'Ophthalmologist' },
  { id: 6, name: 'Dr. William Martinez', imageUrl: 'path-to-image', rating: 4.4, specialty: 'Orthopedic Surgeon' },
  { id: 7, name: 'Dr. Elizabeth Davis', imageUrl: 'path-to-image', rating: 4.5, specialty: 'Gynecologist' },
  { id: 8, name: 'Dr. Richard Rodriguez', imageUrl: 'path-to-image', rating: 4.3, specialty: 'Psychiatrist' }
];


const DoctorList: React.FC = () => {
    const { onOpen, isOpen, onClose } = useDisclosure();
  return (
    <List  spacing={3}>
      {doctors.slice(3, 7).map((doctor: Doctor) => (
        <ListItem bg="white" key={doctor.id}  p={{base: 3, md: 5, lg: 8}}  shadow="md" borderWidth="1px" borderRadius="md">
              <Box display="flex" alignItems="start">
             <Avatar size={{base:"md", md:"md", lg:"lg"}} name={doctor.name} onClick={onOpen} src={doctor.imageUrl} mr={3} />            
            <Box as="a">
              <Text fontWeight="bold" fontSize={{base:"lg", md:"xl", lg:"2xl"}}>{doctor.name}</Text>
              <Text fontSize={{base:"sm", md:"md"}}>{doctor.specialty}</Text>
              
              <HStack mt={2} >
              {Array(5).fill('').map((_, i) => (
                <StarIcon key={i} color={i < doctor.rating ? "yellow.400" : "gray.300"} />
              ))}
              <Text ml={2} fontSize="sm">{doctor.rating}</Text>
                      </HStack>
            <Text fontSize={"sm"}>8 years of Experience</Text>
            <Text fontSize={"sm"}>Lagos, Nigeria</Text>
            </Box>
              
              </Box>
              
              {isOpen && (<DoctorProfile doctor={doctorProfile} onClose={onClose} isOpen={isOpen} onOpen={onOpen} />)}
        </ListItem>
      ))}
          
    
    </List>
  );
};

export const DoctorRec = () => {
  return (
    <List>
      <HStack overflowX="auto" whiteSpace="nowrap" spacing={4}>
        {doctors.slice(0, 3).map(doctor => (
          <Box key={doctor.id} p={4} bg="white" shadow="md" borderWidth="1px" borderRadius="md" minW="200px">
            <Avatar size="xl" name={doctor.name} src={doctor.imageUrl} mb={3} alignSelf="center" />
            <Text fontSize="xl" fontWeight="bold" textAlign="center">{doctor.name}</Text>
            <Text fontSize="md" color="gray.600" textAlign="center">{doctor.specialty}</Text>
            <Box mt={2} display="flex" justifyContent="center" alignItems="center">
              {Array(5).fill('').map((_, i) => (
                <StarIcon key={i} color={i < doctor.rating ? "yellow.400" : "gray.300"} />
              ))}
              <Text ml={2} fontSize="sm">{doctor.rating}</Text>
            </Box>
          </Box>
        ))}
      </HStack>
    </List>
  );
};
export default DoctorList;


export const DoctorCategories: React.FC = () => {
  return (
    <Box className="user-index" overflowX="auto" whiteSpace="nowrap" p={4}>
      <HStack spacing={4}>
        {categories.map((category: string, index: number) => (
          <Button bg="white"  key={index} variant="outline" minW="200px" colorScheme="blue">
            {category}
          </Button>
        ))}
      </HStack>
    </Box>
  );
};




