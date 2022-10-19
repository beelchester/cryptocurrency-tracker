import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { CoinList } from "../api";
import CoinContainer from "./CoinContainer";
const CoinTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const fetchcoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList());
    setCoins(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchcoins();
  }, []);
  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  return (
    <div className="px-16">
      <div className="mt-4 ">
        <h1 className="text-center text-[2.1rem] font-montserrat">
          Cryptocurrency Prices by Market Cap
        </h1>
      </div>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        className="bg-primaryBg border border-[#777777] w-full mt-4 h-[3.3rem] rounded px-4 placeholder:text-[#b4b4b4] placeholder:italic outline-none focus:border-white"
        placeholder="Search For a Cryptocurrency"
      />
      <div className="w-full h-14 bg-accent mt-6 rounded-t flex text-black font-semibold font-montserrat sm:text-sm text-[0.7rem] ">
        <div className=" sm:w-[40%] w-[25%]  h-full flex items-center  sm:pl-20 pl-6">
          <h1>Coin</h1>
        </div>
        <div className=" w-[20%] h-full flex items-center  pl-12 justify-center">
          <h1>Price</h1>
        </div>
        <div className="w-[20%] h-full flex items-center  pl-9 justify-center">
          <h1>24H Change</h1>
        </div>
        <div className=" sm:w-[20%] w-[35%]  h-full flex items-center  pr-7 justify-end">
          <h1>Market Cap</h1>
        </div>
      </div>
      {loading ? (
        <div
          role="status"
          className="h-full w-full flex justify-center items-center"
        >
          <svg
            aria-hidden="true"
            className="mr-2 w-12 h-12 mt-40 text-gray-200 animate-spin dark:text-gray-600 fill-accent"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            ></path>
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            ></path>
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <>
          <div className=" h-[35rem] overflow-y-scroll ">
            {handleSearch().map((row) => {
              return <CoinContainer key={row.id} coinData={row} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default CoinTable;
