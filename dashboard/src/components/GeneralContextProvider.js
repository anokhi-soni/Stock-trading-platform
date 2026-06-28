import { createContext, useState } from "react";
import BuyWindow from "./BuyWindow";
import SellWindow from "./SellWindow";
// import { ToastContainer, toast } from "react-toastify";

export const GeneralContext = createContext({
    openBuyWindow: (id)=>{}, // giving default value
    openSellWindow: (id)=>{}, // giving default value
    closeWindow: ()=>{} // giving default value
});

export function GeneralContextProvider(props){ // notice that props is not inside curly braces
    const [buyBtn, setBuy] = useState(false);
    const [sellBtn, setSell] = useState(false);
    const [stockIdSelected, setStockIdSelected] = useState("");
    const [stock, setStock] = useState({});
    function handleOpenBuyWindow(id, stock){
        setBuy(true);
        setStockIdSelected(id);
        setStock(stock);
    }
    function handleCloseWindow(){
        setBuy(false);
        setSell(false);
        setStockIdSelected("");
        setStock({});
    }

    function handleOpenSellWindow(id, stock){
        setSell(true);
        setStockIdSelected(id);
        setStock(stock);
    }

    return(
        <GeneralContext.Provider value={{openBuyWindow: handleOpenBuyWindow, openSellWindow:handleOpenSellWindow, closeWindow: handleCloseWindow}}>
            {props.children} {/* Now, All the nested compoenents of Components wrapped up by the <GeneralContextProvider></GeneralContextProvider> in another file can access the object written inside the 'value' */}
            {buyBtn && <BuyWindow stockId={stockIdSelected} stock = {stock }/>} {/*Now any component inside BuyWindow can access the close/openBuyWindow */}
            {sellBtn && <SellWindow stockId={stockIdSelected} stock = {stock }/>}
        </GeneralContext.Provider>
    )
}

