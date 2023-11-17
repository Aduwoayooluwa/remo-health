"use client"
import { useAuth } from '@/helper';
import { Box, Button, Input, Stack, Text, Tab, TabList, TabPanel, TabPanels, Tabs, useMediaQuery, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from "react";

const MotionTabPanel = motion(TabPanel);
const tabPanelStyle = {
    p: 8,
    boxShadow: 'xl',
    borderRadius: 'lg',
    bg: 'white',
    textAlign: 'center',
    m: 4,
    minW: '300px',
};
  
const LoginPage = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const { signInWithEmail } = useAuth();
  
  const [patientInput, setPatientInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    role: "patient"
  });

  const [doctorInput, setDoctorInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    role: "doctor"
  })


  function handlePatientInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setPatientInput({ ...patientInput, [name]: value });
  }

  function handleDoctorInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setDoctorInput({ ...doctorInput, [name]: value });
  }

  const patientPayload = {
    email: patientInput.email,
    password: patientInput.password,
    role: "patient"
  }

  const doctorPayload = {
    email: doctorInput.email,   
    password: doctorInput.password,
    role: "doctor"
  }

  return (
      <Stack h="100vh" bg="gray.100" overflow={"hidden"}>
          <Box bg="#5C7CFA" w="full" p={3}>
              <Text textColor="white" fontWeight={"bold"} fontSize="xl">Login</Text>
          </Box>
          <Box display="flex" overflow={"hidden"} h="full" justifyContent="center" alignItems="center" >
          
        <Tabs mt={-10} isFitted variant="enclosed"  w={isLargerThan768 ? '40%' : '80%'}>
            <TabList mb="1em">
            <Tab>Patient</Tab>
            <Tab>Doctor</Tab>
            </TabList>
            <TabPanels>
                <MotionTabPanel {...tabPanelStyle} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Heading as="h3" pb={5} size="md">Login as Patient</Heading>
                <Input my={3} name="email" value={patientInput.email} onChange={handlePatientInputChange} placeholder="Patient's Email" />
                <Input name="password" value={patientInput.password} onChange={handlePatientInputChange} placeholder="Password" type="password" />
                <Button my={3} onClick={() => signInWithEmail(patientPayload)} colorScheme="blue" w="full">Log in as Patient</Button>
            </MotionTabPanel>
            <MotionTabPanel {...tabPanelStyle} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                 <Heading as="h3" pb={5}  size="md">Login as Doctor</Heading>
                <Input my={3} name="email" value={doctorInput.email} onChange={handleDoctorInputChange} placeholder="Doctor's Email" />
                <Input name="password" value={doctorInput.password} onChange={handleDoctorInputChange} placeholder="Password" type="password" />
              <Button my={3}  onClick={() => signInWithEmail(doctorPayload)} colorScheme="blue" w="full">Log in as Doctor</Button>
            </MotionTabPanel>
            </TabPanels>
        </Tabs>
        </Box>
      </Stack>
  );
};

export default LoginPage;
