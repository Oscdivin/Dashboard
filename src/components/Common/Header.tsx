import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-center w-[100%] h-[10vh]  top-0 sticky z-30 bg-[#fff]">
      <div className="w-[95%] h-[10vh] flex  items-center  justify-between max-sm:flex">
        <div className="flex gap-[15px] w-[33%] ">
          <Link to="/">
            <ul className="text-[#000] max-sm:flex">Reviews</ul>
          </Link>

          <ul className=" max-sm:hidden">
            <Link to="/setting">SETTING</Link>
          </ul>
        </div>
        <div className="">
          <button className="py-[15px] px-[20px] bg-[#000] text-[#fff] rounded-[7px]">
            LogOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
