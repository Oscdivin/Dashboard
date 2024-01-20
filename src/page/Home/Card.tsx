import React from "react";
interface iData {
  title?: string;
  icon?: boolean;
  input?: boolean;
  data?: [];
}

const Card: React.FC<iData> = ({}) => {
  return (
    <div>
      <div className="flex gap-10 flex-wrap justify-center items-center w-[100%]  min-h-[100vh] max-sm:w-screen">
        <div className="text-[#000] w-[35%] h-[250px] bg-[#fff] rounded-[7px] flex justify-center items-center flex-wrap">
          <div className="text-[#000] w-[84%] h-[200px]  rounded-[7px] flex justify-between items-center flex-wrap">
            <div className="text-[#000] w-[100px] h-[100px] bg-[orange] rounded-[50%] flex-wrap"></div>
            <div className="text-[#000] w-[250px] h-[100px] bg-[orange]"></div>
          </div>
        </div>

        <div className="text-[#000] w-[35%] h-[250px] bg-[#fff] rounded-[7px] flex justify-center items-center flex-wrap">
          <div className="text-[#000] w-[84%] h-[200px]  rounded-[7px] flex justify-between items-center flex-wrap">
            <div className="text-[#000] w-[100px] h-[100px] bg-[orange] rounded-[50%] flex-wrap"></div>
            <div className="text-[#000] w-[250px] h-[100px] bg-[orange]"></div>
          </div>
        </div>

        <div className="text-[#000] w-[35%] h-[250px] bg-[#fff] rounded-[7px] flex justify-center items-center flex-wrap">
          <div className="text-[#000] w-[84%] h-[200px] rounded-[7px] flex justify-between items-center flex-wrap">
            <div className="text-[#000] w-[100px] h-[100px] bg-[orange] rounded-[50%] flex-wrap"></div>
            <div className="text-[#000] w-[250px] h-[100px] bg-[orange]"></div>
          </div>
        </div>
        <div className="text-[#000] w-[35%] h-[250px] bg-[#fff] rounded-[7px] flex justify-center items-center flex-wrap">
          <div className="text-[#000] w-[84%] h-[200px] rounded-[7px] flex justify-between items-center flex-wrap">
            <div className="text-[#000] w-[100px] h-[100px] bg-[orange] rounded-[50%] flex-wrap"></div>
            <div className="text-[#000] w-[250px] h-[100px] bg-[orange]"></div>
          </div>
        </div>
        <div className="text-[#000] w-[35%] h-[250px] bg-[#fff] rounded-[7px] flex justify-center items-center flex-wrap">
          <div className="text-[#000] w-[84%] h-[200px] rounded-[7px] flex justify-between items-center flex-wrap">
            <div className="text-[#000] w-[100px] h-[100px] bg-[orange] rounded-[50%] flex-wrap"></div>
            <div className="text-[#000] w-[250px] h-[100px] bg-[orange]"></div>
          </div>
        </div>

        <div className="text-[#000] w-[35%] h-[250px] bg-[#fff] rounded-[7px] flex justify-center items-center flex-wrap">
          <div className="text-[#000] w-[84%] h-[200px]  rounded-[7px] flex justify-between items-center flex-wrap">
            <div className="text-[#000] w-[100px] h-[100px] bg-[orange] rounded-[50%] flex-wrap"></div>
            <div className="text-[#000] w-[250px] h-[100px] bg-[orange]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
