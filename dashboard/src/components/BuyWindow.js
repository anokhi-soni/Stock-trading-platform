import TextField from '@mui/material/TextField';
import { GeneralContextProvider, GeneralContext} from './GeneralContextProvider';
import { useContext, useState } from 'react';
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";

function BuyWindow({stock, stockId}) {
    let generalContext = useContext(GeneralContext); 
    const [quantity, setQuantity] = useState(1); // initially the quantity will be 1 only, if the user wants, he can take more
    const [problem, setProblem] = useState("");

    function handleQtyChange(event){
        setQuantity(event.target.value);
    }

    async function handleOnSubmit(event){
        if(quantity == 0) {
            setProblem("Please enter at least quantity...");
            return;
        }
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/newOrder`, {
            name: stock.name,
            price: stock.price,
            qty: quantity,
            mode: "buy",
        }, {withCredentials: true})

        const {success, message} = response.data;

        if(success){
            console.log(message);
            generalContext.closeWindow();
        }
        else {
            setProblem(message);
            console.log(message);
        }
        event.preventDefault();
        
    }

    return (
        <div className="SellBuyWindow buyWindow">
          
            <form className='newOrderForm' onSubmit={handleOnSubmit}>
                <div className='info-container'>
                    <p id='stockName'>{stock.name}</p>
                    <p id="priceOfStock">₹{stock.price.toFixed(2)} / share </p>
                </div>
                <div className="textFieldContainer">
                    <TextField value={quantity} type='number' onChange={handleQtyChange} rows={1} className='inputField' id="outlined-basic" label="Qty." defaultValue=" " sx={{ width: "100px"}} />
                </div>

                <p className='totalPricePara'>Total price: {quantity * stock.price}</p>

                <div className='BuySellCancelbuttonContainer BuyCancelbuttonContainer'>
                    {/* <p>Magin required rs. 145.5 </p> */}
                    <button type='submit' className="buyBtn" >Buy</button> 
                    <button className="cancelBtn" onClick={generalContext.closeWindow}>cancel</button>
                </div>
            </form>
            
            {problem? <div className='warningDiv' style={{color:"red"}}>{problem}</div> : null} 
        </div>
    );
}

export default BuyWindow;