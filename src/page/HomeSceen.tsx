// import Header from "../components/Common/Header"

import { readTask } from "../api/API";
import { useState, useEffect, useContext } from "react";
import Card from "./Home/Card";
import { contextState } from "../Global/globalState";
import Products from "./Products";
const HomeSceen = () => {
  const { globalState } = useContext(contextState);
  const [state, setState] = useState<any>([]);
  // const [stateI, setStateI] = useState<any>([])

  useEffect(() => {
    readTask().then((res: any) => {
      return setState(res);
    });
    // readDoneTask().then((res: any) => {
    //     return setStateI(res)
    // })
  }, []);

  return (
    <div>
      <div className=" bg-gray-200 min-h-[100vh]  flex justify-center items-center flex-col w-[100%]">
        <Card title="Todo Task" data={state} icon />
      </div>
      {globalState && (
        <div>
          <Products />
        </div>
      )}
    </div>
  );
};

export default HomeSceen;
