import { useState } from "react";
import Popup from "./Popup";
export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const CoinContainer = ({ coinData }) => {
  const [popup, setPopup] = useState(false);
  function clickHandler() {
    setPopup((prev) => !prev);
  }
  const profit = coinData.price_change_percentage_24h > 0;
  return (
    <>
      <button
        onClick={clickHandler}
        className="hover:bg-[#0f1114] hover:cursor-pointer w-full h-[5.9rem] rounded-t flex  border-b border-[#a9a9a99f] "
      >
        <div className="sm:flex hidden justify-center w-14 h-full   items-center">
          <img src={coinData.image} className="w-14 h-14 " />
        </div>
        <div className=" sm:w-[40%] w-[20%] h-full flex flex-col  justify-center items-start  px-5 ">
          <h1 className=" sm:text-2xl text-[0.8rem]">
            {coinData.symbol.toUpperCase()}
          </h1>
          <h1 className="text-[#A9A9A9] sm:text-md  text-[0.8rem]">
            {coinData.name}
          </h1>
        </div>
        <div className=" sm:w-[20%] w-[35%] h-full flex items-center just px-5 justify-center">
          <h1 className="sm:text-[0.95rem] text-[0.7rem]  ">
            $ {numberWithCommas(coinData.current_price.toFixed(2))}
          </h1>
        </div>
        <div
          className={`w-[20%] h-full flex items-center just px-5 justify-center ${
            profit ? "text-[#0ECB81]" : "text-[#fc3636]"
          }`}
        >
          <h1 className="sm:text-[0.95rem] text-[0.7rem] ">
            {profit && "+"}
            {coinData.price_change_percentage_24h.toFixed(2)}
          </h1>
        </div>
        <div className=" sm:w-[20%] w-[35%] h-full flex items-center just px-5 justify-end">
          <h1 className="sm:text-[0.95rem] text-[0.7rem] ">
            $ {numberWithCommas(coinData.market_cap.toString().slice(0, -6))}M
          </h1>
        </div>
      </button>
      {popup && <Popup coinData={coinData} setPopup={clickHandler} />}
    </>
  );
};

export default CoinContainer;
