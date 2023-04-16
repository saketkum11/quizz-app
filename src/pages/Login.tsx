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
import { auth } from "./services";
const Login = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik);
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
          gap="2rem"
          bg="teal.400"
          color="white"
        >
          <Heading>Login</Heading>
          <FormControl>
            <FormLabel>Email ID</FormLabel>
            <Input placeholder="Email ID"></Input>
            <FormErrorMessage>Input value is worng</FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input color="white" placeholder="Password"></Input>
          </FormControl>
          <Button
            onClick={() => {
              console.log(auth);
            }}
            color="teal.400"
          >
            Login
          </Button>
          <NavLink to="/signup">Don't Have Account?</NavLink>
          <Link color="white">Guest User Credential</Link>
        </VStack>
      </VStack>
    </>
  );
};
export { Login };
