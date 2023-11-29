"use client"
import { Table, Thead, Tbody, Tr, Th, Td, Stack, Input, Checkbox } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from "react";
import Layout from './Layout';

// interfaces.ts
export interface Patient {
  id: number;
  name: string;
  age: number;
  lastVisit: string;
}

const MotionTr = motion(Tr);

const Patients: React.FC<{ patients: Patient[] }> = ({ patients }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    return (
       <Layout>
                <Stack p={10}>
                <Input
                placeholder="Search Patients"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                        mb={4}
                        w="300px"
                />
            {/* Add Filter UI here */}
            <Table variant="simple">
                <Thead>
                <Tr>
                    <Th><Checkbox /></Th>
                    <Th>Name</Th>
                    <Th>Age</Th>
                    <Th>Label</Th>
                    <Th>Last Visit</Th>
                </Tr>
                </Thead>
                <Tbody>
                {filteredPatients.map(patient => (
                <MotionTr
                    key={patient.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    >
                    <Td><Checkbox /></Td>
                    <Td>{patient.name}</Td>
                    <Td>{patient.age}</Td>
                    <Td>{"Emergency"}</Td>
                    <Td>{patient.lastVisit}</Td>
                    
                </MotionTr>
                ))}
            </Tbody>
            </Table>  
            </Stack>  
       </Layout> 
      
    
  );
};

export default Patients;
