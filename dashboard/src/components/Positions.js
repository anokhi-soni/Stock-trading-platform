import React, { useEffect, useState } from "react";
// import { positions } from "../data/data";
import axios from "axios";
const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(()=>{
    axios.get(`${process.env.REACT_BACKEND_URL}/allPositions`, {withCredentials: true})
    .then((res)=> setAllPositions(res.data))
    .catch((err)=> console.log(err));
  }, [])

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {allPositions.map((stock, idx)=>{
            // Some Calculations:
            const currValue = stock.price*stock.qty;
            const isProfit = currValue-stock.avg >= 0.0;// boolean variable
            const profitClass = isProfit ? "profit" : "loss"; // for profit, color will be green, for loss color will be red (css has already been written)


            return (
              <tr key={idx}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={profitClass}>{(currValue - stock.avg * stock.qty).toFixed(2)}</td>
                <td className={profitClass}>{stock.net}</td>
              </tr>
            )
          })}

        </table>
      </div>
    </>
  );
};

export default Positions;
