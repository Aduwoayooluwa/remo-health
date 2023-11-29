import React from 'react';
import {
  Drawer, DrawerOverlay, DrawerContent, DrawerBody, Avatar, Text, Button, Badge, Box, HStack, Stack,
  Modal, ModalOverlay, ModalContent, ModalBody, useMediaQuery 
  } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import BookAppointment from './BookAppointment';
import { nanoid } from "nanoid";
import { generateToken } from '@/helper';
import { ChannelForm } from '@/components/video/addons/ChannelForm';
import ConnectingModal from "@/components/video/addons/ConnectingModal";

import Page from '@/components/video';
import useUserStore from '@/lib/store';

const DoctorProfile = ({ doctor, isOpen, onOpen, onClose }: any) => {
  const [isCallModalOpen, setIsCallModal] = React.useState(false);

  const [isLargerThan768px] = useMediaQuery("(min-width: 768px)");

  const { user } = useUserStore();
  function onModalOpen() {
    setIsCallModal(true)
  }


  return (
    <>
      <Button display={isOpen && "none"} onClick={onOpen}>View Doctor Profile</Button>

      
      {isLargerThan768px ? (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent borderTopRadius="md">
            <ModalBody >
              
            <Box w="full" bg="#5C7CFA" p={3} h="40px">
            </Box>
            <Stack mt={3} py={3}>
              <Avatar size="xl" name={`${doctor.first_name} ${doctor.last_name}`}src={doctor.imageUrl} />
              <Text fontSize={"lg"} mb={5} fontWeight="bold" mt={2}>{`${doctor.first_name} ${doctor.last_name}`}</Text>
              <Badge w="80px" colorScheme={true ? 'green' : 'red'}>{true ? 'Online' : 'Offline'}</Badge>
              <Text fontSize="sm">Rating: {doctor.rating}</Text>
              <HStack my={5}>
                <BookAppointment doctorEmail={doctor?.email} doctorName={`${doctor.first_name} ${doctor.last_name}`} doctorId={doctor.id} />
                <Button onClick={onModalOpen} leftIcon={<PhoneIcon />} >Call</Button>
                <Page isCallModalOpen={isCallModalOpen} setIsCallModalOpen={setIsCallModal} />
              </HStack>
              <Text fontSize="sm" lineHeight={"20px"}>{doctor.bio}</Text> 
            </Stack>
            </ModalBody>
          </ModalContent>
        </Modal>
      ) : (
         <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <Box w="full" bg="#5C7CFA" p={3} h="40px">
            </Box>
            <Stack mt={3} py={3}>
              <Avatar size="xl" name={`${doctor.first_name} ${doctor.last_name}`}src={doctor.imageUrl} />
              <Text fontSize={"lg"} mb={5} fontWeight="bold" mt={2}>{`${doctor.first_name} ${doctor.last_name}`}</Text>
              <Badge w="80px" colorScheme={true ? 'green' : 'red'}>{true ? 'Online' : 'Offline'}</Badge>
              <Text fontSize="sm">Rating: {doctor.rating}</Text>
              <HStack my={5}>
                <BookAppointment doctorEmail={doctor?.email} doctorName={`${doctor.first_name} ${doctor.last_name}`} doctorId={doctor.id} />
                <Button onClick={onModalOpen} leftIcon={<PhoneIcon />} >Call</Button>
                <Page isCallModalOpen={isCallModalOpen} setIsCallModalOpen={setIsCallModal} />
              </HStack>
              <Text fontSize="sm" lineHeight={"20px"}>{doctor.bio}</Text> 
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>  
      )
        
      }
      
     
      {/* <ConnectingModal setInCall={() => {}} isOpen={isCallModalOpen} onClose={onModalClose} callerName={`${user.first_name} ${user.last_name}`}  /> */}
    </>
  );
};

export default DoctorProfile;
