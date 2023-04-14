import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  VStack,
  Heading,
  Link,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Formik, Field, useFormik } from "formik";
const Signup = () => {
  return (
    <>
      <VStack
        as="form"
        mx="auto"
        minH="600px"
        justifyContent="center"
        h="100vh"
      >
        <VStack
          w={{ base: "80%", md: "400px" }}
          p="3rem"
          borderRadius="0.5rem"
          border="2px solid "
          gap="1rem"
          bg="teal.400"
          color="white"
        >
          <Heading>SignUp</Heading>
          <FormControl>
            <FormLabel>FirstName</FormLabel>
            <Input placeholder="FirstName"></Input>
            <FormErrorMessage>Input value is worng</FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel>LastName</FormLabel>
            <Input placeholder="LastName"></Input>
            <FormErrorMessage>Input value is worng</FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel>Email ID</FormLabel>
            <Input placeholder="Email ID"></Input>
            <FormErrorMessage>Input value is worng</FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input color="white" placeholder="Password"></Input>
          </FormControl>
          <Button color="teal.400">SignUp</Button>
          <NavLink to="/signin">Already Have account?</NavLink>
          <Link color="white">Guest User Credential</Link>
        </VStack>
      </VStack>
    </>
  );
};
export { Signup };
