// DoctorProfile.tsx
"use client"
import React, { useState } from 'react';
import { Box, List, ListItem, Avatar, Text, Badge, VStack, HStack, Button } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { categories } from '@/utils/utils';
import ChatModal from './ChatDialog';


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
    const [isChatOpened, setisChatOpened] = useState(false)
  return (
    <List spacing={3}>
      {doctors.slice(3, 7).map((doctor: Doctor) => (
        <ListItem bg="white" key={doctor.id} p={3} shadow="md" borderWidth="1px" borderRadius="md">
          <Box as="a" onClick={() => setisChatOpened(true)} display="flex" alignItems="center">
            <Avatar size="md" name={doctor.name} src={doctor.imageUrl} mr={3} />
            <Box>
              <Text fontWeight="bold">{doctor.name}</Text>
              <Text fontSize="sm">{doctor.specialty}</Text>
              <Text fontSize="sm">Rating: {doctor.rating}</Text>
            </Box>
          </Box>
        </ListItem>
      ))}
          
          {isChatOpened && (<ChatModal isOpen={isChatOpened} onClose={() => setisChatOpened(false)}/>)}
    </List>
  );
};

export const DoctorRec: React.FC = () => {
  return (
      <List>
          <HStack overflowX="auto" whiteSpace="nowrap">
                {doctors.slice(0, 3).map((doctor: Doctor) => (
                    <ListItem bg="white" key={doctor.id} p={6} h="250px"  shadow="md" borderWidth="1px" borderRadius="md">
                        <VStack alignContent={"start"}>
                            <Box alignItems="start">
                                <Avatar size="xl" name={doctor.name} src={doctor.imageUrl} mr={3} />
                                <Box mt={8}>
                                    <Text fontSize={"xl"} fontWeight="bold">{doctor.name}</Text>
                                    <HStack w="full" justify="space-around">
                                        <Text my={3}  fontSize="md">{doctor.specialty}</Text>
                                        <Text fontSize="sm">Rating: {doctor.rating}</Text>
                                    </HStack>
                                
                                </Box>
                            </Box>
                        </VStack>
                    </ListItem>
                ))}
          </HStack>
      
    </List>
  );
};

export default DoctorList;


export const DoctorCategories: React.FC = () => {
  return (
    <Box overflowX="auto" whiteSpace="nowrap" p={4}>
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




