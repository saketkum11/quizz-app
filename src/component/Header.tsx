import { Flex, Box, Button, Spacer } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("signin");
  };
  return (
    <>
      <Flex p="1rem" bg="white" marginLeft="2px" borderEndStartRadius="1rem">
        <Spacer></Spacer>
        <Box>
          <Button
            bg="teal.400"
            color="white"
            borderRadius="20px"
            paddingBlock="0.5rem"
            paddingInline="1.5rem"
            textAlign="center"
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
      </Flex>
    </>
  );
};
export { Header };
