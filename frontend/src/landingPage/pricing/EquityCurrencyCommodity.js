import "./PricingPage.css"
import TableComponent from "./TableComponent";
function EquityCurrencyCommodity() {
    function handleOnClickBtn(event){
        const btn_id= event.target.id;
        // console.log(btn_id);
        let currBtn = document.getElementById(`${btn_id}`);
        let allBtns = document.getElementsByClassName("ecc_btn");        

        let div1 = document.getElementById("div1");
        let div2 = document.getElementById("div2");
        let div3 = document.getElementById("div3");
        if(btn_id === "btn1"){
            div1.style.display = "block";
            div2.style.display = "none";
            div3.style.display = "none";
            // btn1.display
        }
        else if(btn_id === "btn2"){
            div1.style.display = "none";
            div2.style.display = "block";
            div3.style.display = "none";
        }
        else if (btn_id === "btn3"){
            div1.style.display = "none";
            div2.style.display = "none";
            div3.style.display = "block";
        }
        for (const btn of allBtns) {
            if(btn.id !== btn_id) {
                btn.style.color = "rgb(0, 132, 255)"
                btn.style.borderBottom = "none"
                console.log(btn.id);
            }
        }

        // Changing the color of btn which was clicked 
        currBtn.style.borderBottom = "2px solid rgb(0, 132, 255)";
        currBtn.style.color = "grey";
    }


    return ( 
        <div id="EquityCurrencyCommodity">

            <div className="toggelBtnContainer">
                <p className="ecc_btn" id="btn1" onClick={handleOnClickBtn}>Equity</p>
                <p className="ecc_btn" id="btn2"  onClick={handleOnClickBtn}>Currency</p>
                <p className="ecc_btn" id="btn3"  onClick={handleOnClickBtn}>Commodity</p>
            </div>

            <div className="ecc_div" id="div1">                
                <TableComponent
                    id={"EquityTable"} 
                    headings={["Equity delivery", "Equity intraday", "F&O - Futures", "F&O - Options"]}
                    tableContent_2D_arr={[
                        ["Brokerage", "Zero Brokerage", "0.03% or Rs. 20/executed order whichever is lower", "0.03% or Rs. 20/executed order whichever is lower", "	Flat Rs. 20 per executed order"], 
                        ["STT/CTT", "0.1% on buy & sell", "0.025% on the sell side", "0.05% on the sell side", <ul><li>0.15% of the intrinsic value on options that are bought and exercised</li>  <li>0.15% on sell side (on premium)</li></ul>], 
                        ["Transaction charges", <>NSE: 0.00307% <br/> BSE: 0.00375%</>, <>NSE: 0.00307% <br/> BSE: 0.00375%</>, <>NSE: 0.00183% <br/> BSE: 0</>, <>NSE: 0.03553% (on premium) <br/> BSE: 0.0325% (on premium)</>], 
                        ["GST", "18% on (brokerage + SEBI charges + transaction charges)", "18% on (brokerage + SEBI charges + transaction charges)", "18% on (brokerage + SEBI charges + transaction charges)", "18% on (brokerage + SEBI charges + transaction charges)"], 
                        ["SEBI charges", "₹10 / crore", "₹10 / crore", "₹10 / crore", "₹10 / crore"], 
                        ["Stamp charges", "0.015% or ₹1500 / crore on buy side", "0.003% or ₹300 / crore on buy side", "0.002% or ₹200 / crore on buy side", "0.003% or ₹300 / crore on buy side"]
                    ]}
                />
            </div>
            
            <div className="ecc_div" id="div2"> 
                <TableComponent 
                    id={"CurrencyTable"}  
                    headings={["Currency futures", "Currency options"]}
                    tableContent_2D_arr={ [["Brokerage","0.03% or ₹20/executed order whichever is lower","₹20/executed order"],["STT/CTT","No STT","No STT"],["Transaction charges","NSE: 0.00035%\nBSE: 0.00045%","NSE: 0.0311%\nBSE: 0.001%"],["GST","18% on (brokerage + SEBI charges + transaction charges)","18% on (brokerage + SEBI charges + transaction charges)"],["SEBI charges","₹10 / crore","₹10 / crore"],["Stamp charges","0.0001% or ₹10 / crore on buy side","0.0001% or ₹10 / crore on buy side"]]}
                />
            </div>

            <div className="ecc_div" id="div3">
                    <TableComponent
                        id={"CommodityTable"} 
                        headings = {["Commodity futures", "Commodity options"]}
                        tableContent_2D_arr = {[["Brokerage","0.03% or Rs. 20/executed order whichever is lower","₹ 20/executed order"],["STT/CTT","0.01% on sell side (Non-Agri)","0.05% on sell side"],["Transaction charges","MCX: 0.0021%\nNSE: 0.0001%","MCX: 0.0418%\nNSE: 0.001%"],["GST","18% on (brokerage + SEBI charges + transaction charges)","18% on (brokerage + SEBI charges + transaction charges)"],["SEBI charges","Agri:\n₹1 / crore\nNon-agri:\n₹10 / crore","₹10 / crore"],["Stamp charges","0.002% or ₹200 / crore on buy side","0.003% or ₹300 / crore on buy side"]]}
                    />
            </div>

        </div>
    );
}

export default EquityCurrencyCommodity;