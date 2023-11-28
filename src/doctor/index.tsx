"use client"
// pages/index.js or any other page
import { Stack, Text, Box, VStack, Card, CardHeader, CardBody, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup } from "@chakra-ui/react";
import Layout from "./Layout";
import Image from "next/image";
import StethoscopeImg from "@/assets/gifs/stethoscope.gif"
import UserAppointments from "./addons/Users";
import useUserStore from "@/lib/store";


const HomePage = () => {
    const { user } = useUserStore();
    const fullName = user?.first_name + " " + user?.last_name;
    
  return (
    <Layout>
          <Text textColor="#5C7CFA" fontWeight={"bold"} fontSize="3xl">Welcome {fullName}! </Text>
          <Text w="600px" fontWeight={"light"} mt={2}>Welcome, Doctor! Your insights and expertise are vital to our community. Let&apos;s make a difference in our patients&apos; lives today.</Text>
          
          <Stack position="relative" h="full">
              <VStack bg="" position={"absolute"} overflowY={"scroll"} maxHeight="470px" left={0} top={20} css={{
                  scrollBehavior: 'smooth',
                    '&::-webkit-scrollbar': {
                        width: '2px',
                    },
                    '&::-webkit-scrollbar-track': {
                        width: '2px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#5C7CFA',
                        borderRadius: '24px',
                    },
                    }}>
                  <Card  bg="gray.100" >
                      <CardHeader position={"fixed"} fontWeight={"bold"} zIndex={10} bg="gray.100">Today&apos;s appointments</CardHeader>

                        <CardBody mt={10} >
                            <UserAppointments />
                        </CardBody>
                    </Card>
              </VStack>
              
              <Box position="absolute" transform="rotate(-50deg)" right={10}>
                  <Image src={StethoscopeImg} width={150} height={200} alt="stethoscope remoHealth" />
              </Box>

              <Box right={0} top={40} position="absolute">
                  {/* revenue card */}
                    <Card bg="gray.100" height={"150px"} w="500px">
                    {/* <CardHeader fontWeight="bold">Revenue</CardHeader> */}
                    <CardBody>
                        <Stat>
                        <StatLabel>Total Revenue</StatLabel>
                        <StatNumber>$32,400</StatNumber>
                        <StatHelpText>
                            <StatArrow type="increase" />
                            23.36%
                        </StatHelpText>
                        <Text fontSize="sm">Compared to last month</Text>
                        </Stat>
                       
                    </CardBody>
                    </Card>

                  {/* analytics */}
                  <Card px={6} w="500px" bg="gray.100" mt={5} height={"220px"} >
                      <CardHeader fontWeight="bold">Analytics</CardHeader>
                        <StatGroup>
                        <Stat>
                            <StatLabel>Profile Visits</StatLabel>
                            <StatNumber>1,200</StatNumber>
                            {/* <Text fontSize="sm">Number of times your profile was viewed</Text> */}
                        </Stat>
                        <Stat>
                            <StatLabel>Patient Visits</StatLabel>
                            <StatNumber>350</StatNumber>
                            {/* <Text fontSize="sm">Number of patient appointments</Text> */}
                        </Stat>
                        </StatGroup>
                    </Card> 

                   
              </Box>
            
              
               
        </Stack>
    </Layout>
  );
};

export default HomePage;
