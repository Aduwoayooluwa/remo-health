// pages/appointments.tsx
import React, { useState } from 'react';
import { Box, Tab, TabList, Stack, Tabs, TabPanels, TabPanel, Text, HStack, Center } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import HamburgerMenu from './layout/Sidebar';
import { useGetAppointments } from '@/helper/users';


const approvedAppointments = [
  { id: 1, patientName: 'Alice Johnson', date: '2023-04-10', time: '10:00 AM', reason: 'Regular Checkup' },
  { id: 2, patientName: 'Bob Smith', date: '2023-04-12', time: '02:00 PM', reason: 'Follow-up' },
  { id: 3, patientName: 'Carla Gomez', date: '2023-04-15', time: '11:00 AM', reason: 'Consultation' }
];


const MotionBox = motion(Box);

const AppointmentsPage = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const { pAppointments } = useGetAppointments();


  return (
     <Stack bg="#F5F7F8">
      <Box display={{base: "none", md: "block"}} p={6} bg={"#5C7CFA"} w="full" textColor="white" h={"100px"}>
          <HStack>
                  <HamburgerMenu />
                  <Text fontWeight={"bold"} fontSize={"xl"}>Settings</Text>       
            </HStack> 
      </Box>
    <Center>
      <MotionBox w={{base:"full", md: "90%"}} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} bg="gray.50" minH="100vh">
        <HStack display={{base:"flex", md: "none"}} bg="#5C7CFA" w="full" p={3}>
              <HamburgerMenu />
              <Text textColor="white" fontWeight={"bold"} fontSize="xl">All Appointments</Text>
        </HStack>
      <Tabs mt={10} index={tabIndex} onChange={(index) => setTabIndex(index)} colorScheme="blue" variant="enclosed">
        <TabList>
          <Tab _selected={{ color: "white", bg: "#5C7CFA" }}>Approved Appointments</Tab>
          <Tab _selected={{ color: "white", bg: "#5C7CFA" }}>Pending Appointments</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            {pAppointments.map((appointment) => (
              <Box key={appointment.id} p={3} shadow="md" borderWidth="1px" borderRadius="md" bg="white" my={2}>
                <Text fontWeight="bold" color="#5C7CFA">{appointment.reason}</Text>
                <Text color="gray.600">{new Date(appointment.timeOfAppointment).toDateString()} at {new Date(appointment.timeOfAppointment).toLocaleTimeString()}</Text>
                <Text fontSize="sm">{appointment.doctor_name}</Text>
              </Box>
            ))}
          </TabPanel>
          <TabPanel>
             {pAppointments.map((appointment) => (
              <Box key={appointment.id} p={3} shadow="md" borderWidth="1px" borderRadius="md" bg="white" my={2}>
                <Text fontWeight="bold" color="#5C7CFA">{appointment.reason}</Text>
                <Text color="gray.600">{new Date(appointment.timeOfAppointment).toDateString()} at {new Date(appointment.timeOfAppointment).toLocaleTimeString()}</Text>
                <Text fontSize="sm">{appointment.doctor_name}</Text>
              </Box>
            ))}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </MotionBox>
      </Center>
      </Stack>
  );
};

export default AppointmentsPage;
