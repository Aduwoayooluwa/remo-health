// Appointments.tsx
"use client"
import { useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box, Checkbox, Input } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import Layout from './Layout';

const MotionBox = motion(Box);

interface AppointmentsProps {
  appointments: any[];
}

const Appointments: React.FC<AppointmentsProps> = ({ appointments }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: { duration: 0.8 },
    });
  }, [controls]);

  return (
      <Layout>
          <MotionBox initial={{ opacity: 0 }} animate={controls}>
              <Input w="300px"
              placeholder='Search for Appointment'
              />
      <Table mt={10} variant="simple">
        <Thead>
            <Tr>
            <Th><Checkbox /></Th>
            <Th>Patient Name</Th>
            <Th>Date</Th>
            <Th>Time</Th>
            <Th>Reason</Th>
          </Tr>
        </Thead>
        <Tbody>
          {appointments.map((appointment) => (
            
              <Tr key={appointment.id}>
               <Td><Checkbox /></Td>   
              <Td>{appointment.patientName}</Td>
              <Td>{appointment.date}</Td>
              <Td>{appointment.time}</Td>
              <Td>{appointment.reason}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </MotionBox>
    </Layout>
  );
};

export default Appointments;
