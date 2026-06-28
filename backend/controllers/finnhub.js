const finnhub = require('finnhub'); // for live watchList
const finnhubClient = new finnhub.DefaultApi(`${process.env.FINNHUB_API}`) // Replace

module.exports.Finnhub = (req, res)=>{
    const {symbol} = req.params
   
    finnhubClient.quote(symbol, (error, data, response) => {
        if(error) {
            return res.status(500).json(error);
        }
        else return res.json(data);
    });
}

module.exports.getQuote = (symbol)=>{
    return new Promise((resolve, reject) => { // Cuz finnhub is an API so it's asynchronous. We didn't use Promise aur await & async in the above function, because that's an Express function handler which says: When Finnhub finishes, send the HTTP response
        finnhubClient.quote(symbol, (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
}