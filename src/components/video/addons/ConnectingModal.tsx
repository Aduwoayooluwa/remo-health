import React from 'react';
import { Modal, VStack, ModalOverlay, ModalContent, ModalHeader, Button, ModalFooter, ModalBody, ModalCloseButton, Image, Text, Box, Spinner } from '@chakra-ui/react';

type CallConnectingModalProps = {
    isOpen: boolean;
    onClose: () => void;
    callerName: string;
    setInCall: React.Dispatch<React.SetStateAction<boolean>>;
    callerImage?: string;
    
};


const CallConnectingModal: React.FC<CallConnectingModalProps> = ({ isOpen, onClose, callerName, callerImage, setInCall }) => {
 

    return (
        <Modal size={"xs"} isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Connecting...</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack w="full" justify="center" align="center" textAlign="center">
                        <Image borderRadius="lg" boxSize="100px" src={callerImage} fallbackSrc={"/default.webp"} alt={callerName} mb={4} />
                        <Text fontSize="xl" fontWeight="bold">{callerName}</Text>
                        {/* <Spinner size="xl" thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" mt={6} /> */}
                        <Button
                            onClick={(e) => {
                                e.preventDefault();
                                setInCall(true);
                            }}
                            colorScheme="teal" ml={3}
                            color="white" 
                            >
                            Video Connect
                        </Button>
                    </VStack>
                </ModalBody>
                <ModalFooter justifyContent="center">
                    <Text fontSize="md">Click to Enter Call</Text>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default CallConnectingModal;
