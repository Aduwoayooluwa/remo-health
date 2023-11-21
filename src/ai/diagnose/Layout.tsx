import { Box, Container } from "@chakra-ui/react";



const Layout = ({ children }: any) => (
  <Container pt={20} h="100vh" bg="#fdf7ef" maxW="container.md">
    
    <Box padding="4" bg="#fdf7ef" maxH="100vh">
      {children}
    </Box>
  </Container>
);

export default Layout;
