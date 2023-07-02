import { Outlet } from "react-router-dom";
import MyNavBar from "../shared/MyNavBar/MyNavBar";
import MyFooter from "../shared/MyFooter/MyFooter";

const MainLayout = () => {
  return (
    <>
      <MyNavBar />
      <Outlet />
      <MyFooter />
    </>
  );
};

export default MainLayout;
