import TextField from '@mui/material/TextField';
import { GeneralContextProvider, GeneralContext} from './GeneralContextProvider';
import { useContext, useState } from 'react';
import axios from "axios"

function SellWindow({stock, stock_id}) {
    let generalContext = useContext(GeneralContext); 
    const [quantity, setQuantity] = useState(0); // initially the quantity will be 0 only, if the user wants, he can take more
    const [problem, setProblem] = useState("");

    function handleQtyChange(event){
        setQuantity(event.target.value);
    }


    async function handleOnSubmit(event){
        event.preventDefault();
        if(quantity == 0) {
            setProblem("Please enter one or more quantity...");
            return;
        }
        
        try {
            const response = await axios.patch(`${process.env.REACT_BACKEND_URL}/sellShares/${stock.name}`, {
                name: stock.name,
                price: stock.price,
                qty: quantity,
                mode: "sell",
            }, {withCredentials: true})

            const {message, success} = response.data;

            if(success){
                console.log(message)
                generalContext.closeWindow();
            }
            else {
                setProblem(message);
                console.log(message);
            }
        } catch (error) {
            console.log(error);
        }
         
    }

    return ( 
        <div className="SellBuyWindow sellWindow">
                  
            <form className='newOrderForm' onSubmit={handleOnSubmit}>
                <div className='info-container'>
                    <p id='stockName'>{stock.name}</p>
                    <p id="priceOfStock">₹{stock.price.toFixed(2)} / share </p>
                    {/* <p id="qtyUserOwn">₹{stock.price.toFixed(2)} / share </p> */}
                </div>
                <div className="textFieldContainer">
                    <TextField value={quantity} type='number' onChange={handleQtyChange} rows={1} className='inputField' id="outlined-basic" label="Qty." defaultValue=" " sx={{ width: "100px"}} />
                </div>

                <p className='totalPricePara'>Total Eraning: {quantity * stock.price}</p>

                <div className='BuySellCancelbuttonContainer BuyCancelbuttonContainer'>
                    {/* <p>Magin required rs. 145.5 </p> */}
                    <button type='submit' className="sellBtn" >Sell</button> 
                    <button className="cancelBtn" onClick={generalContext.closeWindow}>cancel</button>
                </div>
            </form>
        
           {problem? <div className='warningDiv' style={{color:"red"}}>{problem}</div> : null} 
        </div>
    );
}

export default SellWindow;