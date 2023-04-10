import { Container, Flex, Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Container
        color={"white"}
        backgroundColor={"blackAlpha.700"}
        padding="1rem"
        maxWidth="100%"
        as="header"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Link to="/">Quizz-app</Link>
          </Box>
          <Box>
            <Flex gap="0.5rem">
              <Text> news india </Text>
              <Text> news india </Text>
              <Text> news india </Text>
              <Text> news india </Text>
              <Text> news india </Text>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </>
  );
};
export { Header };
