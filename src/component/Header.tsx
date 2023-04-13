import { Flex, Box, Button, Spacer } from "@chakra-ui/react";
const Header = () => {
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
          >
            Login
          </Button>
        </Box>
      </Flex>
    </>
  );
};
export { Header };
