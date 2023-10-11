import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  BsLayoutSidebarInsetReverse,
  BsLayoutSidebarInset,
} from "react-icons/bs";
// import { BiHomeSmile, BiCartAlt } from "react-icons/bi";
import { changeState } from "../../Global/globalState";
const MainSlider = () => {
const dispatch = useDispatch();
  const toggle = useSelector((state: any) => state.toggleState);
  const onChangeState = () => {
    dispatch(changeState(!toggle));
  };
  return (
  <div>
          <div    className={` h-[100vh] bg-[orange] fixed transition-all duration-300 overflow-hidden z-10
           w-[12%] flex justify-center items-center`}
        style={{
          width: `${!toggle ? "160px" : "70px"}`,
          transition: "all 350m",
        }} >
<div className="w-[90%] h-[95vh] flex flex-col justify-between">

<div className="w-full h-[30px] flex items-center justify-center" >
    <Link to="/">
    <span className="text-[#fff] text-[20px] flex items-center">TenDay</span>
    </Link>
</div>
<div 
        className="w-full justify-center flex">
          {!toggle ? (
            <BsLayoutSidebarInsetReverse
              className="text-[25px] text-gray-200 hover:scale-[1.04] hover:cursor-pointer duration-300 transition-all "
              onClick={onChangeState}
            />
          ) : (
            <BsLayoutSidebarInset
              className="text-[25px] text-white hover:scale-[1.04] hover:cursor-pointer duration-300 transition-all "
              onClick={onChangeState}
            />
          )}
        </div>
<div className="w-full h-[420px] flex flex-col" >
<Link to="/reviews">
  <span className="w-full h-[50px] bg-[none] 
text-[#ffff] items-center flex hover:cursor-pointer">Reviews</span>
</Link>
<Link to="/statistics"><span className="w-full h-[50px]
text-[#ffff] items-center flex">Statistics</span></Link>
<Link to="/products">

<span className="w-full h-[50px] bg-[none] 
text-[#ffff] items-center flex">Products</span>
</Link>
</div>
<div className="w-full h-[50px] flex items-center">
  <Link to="/setting">
<span className="text-[#fff] text-[13px] flex items-center">SETTING</span>
  </Link>
</div>
</div>
        </div>
  </div>
  )
}
export default MainSlider