// WalletModal.tsx
import React from 'react';
import {
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton,
  Box, Text, Button, VStack, HStack, IconButton, Divider
} from '@chakra-ui/react';
import { AddIcon, MinusIcon, DeleteIcon, CloseIcon } from '@chakra-ui/icons';

const transactions = [
  { id: 1, type: 'Deposit', amount: 50, date: '2022-07-01', from:"Ayo Aduwo", to:"" },
    { id: 2, type: 'Withdraw', amount: 20, date: '2022-07-02', from: "", to: "Segun Adeola" },
  { id: 1, type: 'Deposit', amount: 50, date: '2022-07-01', from:"Ayo Aduwo", to:"" },
    { id: 2, type: 'Deposit', amount: 20, date: '2022-07-02', from: "", to: "Segun Adeola" },
  { id: 1, type: 'Deposit', amount: 50, date: '2022-07-01', from:"Ayo Aduwo", to:"" },
    { id: 2, type: 'Withdraw', amount: 20, date: '2022-07-02', from: "", to: "Segun Adeola" },
  { id: 1, type: 'Withdraw', amount: 50, date: '2022-07-01', from:"Ayo Aduwo", to:"" },
  { id: 2, type: 'Withdraw', amount: 20, date: '2022-07-02', from:"", to:"Segun Adeola" },
  // More transactions...
];

const WalletModal = ({ isOpen, onClose }: any) => {
  const availableBalance = 100; // Example balance
  const withdrawableBalance = 80; // Example balance

  // Function to delete a transaction
  const deleteTransaction = (id: any) => {
    // Delete logic here
  };

  // Function to clear all transactions
  const clearTransactions = () => {
    // Clear logic here
  };

    
    
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={{ base: "sm", md: "xl" }} isCentered>
      <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px)'
    />
      <ModalContent>
        <ModalHeader>Your Wallet</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4} align="stretch">
            {/* Enhanced Balance Display */}
            <Box p={4} borderRadius="md" boxShadow="base" bg="white">
              <Text fontSize="lg" fontWeight="bold" mb={2}>Balances</Text>
              <HStack justifyContent="space-between">
                <Text>Available Balance:</Text>
                <Text fontWeight="semibold">${availableBalance}</Text>
              </HStack>
              <HStack justifyContent="space-between">
                <Text>Withdrawable Balance:</Text>
                <Text fontWeight="semibold">${withdrawableBalance}</Text>
              </HStack>
            </Box>

             {/* Action Buttons */}
            <HStack>
              <Button leftIcon={<AddIcon />} colorScheme="blue">Fund Wallet</Button>
              <Button leftIcon={<MinusIcon />} colorScheme="red">Withdraw</Button>
            </HStack>
            <Divider />
            
           {/* Transaction History */}
            <VStack overflowY="auto" className="other-scrollbar" maxHeight="200px">
              {transactions.map((transaction) => (
                  
                  <VStack align="start" w="full" key={transaction.id}>
                    <HStack  justifyContent="space-between" w="full">
                    <Text fontWeight="500" textColor={transaction?.type.toLowerCase() === "deposit" ? `green.600` : `red.600`} fontSize="sm">#{transaction?.amount} {transaction?.type.toLowerCase() === "deposit" ? `from ${transaction?.from}` : `to ${transaction?.to}`}</Text>
                        
                    <IconButton 
                        aria-label="Delete transaction" 
                        icon={<DeleteIcon />} 
                        size="sm" 
                        onClick={() => deleteTransaction(transaction.id)} 
                    />
                    </HStack>
                    <Text fontSize="xs">{transaction?.date}</Text>
                  </VStack>
              ))}
              <Button p={3} leftIcon={<CloseIcon />} colorScheme="red" size="sm" onClick={clearTransactions}>
                Clear All Transactions
              </Button>
            </VStack>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default WalletModal;
