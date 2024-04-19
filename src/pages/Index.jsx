import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Container, Heading, useToast } from "@chakra-ui/react";
import { FaSignInAlt } from "react-icons/fa";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleLogin = () => {
    // Here you would handle the login logic, possibly calling a backend API
    toast({
      title: "Login Attempt",
      description: "This would normally be a backend API call.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent>
      <Box width="100%" p={4}>
        <Heading as="h1" size="xl" textAlign="center" mb={6}>
          Admin Dashboard Login
        </Heading>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="password" isRequired mt={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <Button leftIcon={<FaSignInAlt />} colorScheme="blue" width="full" mt={4} onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Index;
