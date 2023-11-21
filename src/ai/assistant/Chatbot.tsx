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

  const sendMessage = async () => {
    const userInput: Message = { sender: 'user', content: currentInput };
    setMessages([...messages, userInput]);

    const response = await axios.post('/api/chat', { message: currentInput });
    const botResponse: Message = { sender: 'bot', content: response.data.reply };
    setMessages([...messages, userInput, botResponse]);

    setCurrentInput('');
  };

  return(
    <>
      <Center maxH="100vh" bg="#fdf7ef">
        <VStack bg="#fdf7ef" position="relative" h="100vh" w="container.md">
         
          <Stack overflowY="auto" spacing={4}>
               {messages.map((message, index) => (
                 <Text key={index} alignSelf={message.sender === 'user' ? 'end' : 'start'}>
                   {message.content}
                 </Text>
                 ))}
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
                _focus={{ boxShadow: "0 0 0 3px rgba(92, 124, 250, 0.6)" }} // Focus styles
                my={5} onClick={sendMessage}
            >Send
            </Button>
           </Stack>   
       </VStack>
      </Center>
    
    </>
  );
};
