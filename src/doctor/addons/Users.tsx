import React from 'react';
import { Box, List, ListItem, Avatar, Text, HStack, Stack, VStack, Divider } from '@chakra-ui/react';
import { getFormattedTime } from '@/utils/utils';
import { useGetAppointments } from '../helper';

const users = [
  { name: 'John Doe', avatarUrl: 'https://bit.ly/dan-abramov', cancelled: false, tag: "consultation" },
  { name: 'Jane Smith', avatarUrl: 'https://bit.ly/kent-c-dodds', cancelled: true, tag: "emergency" },
  { name: 'Alice Johnson', avatarUrl: 'https://bit.ly/tioluwani-kolawole', cancelled: false, tag: "checkup" },
  { name: 'Mark Brown', avatarUrl: 'https://bit.ly/prosper-baba', cancelled: false, tag: "consultation" },
  { name: 'Emma Wilson', avatarUrl: 'https://bit.ly/code-beast', cancelled: true, tag: "emergency" },
  { name: 'Lucas Garcia', avatarUrl: 'https://bit.ly/ryan-florence', cancelled: false, tag: "follow-up" }
];


const UserAppointments = () => {
  const { allAppointments } = useGetAppointments();

  return (
    <Box w={"300px"} >
      <List spacing={4}>
        {allAppointments.map((user, index) => (
          <ListItem pt="6" key={user?.id} >
                <HStack justify={"space-between"}>
                        <HStack>
                        <Avatar size={"sm"} name={user?.patient_name} src={user?.avatarUrl} />
                            
                            <Stack >
                                <Text fontWeight={"bold"}>{user?.patient_name}</Text>
                            <Text mt={-2} fontSize={"sm"}  textColor="gray.500">{user?.tag?.toUpperCase()}</Text>
                            </Stack>
                                
                        </HStack>
                

                    <HStack>
                        <Box>{user?.cancelled ? (
                            <Stack bg="red.300" textColor="white" fontWeight={"bold"} w="20px" h="20px" justify="center" textAlign={"center"} borderRadius={100}>y
                                <Text  fontSize={"sm"} textColor="white">x</Text>
                            </Stack>)
                            : (<Stack bg="green.300" textColor="white" fontWeight={"bold"} w="20px" h="20px" justify="center" textAlign={"center"} borderRadius={100}>y
                                <Text fontSize={"sm"} textColor="white">✔</Text>
                            </Stack>)
                        }</Box>
                        <Text fontWeight={"bold"} fontSize={"lg"}>{getFormattedTime(user?.timeOfAppointment)}</Text>
                </HStack>
                </HStack>

                <Box my={3}>
                    <hr />
                </Box>
                
                <Divider orientation="horizontal" />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default UserAppointments;
