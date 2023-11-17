import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, IconButton, Textarea, Box, Text, VStack } from '@chakra-ui/react';
import { ArrowRightIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { motion } from 'framer-motion';

const MotionModalOverlay = motion(ModalOverlay);
const MotionModalContent = motion(ModalContent);

const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

const contentVariants = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: "100vh", opacity: 0 },
};
  
const ChatModal = ({ isOpen, onClose } : any) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    // Logic to send message
    setMessage('');
  };

  return (
    <Modal scrollBehavior='inside'size="full" isOpen={isOpen} onClose={onClose}>
          <MotionModalOverlay
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          />
          <MotionModalContent
              position={"relative"}
              mt={-1}
              height={"100vh"}
              variants={contentVariants}
             initial="hidden"
             animate="visible"
             exit="exit"
          >
        <ModalHeader bg={"#5C7CFA"} justifyContent={"space-around"}>
            
            <ArrowBackIcon w={6} h={6} color="white" position={"absolute"} top={5} left={5} onClick={onClose} />
            <Text textColor="white" textAlign="center">Chat</Text>
        </ModalHeader>
              <ModalBody>
            {/* display mesages */}
            <VStack>
                      
            </VStack>
          <Box position={"absolute"} bottom={0} pb={10} bg="white" display="flex" alignItems="end">
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
            //   onKeyPress={handleKeyPress}
            resize="none"
            width="300px"
            />
            <IconButton
              aria-label="Send message"
              icon={<ArrowRightIcon />}
              onClick={handleSendMessage}
              ml={2}
            />
          </Box>
        </ModalBody>
      </MotionModalContent>
    </Modal>
  );
};

export default ChatModal;
