import { Routes, Route } from "react-router-dom";
import {
  DashBoard,
  Home,
  HomeLayout,
  LeaderBoard,
  Login,
  NotFound,
  Signup,
} from "../pages/services";
const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="signin" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="leaderboard" element={<LeaderBoard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
export { MyRoutes };
