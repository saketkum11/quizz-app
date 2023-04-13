import { Flex, Box, Heading, Spacer, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
const SideBar = () => {
  return (
    <>
      <Flex
        flexDirection="column"
        position="sticky"
        top="0.5"
        gap="10px"
        marginTop="50px"
      >
        <Heading color="teal.400">
          <NavLink to="/">Quiz App</NavLink>
        </Heading>
        <Box>
          <NavLink to="/">Home</NavLink>
        </Box>
        <Box>
          <NavLink to="dashboard">Quiz</NavLink>
        </Box>
        <Box>
          <NavLink to="leaderboard"> LeaderBoard </NavLink>
        </Box>
        <Spacer />

        <Button>Login</Button>
      </Flex>
    </>
  );
};
export { SideBar };
