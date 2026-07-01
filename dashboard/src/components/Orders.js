import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loader/Loading";
const Orders = () => {
  const [loading, setLoading] = useState(true);
  const [allOrders, setAllOrders] = useState([]);
  
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/allOrders`, {withCredentials: true})
    .then((res)=>{
      setAllOrders(res.data);
    })
    .catch((err)=> console.log(err));
  }, [])
  
  if(loading){
    return(<Loading text={"Loading.."}/>)
  }

  return (
      (allOrders.length) ?
      <div>
        <h3 className="title">Orders ({allOrders.length})</h3>

        <div className="order-table">
          <table>
            <tr>
              <th>Id</th>
              <th>Qty.</th>
              {/* <th>Avg. cost</th> */}
              {/* <th>LTP</th> */}
              {/* <th>Cur. val</th> */}
              {/* <th>P&L</th> */}
              <th>Price</th>
              <th>Mode</th>
              <th>Time</th>
            </tr>

            {allOrders.map((stock)=>{
              // Some Calculations:
              // const currValue = stock.price*stock.qty;
              // const isProfit = currValue-stock.avg >= 0.0;// boolean variable
              // const profitClass = isProfit ? "profit" : "loss"; // for profit, color will be green, for loss color will be red (css has already been written)
              // const dayClass = stock.isLoss ? "loss" : "profit";// for profit, color will be green, for loss color will be red (css has already been written)


              return (
                <tr key={stock._id}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.price?.toFixed(2)}</td>
                  <td>{stock.mode}</td>
                  <td>{new Date(stock.orderedAt).toLocaleDateString()}, {new Date(stock.orderedAt).toLocaleTimeString()}</td>
                  
                </tr>
              )
            })}
          </table>
        </div>
      </div>
      :
      <div className="orders">
          <div className="no-orders">
            <p>You haven't placed any orders today</p>

            <Link to={"/"} className="btn">
              Get started
            </Link>
          </div>
        </div>
    
  );
};

export default Orders;
