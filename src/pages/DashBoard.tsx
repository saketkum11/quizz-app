import { Flex, Box, SimpleGrid, Container } from "@chakra-ui/react";

const DashBoard = () => {
  return (
    <SimpleGrid columns={3} spacing={10} margin="1rem">
      <Box bg="white" height="500px"></Box>
      <Box bg="white" height="500px"></Box>
      <Box bg="white" height="500px"></Box>
    </SimpleGrid>
  );
};
export { DashBoard };
