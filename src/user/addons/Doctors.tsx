// DoctorProfile.tsx
"use client"
import React, { useState } from 'react';
import { Box, List, ListItem, Avatar, Text, Badge, VStack, HStack, Button, useDisclosure } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { categories } from '@/utils/utils';
import ChatModal from './ChatDialog';
import BookAppointment from './BookAppointment';
import DoctorProfile from './DocProfile';
import { useGetDoctors } from '@/helper/users';


const doctorProfile = {
  id: 1,
  name: 'Dr. Jane Smith',
  imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  bio: 'Dr. Smith is an experienced Pediatrician with over 10 years of practice. She specializes in child healthcare and is committed to providing compassionate care to her young patients.',
  rating: 4.7,
  isOnline: true, 
  specialty: 'Pediatrician'
};

export interface Doctor {
    id: number;
  name: string;
  imageUrl: string;
  rating: number;
    specialty: string;
    
}

const DoctorList: React.FC = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const { doctors } = useGetDoctors();
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);

  const handleDoctorClick = (doctor: any) => {
    setSelectedDoctor(doctor);
    onOpen();
  };

  return (
    <List  spacing={3}>
      {doctors.map((doctor: any) => (
        <ListItem bg="white" key={doctor.id}  p={{base: 3, md: 5, lg: 8}}  shadow="md" borderWidth="1px" borderRadius="md">
              <Box display="flex" alignItems="start">
             <Avatar size={{base:"md", md:"md", lg:"lg"}} name={`${doctor.first_name} ${doctor.last_name}`} onClick={() => handleDoctorClick(doctor)} src={doctor.imageUrl} mr={3} />            
            <Box as="a">
              <Text fontWeight="bold" fontSize={{base:"lg", md:"xl", lg:"2xl"}}>{`${doctor.first_name} ${doctor.last_name}`}</Text>
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
              
           {isOpen && selectedDoctor?.id === doctor.id && (
            <DoctorProfile doctor={selectedDoctor} onClose={() => { onClose(); setSelectedDoctor(null); }} isOpen={isOpen} />
          )}
          
        </ListItem>
      ))}
          
    
    </List>
  );
};

export const DoctorRec = () => {
  const { doctors } = useGetDoctors();
  return (
    <List >
      <HStack className="user-index" overflowX="auto" whiteSpace="nowrap" spacing={4}>
        {doctors.slice(0, 3).map(doctor => (
          <Box key={doctor.id} p={4} bg="white" shadow="md" borderWidth="1px" borderRadius="md" minW="200px">
            <Avatar size="xl" name={`${doctor.first_name} ${doctor.last_name}`} src={doctor.imageUrl} mb={3} alignSelf="center" />
            <Text fontSize="xl" fontWeight="bold" textAlign="center">{`${doctor.first_name} ${doctor.last_name}`}</Text>
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




