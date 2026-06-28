require("dotenv").config();
let Express = require("express");
let Mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser"); // so that body-parser is middleware in Express that reads the body of an incoming HTTP request and converts it into a JavaScript object that you can access through req.body.
let cookieParser = require("cookie-parser");


let app = Express();

app.use(cors({  // security mechanism that controls whether a webpage can make requests to a different origin.
    origin: ["http://localhost:3000", "http://localhost:3001", "http://anyOtherLink"], // Only these cross-origin links can make request to our server
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"], // Only these requests are allowed from cross-origins
    credentials: true, // This server allows the browser to send and receive credentials (such as cookies, HTTP authentication, or TLS client certificates) in cross-origin requests.
  }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

const PORT = process.env.PORT || 3002;// If we haven't specified any port, 3002 will be our port
const db_URL = process.env.MONGO_URL; 

Mongoose.connect(db_URL)// connects MongoDB with Node
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

let {HoldingModel} = require("./models/holdingModel");
let {PositionModel} = require("./models/positionModel");
let {OrderModel} = require("./models/orderModel");

const AuthenticationRouter = require("./Routers/AuthenticationRoute");
const { verifyUser } = require("./middleware/verifyUser");

let data = require("../dashboard/src/data/data"); // Sample data
const { User } = require("./models/userModel");
const { Finnhub, getQuote } = require("./controllers/finnhub");

app.use("/", AuthenticationRouter)

app.get("/", verifyUser, (req, res)=>{
    const currUser = req.currUser
    res.json({message: "Logged in successfully!", success:true, user:currUser});
})
app.get("/allHoldings", verifyUser, async (req, res)=>{
    const user = req.currUser;
    const allHoldings = await HoldingModel.find({user:user});
    
    // let currValue=0;
    
    const apiAddedData = await Promise.all(
        allHoldings.map(async (holding)=>{

            const quoteData = await getQuote(holding.name);
            const ltp = quoteData.c * 94.38; // USD to INR
            
            // currValue += holding.qty * ltp;
            
            return{
                ...holding.toObject(), // cuz holding is a Mongoose document so spreading it will give all the fields of the mongoose documents which we don't want
                ltp,
                dayChange: quoteData.d * 94.38,
                dayChangePercent: quoteData.dp,
                currValue: holding.qty * ltp,
                pnl: (ltp - holding.avg) * holding.qty
            }

        })
    )

    const currValue = apiAddedData.reduce((sum, h) => sum + h.currValue, 0);
    console.log(currValue);
    const totalInvestement = 100000-req.currUser.balance;
    res.json({allHoldings: apiAddedData, totalHoldings: apiAddedData.length, currValue: currValue, pnl: currValue - totalInvestement, totalInvestement}); // This will return holdings in json format 
})
app.get("/allPositions", verifyUser, async(req, res) =>{
    const user = req.currUser;
    const allPositions = await PositionModel.find({user:user}); 
    res.json(allPositions); // This will return positions in json format 
})
app.get("/allOrders", verifyUser, async (req, res)=>{
    const user = req.currUser;
    const allOrders = await OrderModel.find({user:user});
    res.json(allOrders);
})
app.post("/newOrder", verifyUser, async (req, res)=>{
    const qty = Number(req.body.qty);
    if(qty <=0) return res.status(200).json({message:"Please enter valid quantity", success:false})
    
    try {
        const quoteData = await getQuote(req.body.name);
        const ltp = quoteData.c*94.38;
        const totalInvst = qty*ltp;

        if(totalInvst > req.currUser.balance) return res.status(200).json({message: "You don't have enough balance...", success:false});
        else {
            const newOrder = new OrderModel({
                name: req.body.name,
                price: ltp,
                qty: qty,
                mode: "buy",
                user: req.currUser
            })

            
            const holding = await HoldingModel.findOne({name: req.body.name, user: req.currUser});
            if(holding) 
            await HoldingModel.findOneAndUpdate({name: req.body.name, user: req.currUser},
                {
                    qty: qty + holding.qty,
                    avg: (holding.avg * holding.qty + ltp * newOrder.qty) / (holding.qty + newOrder.qty),
                    price: ltp,
                    day: quoteData.d * 94.38,
                    user: req.currUser
                }) 
            else{
                const newHolding = await HoldingModel({
                    name: req.body.name,
                    qty: qty,
                    avg: ltp,
                    price: ltp,
                    day: quoteData.d*94.38,
                    user: req.currUser
                })
                await newHolding.save();
            }

            await newOrder.save();
            await User.findOneAndUpdate({username: req.currUser.username}, {$inc: { balance: - totalInvst } })

            return res.status(200).json({message: "Order successfull!", success: true})
            
        }

    } catch (error) {
        res.status(500).json({message: "something went wrong", success: false})
    }
    
    
})

app.patch("/sellShares/:symbol", verifyUser, async (req, res)=>{
    const qty = Number(req.body.qty);
    if(!Number.isFinite(qty) || qty <= 0) return res.status(200).json({message:"Please enter valid quantity", success:false})
    try {
        const symbol = req.params.symbol;
        const username = req.currUser.username;
        
        const quoteData = await getQuote(symbol);
        const ltp = quoteData.c*94.38;

        const holding = await HoldingModel.findOne({name: symbol, user: req.currUser});
        
        if(!holding) return res.status(200).json({message:`You don't own ${symbol}`, success:false})
    

        if(qty>holding.qty) return res.status(200).json({message:"Quantity Exceeded...", success:false})
        else{
            qty < holding.qty ? 
            await HoldingModel.findOneAndUpdate({name: symbol, user: req.currUser}, {qty: holding.qty - qty})
            :
            await HoldingModel.deleteOne({name: symbol, user: req.currUser});

            const newOrder = new OrderModel({
                name: symbol,
                price: ltp,
                qty: qty,
                mode: "sell",
                user: req.currUser
            })

            await newOrder.save();
            await User.findOneAndUpdate({username: username}, { $inc: { balance: ltp * qty }});
            return res.status(200).json({message:"Order Sold Successfully", success:true})
        }
    } catch (error) {
        return res.status(500).json({message:"Order Failed", success:false})
    }

})

app.get("/balance", verifyUser, async (req, res)=>{
    const user = await User.findOne({username: req.currUser.username});
    console.log(user);
    return res.json({message: "Successful!", success: true, balance: user.balance});
})


app.get("/quote/:symbol", verifyUser, Finnhub);

app.get("/demodata", async(req, res)=>{
    res.send("Data Added!");

})

app.listen(PORT, ()=>{
    console.log(`listening to the port ${PORT}`);
})

