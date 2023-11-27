import { Box, Button, Input, Stack, Text, Center, VStack, InputGroup, Textarea, InputLeftElement, Icon, InputRightElement } from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';
import { GoArrowUp } from "react-icons/go";
import AutoResizingTextarea from '@/components/ui/AutoSizeTextArea';

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
    <Box overflow="hidden">
      <Center maxH="100vh" bg="#fdf7ef">
        <VStack pt={20} bg="#fdf7ef" position="relative" h="100vh" w="container.md">
          <VStack pb={28} overflowY="auto" className='chat-scroll'>
            <Stack px={6}>
            <Text>Hello there. It&apos;s nice to meet you.  I am Riv, your AI Medical Personnel.</Text>
          </Stack>
         
          <Stack p={6}  spacing={4}>
               {messages.map((message, index) => (
                 <Text key={index} alignSelf={message.sender === 'user' ? 'end' : 'start'}>
                   {message.content}
                 </Text>
               ))}
              {isLoading && <Text alignSelf="center">analyzing...</Text>}
            </Stack>
            </VStack>
            <Stack position="absolute" bottom={0}   p="6" w={{base:"full", md:"full"}}  bg="#fdf7ef">
            
            
            <InputGroup position={"relative"} bg="white" size='md'>

              <AutoResizingTextarea
              
                value={currentInput} 
                onChange={(e) => setCurrentInput(e.target.value)} 
                placeholder="Type your message here...">
              </AutoResizingTextarea>
              
               
              
            </InputGroup>
                <Button
                  bg="#5C7CFA" 
                  color="white" 
                  _hover={{ bg: "blue.600" }} 
                  _focus={{ boxShadow: "0 0 0 3px rgba(92, 124, 250, 0.6)" }}
                  onClick={sendMessage}
                  isLoading={isLoading}>
                    Send
                  </Button>
           </Stack>   
       </VStack>
      </Center>
    
    </Box>
  );
};
