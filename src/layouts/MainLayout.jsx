import { Outlet } from "react-router-dom";
import MyNavBar from "../shared/MyNavBar/MyNavBar";

const MainLayout = () => {
  return (
    <>
      <MyNavBar />
      <Outlet />
    </>
  );
};

export default MainLayout;
