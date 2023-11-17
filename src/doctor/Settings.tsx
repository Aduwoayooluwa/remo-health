// SettingsPage.tsx
"use client"
import React, { useState } from 'react';
import { Box, Input, Switch, Text, Button, Avatar, FormControl, FormLabel, useToast, Heading, HStack, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Layout from './Layout';
import FundsCard from './addons/FundsCard';

// types.ts
export interface DoctorSettings {
  name: string;
  profileImage: string;
  bio: string;
  availability: 'online' | 'offline';
}


const MotionBox = motion(Box);

const SettingsPage: React.FC = () => {
  const [settings, setSettings] = useState<DoctorSettings>();
  const toast = useToast();

  const handleSave = () => {
   
    toast({ title: "Settings updated.", status: "success", duration: 3000, isClosable: true });
  };

    return (
      <Layout>
        <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <FormControl id="name">
            <FormLabel  w={"300px"}>Name</FormLabel>
                <Input value={"Ayarr Starr"} disabled  />                    
        </FormControl>
                
        <FormControl mt={5}  w="300px" display="flex" alignItems="center">
            <FormLabel mb="0">Availability</FormLabel>
            <Switch isChecked={settings.availability === 'online'} onChange={() => setSettings({ ...settings, availability: settings.availability === 'online' ? 'offline' : 'online' })} />
        </FormControl>
                
        <VStack align="start" my={10}>
            <FundsCard />
        </VStack>
        <FormControl w="fit" my={10}>
            <Text fontSize={"2xl"} mb={2}>Change Password</Text>
            <HStack>
                <Input w={"300px"} placeholder='Old Password' />
                <Input w={"300px"} my={5} placeholder='New Password' />   
                      
            </HStack>
            <Button colorScheme="blue" onClick={handleSave}>Save Changes</Button>
        </FormControl>
      

        </MotionBox>  
      </Layout>
    
  );
};

export default SettingsPage;
