"use client"
import React from 'react';
import { Box, VStack, Avatar, Text, Badge, Stack, Icon, HStack, Button, AlertIcon, Alert, AlertDescription } from '@chakra-ui/react';
import CalendarComponent from './addons/Calendar';
import Link from 'next/link';
import useUserStore from '@/lib/store';

interface ProfileProps {
  doctorProfile: any;
}

const Profile: React.FC<ProfileProps> = ({ doctorProfile }) => {
  const { user } = useUserStore();
  const fullName = user?.first_name + " " + user?.last_name;

  return (
    <VStack align="center" spacing={4} p={5} borderLeft="1px" w="full" borderColor="gray.200">
      <Avatar size="xl" name={fullName} src={doctorProfile.imageUrl} />
      <Text fontWeight="bold">{fullName}</Text>
    
      
          <HStack justify="space-around" w="full">
              <Stack>
                  <Text fontWeight="bold" textColor="gray.500" fontSize="lg">Patients</Text>
                  <Text fontSize="xl" fontWeight="medium">{doctorProfile.patientCount}</Text>
              </Stack>

              <Stack>
                  <Text  textColor="gray.500" fontWeight="bold" fontSize="lg">Rating</Text>
                  <Badge size="lg" colorScheme="green" p={1}>{`${user?.rating} Stars`}</Badge>
               </Stack>             
        </HStack>

      <Stack direction="row" align="center">
        
        <Link href="/appointments" >
            <Alert>
                <AlertIcon />
            <AlertDescription>{`${doctorProfile.newAppointments} New Appointments`}</AlertDescription>
            </Alert>
        </Link>
          </Stack>
          
         {/* calendar */}
        <Box mt={10} >
            <Text></Text>
            <CalendarComponent />
        </Box>

        <Button colorScheme="blue">Upgrade</Button>
    </VStack>
  );
};

export default Profile;
