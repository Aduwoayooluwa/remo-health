// Appointments.tsx
"use client"
import { useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box, Checkbox, Input } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import Layout from './Layout';
import { useGetAppointments } from './helper';
import { getFormattedTime } from '@/utils/utils';

const MotionBox = motion(Box);

const MotionTr = motion(Tr)

const Appointments= () => {
  const controls = useAnimation();
  const { allAppointments } = useGetAppointments();


  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: { duration: 0.8 },
    });
  }, [controls]);

  return (
    <Layout>

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
          {allAppointments.map((appointment) => (
            
            <MotionTr
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              key={appointment.id}>
               <Td><Checkbox /></Td>   
              <Td>{appointment?.patient_name}</Td>
              <Td>{new Date(appointment?.timeOfAppointment).toLocaleDateString()}</Td>
              <Td>{getFormattedTime(appointment?.timeOfAppointment)}</Td>
              <Td>{appointment?.reason}</Td>
            </MotionTr>
          ))}
        </Tbody>
      </Table>
    </Layout>
  );
};

export default Appointments;
