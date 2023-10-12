
import * as yup from "yup"
import pix from "../assets/bmw-m4-need-for-speed.1920x1080.mp4"
import {yupResolver} from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"

import useUser from "../Global/jotai";
import { createTask } from "../api/API";
import { contextState } from '../Global/globalState'
import { useContext } from "react";

const Products = () => {
  const { globalState, setGlobalState } = useContext(contextState)

console.log(globalState);


  const onToggle = () => {
    setGlobalState!(false)
}

  const schema = yup.object({
    task: yup.string().required(),
    yourtask: yup.string().required(),
  })

  const {register, handleSubmit} = useForm({
    resolver: yupResolver(schema),
  })

  const onHandleSubmit = handleSubmit(async (data:any) => {
    console.log("handle sumbit",data)
    createTask({
      task: data.task,
      yourtask: data.yourtask,
      completed: false
    }).then(()=>{
      setState("/")
      // navigate("/")
    })
  })
  const   [state, setState] = useUser();
  console.log(state)
  return (
    <div  className=" bg-gray-200 h-[100vh] flex justify-center flex-wrap items-center">

<div className="text-[#000] w-[35%] min-h-[25vh] bg-[#fff] rounded-[7px] flex
 justify-center items-center flex-wrap">
       <div className="text-[#000] w-[84%] min-h-[200px]  rounded-[7px] flex justify-between items-center flex-wrap">
       <div className="w-[100px] h-[100px] rounded-[50%] flex-wrap">
   <video src={pix} className="w-[100px] h-[100px] rounded-[50%] object-cover" />
   </div>
   <form className="text-[#000] w-[250px] h-[140px] bg-[] 
   flex flex-col justify-between items-center rounded-[7px] "  
    onSubmit={onHandleSubmit}>
   <input type="text" className="bg-[] w-[100%]  rounded-[7px] h-[30px] 
   px-3 outline-none border-[orange] border-[1px]" 
   placeholder="input your Task" {...register("task")}/>
   <input type="text" className="bg-[] w-[100%]  rounded-[7px] h-[30px] 
   px-3 outline-none border-[orange] border-[1px]" 
   placeholder="your Task" {...register("yourtask")}/>
   <button className="py-[15px] px-[20px] bg-[#000]
    text-[#fff] rounded-[7px]" type="submit"
    onClick={onToggle}
    >Add Task</button>
   </form>
   </div>
    </div>
    </div>
  )
}

export default Products