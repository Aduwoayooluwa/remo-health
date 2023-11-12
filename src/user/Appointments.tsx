// pages/appointments.tsx
import React, { useState } from 'react';
import { Box, Tab, TabList, Tabs, TabPanels, TabPanel, Text, HStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import HamburgerMenu from './layout/Sidebar';


const approvedAppointments = [
  { id: 1, patientName: 'Alice Johnson', date: '2023-04-10', time: '10:00 AM', reason: 'Regular Checkup' },
  { id: 2, patientName: 'Bob Smith', date: '2023-04-12', time: '02:00 PM', reason: 'Follow-up' },
  { id: 3, patientName: 'Carla Gomez', date: '2023-04-15', time: '11:00 AM', reason: 'Consultation' }
];


const MotionBox = motion(Box);

const AppointmentsPage = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
      <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} bg="gray.50" minH="100vh">
        <HStack bg="#5C7CFA" w="full" p={3}>
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
            {approvedAppointments.map((appointment) => (
              <Box key={appointment.id} p={3} shadow="md" borderWidth="1px" borderRadius="md" bg="white" my={2}>
                <Text fontWeight="bold" color="#5C7CFA">{appointment.patientName}</Text>
                <Text color="gray.600">{appointment.date} at {appointment.time}</Text>
                <Text fontSize="sm">Reason: {appointment.reason}</Text>
              </Box>
            ))}
          </TabPanel>
          <TabPanel>
            {/* Map through pending appointments */}
            <Text>Pending Appointments List</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </MotionBox>
  );
};

export default AppointmentsPage;
