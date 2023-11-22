import React, { useState, useEffect } from 'react';
import { Box, Text, Progress } from '@chakra-ui/react';

type ReplyComponentProps = {
    aiResponses: string[]; 
};

const ReplyComponent: React.FC<ReplyComponentProps> = ({ aiResponses }) => {
    const [displayedResponses, setDisplayedResponses] = useState<string[]>([]);
    
    useEffect(() => {
        if (aiResponses.length > 0) {
            const timer = setTimeout(() => {
                setDisplayedResponses(current => [...current, aiResponses[displayedResponses.length]]);
            }, 1000); 
            
            return () => clearTimeout(timer);
        }
    }, [aiResponses, displayedResponses.length]);

    return (
        <Box w={{ base: "full", md: "600px" }} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} m={4} bg="blue.100">
            <Text fontSize="md">AI Responses:</Text>
            <Box bg="white" p={3} borderRadius="md" maxH="300px" overflowY="auto">
                {displayedResponses.map((response, index) => (
                    <Text key={index} fontSize="sm" mt={2} animation="fadeIn 1s">
                        {response}
                    </Text>
                ))}
                {displayedResponses.length < aiResponses.length && <Progress size="xs" isIndeterminate mt={2} />}
            </Box>
        </Box>
    );
};

export default ReplyComponent;
