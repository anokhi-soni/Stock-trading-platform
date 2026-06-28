import BrokrageSubcomponent from "./BrokrageSubcomponent";

function Brokrage() {
    return ( 
        <div id="Brokrage">
            <BrokrageSubcomponent img="media\images\pricing0.svg" heading="Free equity delivery" sentence="All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage."/>
            <BrokrageSubcomponent img="media\images\intradayTrades.svg" heading="Intraday and F&O trades" sentence="Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades."/>
            <BrokrageSubcomponent img="media\images\pricingMF.svg" heading="Free direct MF" sentence="All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges."/>
        </div>
    );
}

export default Brokrage;