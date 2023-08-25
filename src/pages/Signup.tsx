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
import { Form, NavLink } from "react-router-dom";
import React, { FormEvent, ReactElement, useState } from "react";
import { SignUpTypes } from "../allTypes/formTypes";
const Signup = () => {
  const [formData, setFormData] = useState<SignUpTypes>({
    email: "",
    password: "",
  });

  return (
    <>
      <VStack mx="auto" minH="600px" justifyContent="center" h="100vh">
        <VStack
          w={{ base: "80%", md: "400px" }}
          p="3rem"
          borderRadius="0.5rem"
          border="2px solid "
          gap="1rem"
          bg="teal.400"
          color="white"
          as="form"
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
          }}
        >
          <Heading>SignUp</Heading>

          <FormControl isRequired>
            <FormLabel>Email ID</FormLabel>
            <Input
              placeholder="Email ID"
              name="email"
              value={formData.email}
              onChange={(event) => console.log(event.target.value)}
            ></Input>
            <FormErrorMessage>Input value is worng</FormErrorMessage>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              color="white"
              placeholder="Password"
              name="password"
              value={formData.password}
            ></Input>
          </FormControl>
          <Button color="teal.400" type="submit">
            SignUp
          </Button>

          <NavLink to="/signin">Already Have account?</NavLink>
          <Link color="white">Guest User Credential</Link>
        </VStack>
      </VStack>
    </>
  );
};
export { Signup };
