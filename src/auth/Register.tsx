"use client"
import { useAuth } from '@/helper';
import { Box, Button, Input, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, VStack,Text, useMediaQuery } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from "react"

const MotionTabPanel = motion(TabPanel);

const RegistrationPage = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const { signUpNewUser } = useAuth();

  const [patientInput, setPatientInput] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "patient"
  });

  const [doctorInput, setDoctorInput] = useState({
    first_name: "",
    last_name: "",
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
    first_name: patientInput.first_name,
    last_name: patientInput.last_name,
    email: patientInput.email,
    password: patientInput.password,
    role: "patient"
  }

  const doctorPayload = {
    first_name: doctorInput.first_name,
    last_name: doctorInput.last_name,
    email: doctorInput.email,   
    password: doctorInput.password,
    role: "doctor"
  }

  return (
      <Stack  h="100vh" bg="gray.100" overflow={"hidden"}>
          <Box bg="#5C7CFA" w="full" p={3}>
              <Text textColor="white" fontWeight={"bold"} fontSize="xl">Register</Text>
          </Box>
        <Box display="flex" h="full" justifyContent="center" alignItems="center">
      <Tabs shadow="md"  bg="white" isFitted variant="enclosed" w={isLargerThan768 ? '40%' : '80%'}>
        <TabList mb="1em">
          <Tab>Patient</Tab>
          <Tab>Doctor</Tab>
        </TabList>
        <TabPanels>
          <MotionTabPanel initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <VStack spacing={3}>
                <Input name="first_name" value={patientInput.first_name} onChange={handlePatientInputChange} placeholder="First Name" />
                <Input name="last_name" value={patientInput.last_name} onChange={handlePatientInputChange} placeholder="Last Name" />
              <Input name="email" value={patientInput.email} onChange={handlePatientInputChange} placeholder="Email" />
              <Input name="password" value={patientInput.password} onChange={handlePatientInputChange} placeholder="Password" type="password" />
              <Input name="confirmPassword" value={patientInput.confirmPassword} onChange={handlePatientInputChange} placeholder="Confirm Password" type="password" />
              <Button onClick={() => signUpNewUser(patientPayload)} colorScheme="blue" w="full">Register as Patient</Button>
            </VStack>
          </MotionTabPanel>
           <MotionTabPanel initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <VStack spacing={3}>
              <Input name="first_name" value={doctorInput.first_name} onChange={handleDoctorInputChange} placeholder="First Name" />
                <Input name="last_name" value={doctorInput.last_name} onChange={handleDoctorInputChange} placeholder="Last Name" />
              <Input name="email" value={doctorInput.email} onChange={handleDoctorInputChange} placeholder="Email" />
              <Input name="password" value={doctorInput.password} onChange={handleDoctorInputChange} placeholder="Password" type="password" />
              <Input name="confirmPassword" value={doctorInput.confirmPassword} onChange={handleDoctorInputChange} placeholder="Confirm Password" type="password" />
              <Button onClick={() => signUpNewUser(doctorPayload)}  colorScheme="blue" w="full">Register as Doctor</Button>
            </VStack>
          </MotionTabPanel>
        </TabPanels>
      </Tabs>
    </Box>
   </Stack>
  );
};

export default RegistrationPage;
