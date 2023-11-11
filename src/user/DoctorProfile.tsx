"use client"
import React from 'react';
import { Box, Text, Button, Avatar, Badge, HStack, Stack } from '@chakra-ui/react';
import { ArrowBackIcon, PhoneIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/navigation';

const DoctorProfilePage = ({ doctor }: any) => {
    const router = useRouter()
  return (
      <Box  h="100vh">
          <Box w="full" bg="#5C7CFA" p={3} h="40px">
              <ArrowBackIcon w={6} h={6} color={"white"} onClick={() => router.back()}/>
          </Box>
          <Stack  borderWidth="1px" p={5}>
            <Avatar size="xl" name={doctor.name} src={doctor.imageUrl} />
            <Text fontSize={"lg"} mb={5} fontWeight="bold" mt={2}>{doctor.name}</Text>
        
            <Badge w="80px" colorScheme={doctor.isOnline ? 'green' : 'red'}>{doctor.isOnline ? 'Online' : 'Offline'}</Badge>
            <Text fontSize="sm">Rating: {doctor.rating}</Text>
            

            <HStack my={5}>
                <Button colorScheme="blue" mt={3}>Message</Button>
                <Button  leftIcon={<PhoneIcon />} colorScheme="teal" mt={3} ml={3}>
            Call
            </Button>
            </HStack>
            
            
            <Text fontSize="sm" lineHeight={"20px"}>{doctor.bio}</Text> 
    </Stack>
    
    </Box>
  );
};

export default DoctorProfilePage;
