import { Box, Button, Input, Stack, Text, Heading, Center, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';

interface Message {
  sender: 'user' | 'bot';
  content: string;
}

export const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentInput, setCurrentInput] = useState('');

  const [isLoading, setIsLoading] = useState(false);


  const sendMessage = async () => {
    const userInput: Message = { sender: 'user', content: currentInput };
    setMessages([...messages, userInput]);
    setIsLoading(true);

    try {
        const response = await axios.post('/api/chat', { message: currentInput });
        const botResponse: Message = { sender: 'bot', content: response.data.reply };
        setMessages(prevMessages => [...prevMessages, userInput, botResponse]);
    } catch (error) {
        console.error('Error sending message:', error);
        
    }

    setIsLoading(false); 
    setCurrentInput('');
  };

  return(
    <>
      <Center maxH="100vh" bg="#fdf7ef">
        <VStack bg="#fdf7ef" position="relative" h="100vh" w="container.md">
         
          <Stack p={6} overflowY="auto" spacing={4}>
               {messages.map((message, index) => (
                 <Text key={index} alignSelf={message.sender === 'user' ? 'end' : 'start'}>
                   {message.content}
                 </Text>
               ))}
              {isLoading && <Text alignSelf="center">analyzing...</Text>}
            </Stack>
            <Stack position="absolute" bottom={0}  p="6" w={{base:"full", md:"full"}}  bg="#fdf7ef">
                    <Input 
                    value={currentInput} 
                    onChange={(e) => setCurrentInput(e.target.value)} 
                    placeholder="Type your message here..." 
               />

            <Button
                bg="#5C7CFA" 
                color="white" 
                _hover={{ bg: "blue.600" }} 
                _focus={{ boxShadow: "0 0 0 3px rgba(92, 124, 250, 0.6)" }} 
              my={5} onClick={sendMessage}
              isLoading={isLoading}
            >Send
            </Button>
           </Stack>   
       </VStack>
      </Center>
    
    </>
  );
};
