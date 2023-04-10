import { Header } from "../component/Header";
import { Outlet } from "react-router-dom";
const HomeLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export { HomeLayout };
