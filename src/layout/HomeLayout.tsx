import { Header } from "../component/Header";
import { Outlet } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";
import { Footer, SideBar } from "../pages/services";
const HomeLayout = () => {
  return (
    <>
      <Grid templateColumns="repeat(6,1fr)">
        <GridItem
          colSpan={1}
          as="aside"
          minHeight="100"
          bg="white"
          color="black"
          padding="20px"
        >
          <SideBar />
        </GridItem>
        <GridItem colSpan={5} as="main" bg="blackAlpha.400">
          <Header />
          <Outlet />
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
};
export { HomeLayout };
