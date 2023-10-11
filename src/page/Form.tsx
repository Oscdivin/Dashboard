import {MdDriveFileRenameOutline} from "react-icons/md"
// import {GiPriceTag} from "react-icons/gi"

const Form = () => {
  return (
    <div className="w-full h-[650px] flex justify-center items-center">
     <div className="w-[80%] h-[85%] flex justify-center items-center">
     <div  className="w-[450px] h-[530px] bg-[#ddc9c9] border-2 border-[brown] max-w-md-[500px]"> 
            <div className=" flex justify-center items-center uppercase mt-3">create a product</div>
            <div className="ml-2 w-[430px]">
                <div className="mt-4 flex justify-center items-center">

            <div className="w-[40px] h-[40px] flex justify-center items-center text-[25px] bg-[blue]"><MdDriveFileRenameOutline/></div>
                    <input type="text" placeholder="product name" className="w-[410px] h-[40px] outline-none rounded-[5px]"/>
                </div>
                <div className="mt-4 flex justify-center items-center">

            <div className="w-[40px] h-[40px] flex justify-center items-center text-[25px] bg-[blue]"><MdDriveFileRenameOutline/></div>
                    <input type="text" placeholder="product price" className="w-[410px] h-[40px] outline-none rounded-[5px]"/>
                </div>
                <div className="mt-4 flex justify-center items-center">

            <div className="w-[40px] h-[40px] flex justify-center items-center text-[25px] bg-[blue]"><MdDriveFileRenameOutline/></div>
                    <input type="text" placeholder="product name" className="w-[410px] h-[40px] outline-none rounded-[5px]"/>
                </div>
                <div className="mt-4 flex justify-center items-center">

            <div className="w-[40px] h-[40px] flex justify-center items-center text-[25px] bg-[blue]"><MdDriveFileRenameOutline/></div>
                    <input type="text" placeholder="product name" className="w-[410px] h-[40px] outline-none rounded-[5px]"/>
                </div>



            </div>
        </div>
     </div>
    </div>
  )
}

export default Form