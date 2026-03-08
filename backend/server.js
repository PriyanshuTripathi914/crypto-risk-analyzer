const express=require("express");
const axios=require("axios");
const cors=require("cors");

const app=express();
app.use(cors());

app.get("/crypto/:coin", async(req, res)=>{

const coin=req.params.coin;

try{

const response=await axios.get(
`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=30`
);

const prices=response.data.prices.map(p=>p[1]);

const avg=prices.reduce((a,b)=>a+b,0) / prices.length;

const variance=prices.reduce((sum,p)=>sum+(p-avg)**2,0) / prices.length;

const volatility=Math.sqrt(variance);

res.json({
prices,
average: avg,
volatility
});

} catch(err){

res.status(500).send("API Error");

}

});

app.listen(5000, () =>
console.log("Backend running on port 5000")
);