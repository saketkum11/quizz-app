import { Routes, Route } from "react-router-dom";
import { HomeLayout } from "../layout/HomeLayout";
import { Home } from "../pages/Home";
import NotFound from "../pages/NotFound";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="signin" element={<Home />} />
        <Route path="signup" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
export { MyRoutes };
