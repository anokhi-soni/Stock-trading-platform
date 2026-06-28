import React, { useContext, useEffect, useState } from "react";
import { watchlist } from "../data/data";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Tooltip from '@mui/material/Tooltip';
import ListIcon from '@mui/icons-material/List';
import BarChartIcon from '@mui/icons-material/BarChart';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Grow } from '@mui/material';
import BuyWindow from "./BuyWindow";
import SellWindow from "./SellWindow";
import {GeneralContextProvider, GeneralContext} from "./GeneralContextProvider";
import WatchListCharts from '../Charts/WatchListCharts'
import axios from "axios";
import Loading from "../Loader/Loading";


const WatchList = () => {
  // ---------------------------- For Loading ----------------------
  const [loading, setLoading] = useState(true)

  // ----------------------- Finnhub API ---------------
  const [allStockData, setAllStock]= useState(null);
  const USMarket = ["AAPL", "INTC", "MSFT", "NVDA", "AMD", "AMZN", "GOOGL", "META", "TSLA", "NFLX"]
  
  useEffect(()=>{
    const fetchStocks = async()=>{

      const allStocks = await Promise.all(

          USMarket.map(async (stockName, idx)=>{
            try {
              const result = await axios.get(`http://localhost:3002/quote/${stockName}`, {withCredentials:true})
      
              return {
                name: stockName,
                price: result.data.c*94.38, // LTP
                percent: result.data.dp,
                isDown: result.data.d < 0 ? true: false,
              }
           
          } catch (error) {
            console.log(error);
          }
        })
      )
      console.log(allStocks);
      setAllStock(allStocks);
      setLoading(false);
  };
  fetchStocks();
  
  }
  , [])

  // ------------------ For Chart ---------------
  const possibleColors = allStockData?.map((currStock)=> `rgba(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*236)}, 1)`);
  const data = {
  labels: allStockData?.map((currStock)=> currStock?.name),
  datasets: [
    {
        label: 'Price ',
        data: allStockData?.map((currStock)=> currStock?.price),
        backgroundColor: possibleColors,
        borderColor: possibleColors,
        borderWidth: 1,
      },
    ],
  };

  if(loading){
    return <Loading text={"Loading"}/>
  }

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> 9 / 50</span>
      </div>

      <ul className="list">
        {allStockData?.map((stock, idx)=><WatchListItem stock={stock} index={idx} key={idx}/>)}
      </ul>

      <WatchListCharts passedData={data}/>

    </div>
  );
};

export default WatchList;

function WatchListItem({stock, index}){
  // const [isHover, setIsHover] = useState(false);
  // function handleMouseEnter(){
  //   setIsHover(true);
  // }
  // function handleMouseLeave(){
  //   setIsHover(false);
  // }

  // const [buyBtn, setBuy] = useState(false);
  // const [sellBtn, setSell] = useState(false);
  // function handleBuyClick(){
  //   setBuy(true);
  //   setSell(false);
  // }

  // function handleSellClick(){
  //   setSell(true);
  //   setBuy(false);
  // }

  // function handleCancelClick(){
  //   setBuy(false);
  //   setSell(false);
  // }
  
  return(
    <li>
      <div className="item">
        <p className={stock?.isDown ? "down" : "up"}>{stock?.name}</p>

        <div className="item-info">
          <span>{stock?.percent?.toFixed(2)}%</span>
          <span>
            {stock?.isDown ? 
              <KeyboardArrowDownIcon className={stock?.isDown ? "down" : "up"}/> 
              : 
              <KeyboardArrowUpIcon className={stock?.isDown ? "down" : "up"}/>
            }
            </span>
          <span>{stock?.price?.toFixed(2)}</span>
        </div>

      </div>
      <WatchListAction id={index} stock={stock}/>
      {/*  id={index}  */}
      {/* buyFunc={handleBuyClick} sellFunc={handleSellClick} */}
      {/* {buyBtn ? <BuyWindow cancleFunc={handleCancelClick}/> : null}
      {sellBtn ? <SellWindow cancleFunc={handleCancelClick}/> : null} */}
    </li>
  )
}

function WatchListAction({id, stock}){
  const buyFunctions = useContext(GeneralContext);
  return (
    <span key={id} className="actions">
      <span>
        <Tooltip title="Buy (B)" TransitionComponent={Grow}>
          <button className="buy" onClick={()=>{buyFunctions.openBuyWindow(id, stock)}}>B</button> 
        </Tooltip>
      </span>
      <span>
        <Tooltip  title="Sell (S)" TransitionComponent={Grow}>
          <button className="sell" onClick={()=>{buyFunctions.openSellWindow(id, stock)}}>S</button>
        </Tooltip>
      </span>
      <span><Tooltip  title="Sell (S)" TransitionComponent={Grow}><button className="actionBtn"><ListIcon /></button></Tooltip></span>
      <span><Tooltip  title="Sell (S)" TransitionComponent={Grow}><button className="actionBtn"><BarChartIcon /></button></Tooltip></span>
      <span><Tooltip  title="Sell (S)" TransitionComponent={Grow}><button className="actionBtn"><DeleteIcon /></button></Tooltip></span>
      <span><Tooltip  title="Sell (S)" TransitionComponent={Grow}><button className="actionBtn"><MoreHorizIcon /></button></Tooltip></span>
    </span>
  )
}