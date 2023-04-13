import { Flex, Box, Spacer, ListItem, List } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex bg="whiteAlpha.600" padding="1.5rem">
      <Box>Code By Saket Kumar</Box>
      <Spacer></Spacer>
      <List>
        <Flex gap="1rem" alignItems="center">
          <ListItem>FaceBook</ListItem>
          <ListItem>Instgram</ListItem>
          <ListItem>Twitter</ListItem>
          <ListItem>LinkedIn</ListItem>
        </Flex>
      </List>
    </Flex>
  );
};
export { Footer };
