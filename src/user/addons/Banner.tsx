import { Box, Text, Image, useMediaQuery, HStack } from '@chakra-ui/react';
const imgUrl = `https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`


const Banner = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  return (
    <HStack position="relative" textAlign="center" bg="#5C7CFA" height={isLargerThan768 ? '300px' : '200px'} overflow="hidden">
      {/* <Image src={imgUrl} alt="Doctor"  /> */}
      <Box  color="white">
        <Text fontSize={isLargerThan768 ? '2xl' : 'xl'} fontWeight="bold" bg="rgba(0, 0, 0, 0.5)" p={3}>
          Book an Appointment Today!
        </Text>
      </Box>
    </HStack>
  );
};

export default Banner;
