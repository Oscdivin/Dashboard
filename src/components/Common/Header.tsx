import { Link } from "react-router-dom"


const Header = () => {
  return (
<div>
<div className="fixed w-[80.5%] h-[10vh] flex  items-center bg-[#ffff] justify-between">
<div className="flex gap-[15px] w-[33%] items-center justify-center">
<Link to="/reviews">
    <ul className="text-[#000]">

    Reviews

    </ul>
  </Link>
    <ul className="text-[#000]">
<Link to="/statistics">
Statistics
  </Link>
    </ul>
    <ul>
<Link to="/products">
Products
  </Link>
    </ul>
    <ul>
<Link to="/setting">
SETTING
  </Link>
    </ul>

</div>
<div className="w-[10%]">
    <button className="py-[15px] px-[20px] bg-[#000] text-[#fff] rounded-[7px]">LogOut</button>
</div>
    </div>
</div>
  )
}

export default Header
