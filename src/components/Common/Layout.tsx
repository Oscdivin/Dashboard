
import MainSlider from "../Static/MainSlider"
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import Header from "./Header";

const Layout = () => {
  const toggle = useSelector((state: any) => state.toggleState);
  return (
    <div className="w-fill h-[100vh]">
      <Header/>
    <div className="flex">
      <MainSlider />
      <div className="w-[100vw] flex justify-end ">
        <div
          className={`
          pl-0 transition-all duration-300
          `}
          style={{
            width: `${toggle ? "calc(100vw - 70px)" 
            : "calc(100vw - 160px"}`,
            transition: "all 350m",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
            </div>
  );
};

export default Layout;