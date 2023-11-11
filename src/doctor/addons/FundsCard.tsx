import React from 'react';
import { Box, Text, Button, Stat, StatLabel, StatNumber, StatGroup, HStack } from '@chakra-ui/react';

const FundsCard: React.FC = () => {
  const availableFunds = 1200; // This should be fetched from a state or props

  return (
    <Box p={5} shadow="sm" w="500px" borderWidth="1px" borderRadius="md">
          <HStack justify="space-between">
            <StatGroup>
                <Stat>
                <StatLabel>Available Revenue</StatLabel>
                <StatNumber>${availableFunds.toFixed(2)}</StatNumber>
                </Stat>
            </StatGroup>
              
            <StatGroup>
                <Stat>
                <StatLabel>Withdrawable Revenue</StatLabel>
                <StatNumber>${availableFunds.toFixed(2)}</StatNumber>
                </Stat>
            </StatGroup>
      </HStack>
      <Button mt={4} colorScheme="blue" isDisabled>
        Withdraw Funds
      </Button>
      <Text mt={2} fontSize="sm" color="gray.600">
        Withdrawals are processed within 24-48 hours.
      </Text>
    </Box>
  );
};

export default FundsCard;
