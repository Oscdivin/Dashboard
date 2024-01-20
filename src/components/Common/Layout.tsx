import { Outlet } from "react-router-dom";
import MainSlider from "../Static/MainSlider";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="flex">
      <MainSlider />
      <div className="flex-1">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
