import React, { useEffect, useState } from "react";
import "./components.css"
import "../index.css"
import axios from "axios"
import Loading from "../Loader/Loading";
const Summary = ({currUser}) => {
  const [loading, setLoading] = useState(true);
  const [userBalance, setUserBalance] = useState(null);
  const [holdingsInfo, setHoldingInfo] = useState({});
  useEffect(()=>{
    const getUserData = async ()=>{
      try {
        const responseBalance = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/balance`, {withCredentials:true});
        const {message, success, balance} = responseBalance.data;
        console.log(responseBalance.data);
        if(success){
          console.log(message);
          setUserBalance(balance);

        } else console.log(message);

        const responseAllHoldings = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/allHoldings`, {withCredentials:true});
        const {totalHoldings, currValue, pnl, openingBalance} = responseAllHoldings.data;
        const pnlPercent =  (pnl/(openingBalance-userBalance))*100 
        const profitClass = pnl > 0 ? "profit" : "loss"
        console.log(profitClass);
        setHoldingInfo({totalHoldings, currValue, pnl, pnlPercent, openingBalance, profitClass: profitClass})
        console.log(responseAllHoldings.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    getUserData();
  }, [])




  if(loading){
    return(<Loading text={"Loading.."}/>)
  }


  return (
    <>
      <div className="username">
        <h6>Hi, {currUser}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          < p className="summaryPara">Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>{(userBalance/1000).toFixed(2)}K</h3>
             <p className="summaryPara">Margin available</p>
          </div>
          <hr />

          <div className="second">
             <p className="summaryPara">
              Margins used <span>0</span>{" "}
            </p>
             <p className="summaryPara">
              Opening balance <span>{(holdingsInfo.openingBalance/1000).toFixed(2)}K</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
           <p className="summaryPara">Holdings ({holdingsInfo.totalHoldings})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={holdingsInfo.profitClass}>
              {(holdingsInfo.pnl/1000)?.toFixed(2)}k <small className={holdingsInfo.profitClass}>{holdingsInfo.pnlPercent > 0 ? (+holdingsInfo.pnlPercent?.toFixed(2) ) : (-holdingsInfo.pnlPercent?.toFixed(2))}%</small>{" "}
            </h3>
             <p className="summaryPara">P&L</p>
          </div>
          <hr />

          <div className="second">
             <p className="summaryPara">
              Current Value <span className={holdingsInfo?.profitClass}>{(holdingsInfo.currValue/1000)?.toFixed(2)}k</span>{" "}
            </p>
             <p className="summaryPara">
              Investment <span>{((holdingsInfo.openingBalance-userBalance)/1000)?.toFixed(2)}k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
