import React, { useState, useEffect } from "react";
import HoldingsChart from "../Charts/HoldingsChart";
// import { holdings } from "../data/data"; // since we're using the database's data, we no more need this
import Loading from "../Loader/Loading";
import axios from "axios";

const Holdings = () => {
  // const [allHoldings, setAllHoldings] = useState([]);

  const [loading, setLoading] = useState(true)

  const [holdingsInfo, setHoldingsInfo] = useState({});
  useEffect(()=>{
      axios.get("http://localhost:3002/allHoldings", {withCredentials:true})
      .then((res)=>{
        console.log(res.data);
        const pnlPercent =  (res.data.pnl/(res.data.totalInvestement))*100

        const profitClass = pnlPercent>0 ? "profit" : "loss"

        setHoldingsInfo({...res.data, pnlPercent, profitClass : profitClass})
        setLoading(false);

      })
      .catch((err)=>console.log(err));

  }, []);

  const Labels = holdingsInfo?.allHoldings?.map((currStock)=> currStock.name); // This Labels array conatins name each bar of the chart, so we're filling it with the name of holdings

  const dataSet = holdingsInfo?.allHoldings?.map((currStock)=> currStock.price); // This dataSets array contains the numerical data using which it creates the chart, and since we want to create a chart to show which stock holds more value, we'll store the price of each stock (name) in it 
  
  const data = {
    labels: Labels,
    datasets: [
      {
        label: "Stock Price",
        data: dataSet,
        backgroundColor: 'rgba(255, 99, 132, 1)',
      }
    ]
  };

  if(loading){
    return <Loading text={"Loading"}/>
  }

  return (
    <>
      <h3 className="title">Holdings ({holdingsInfo?.totalHoldings})</h3>
      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {holdingsInfo?.allHoldings?.map((stock)=>{
            // Some Calculations:
            // const currValue = stock.price*stock.qty;
            const isProfit = stock.currValue-stock.avg*stock.qty >= 0 ? true : false;// boolean variable
            const profitClass = isProfit ? "profit" : "loss"; // for profit, color will be green, for loss color will be red (css has already been written)
            const dayClass =  (stock.dayChange <0) ? "loss" : "profit";// for profit, color will be green, for loss color will be red (css has already been written)
            // const LTP = stock.price;
            const netDay = ((stock.ltp-stock.avg)/stock.avg)*100;
            const netDayProfit = (netDay>=0)? "profit" : "loss"
            // const
            return (
              <tr key={stock}>
                <td>{stock.name}</td>
                <td>{stock.qty?.toFixed(2)}</td>
                <td>{stock.avg?.toFixed(2)}</td>
                <td>{stock.ltp?.toFixed(2)}</td>
                <td className={profitClass} >{stock.currValue?.toFixed(2)}</td>
                <td className={profitClass}>{stock.pnl?.toFixed(2)}</td>
                <td className={netDayProfit}>{netDay?.toFixed(2)}</td>
                <td className={dayClass}>{stock.dayChangePercent?.toFixed(2)}%</td>
              </tr>
            )
          })}
        </table>
      </div>
      <div className="row">
        <div className="col">
          <h5>
            {(holdingsInfo?.totalInvestement/1000)?.toFixed(2)}k<span></span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">

          <h5>
            {(holdingsInfo.currValue/1000)?.toFixed(2)}k.<span></span>{" "}
          </h5>
          <p>Current value</p>
        </div>

        <div className="col">
          <h5 className={holdingsInfo?.profitClass}>{(holdingsInfo?.pnl/100)?.toFixed(2)}k {holdingsInfo?.pnlPercent > 0 ? (+holdingsInfo?.pnlPercent?.toFixed(2) ) : (-holdingsInfo?.pnlPercent?.toFixed(2))}%</h5>
          <p>P&L</p>
        </div>
      </div>

      {/* This displays the chart */}
      <HoldingsChart passedData={data}/> {/* Passing the data to the chart component */}
    </>
  );
};

export default Holdings;
