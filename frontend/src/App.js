import React, { useState } from "react";
import axios from "axios";
import StockChart from "./StockChart";
import "./App.css";

function App(){

const [coin,setCoin]=useState("bitcoin")
const [data,setData]=useState(null)

const fetchData=async () => {

const res=await axios.get(
`https://stock-risk-backend.onrender.com/crypto/${coin}`
)

setData(res.data)

}

return (

<div className="container">

<div className="dashboard">

<h1 className="title">Crypto Risk Analyzer</h1>

<div className="input-group">

<select
value={coin}
onChange={(e)=>setCoin(e.target.value)}
>

<option value="bitcoin">Bitcoin</option>
<option value="ethereum">Ethereum</option>
<option value="solana">Solana</option>
<option value="dogecoin">Dogecoin</option>
<option value="litecoin">Litecoin</option>
<option value="cardano">Cardano</option>

</select>

<button onClick={fetchData}>
Analyze
</button>

</div>

{data && (

<>

<div className="stats">

<div className="card">
<h3>Average Price</h3>
<p>${data.average.toFixed(2)}</p>
</div>

<div className="card">
<h3>Volatility</h3>
<p>{data.volatility.toFixed(2)}</p>
</div>

</div>

<div className="chart-container">

<StockChart prices={data.prices}/>

</div>

</>

)}

</div>

</div>

)

}

export default App;