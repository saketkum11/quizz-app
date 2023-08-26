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
import { useState, FormEvent } from "react";
import { SignUpTypes } from "../allTypes/formTypes";
import { useAuth } from "../context/authContext";
const Signup = () => {
  const { createNewAccount } = useAuth();
  const DataBase: SignUpTypes = {
    email: " ",
    password: "",
  };

  const [formData, setFormData] = useState(DataBase);
  return (
    <>
      <VStack
        mx="auto"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <VStack
          maxW="300px"
          p="3rem"
          borderRadius="0.5rem"
          border="2px solid "
          gap="1rem"
          bg="teal.400"
          color="white"
          as="form"
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            createNewAccount(formData);
          }}
        >
          <Heading>SignUp</Heading>

          <FormControl isRequired>
            <FormLabel>Email ID</FormLabel>
            <Input
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={(event) =>
                setFormData((prev) => {
                  return { ...prev, email: event.target.value };
                })
              }
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
              onChange={(event) =>
                setFormData((prev) => {
                  return { ...prev, password: event.target.value };
                })
              }
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
