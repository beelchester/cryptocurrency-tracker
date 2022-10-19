import React from "react";
import CoinChart from "./CoinChart";
import { numberWithCommas } from "./CoinContainer";

const Popup = ({ coinData, setPopup }) => {
  return (
    <div className=" bg-[#000000a9] backdrop-blur-md fixed top-0 left-0 w-full h-[100%] flex justify-center items-center">
      <div className="flex flex-col  bg-primaryBg w-[80%] h-[42rem] rounded-lg">
        <div className=" w-full h-[40%] flex  ">
          <div className=" h-full w-[50%] flex flex-col items-center justify-center mr-6">
            <img src={coinData.image} width={"130rem"} />
            <h1 className="my-3 font-bold text-[3.2rem] font-montserrat ">
              {coinData.name}
            </h1>
          </div>
          <div className=" h-full w-[50%] flex flex-col  justify-center">
            <div className="flex ">
              <h1 className="font-semibold font-montserrat  ml-8 text-[1.6rem]">
                Rank:{" "}
              </h1>
              <h1 className="font-montserrat text-[1.6rem] ml-4 ">
                {" "}
                {coinData.market_cap_rank}
              </h1>
            </div>
            <div className="flex ">
              <h1 className="font-semibold font-montserrat text-[1.6rem] ml-8">
                Current Price:
              </h1>
              <h1 className="font-montserrat text-[1.6rem] ml-4 ">
                $ {numberWithCommas(coinData.current_price.toFixed(2))}
              </h1>
            </div>
            <div className="flex ">
              <h1 className="font-semibold font-montserrat text-[1.6rem] ml-8">
                Market Cap:{" "}
              </h1>
              <h1 className="font-montserrat text-[1.6rem] ml-4 ">
                ${" "}
                {numberWithCommas(coinData.market_cap.toString().slice(0, -6))}M
              </h1>
            </div>
          </div>
          <div className=" w-8 flex flex-col ">
            <button
              className="text-2xl text-accent mt-4 mr-4 font-bold"
              onClick={setPopup}
            >
              X
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="h-5 w-[90%] mt-[-1rem] border-[#8d8d8d]  " />
        </div>
        <div className="w-full h-[60%] ">
          <CoinChart coin={coinData} />
        </div>
      </div>
    </div>
  );
};

export default Popup;
