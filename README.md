# Crypto Risk Analyzer Dashboard

A full-stack financial analytics dashboard that evaluates cryptocurrency market trends and risk metrics using real-time data APIs.
The application fetches historical price data, computes statistical indicators such as **average price and volatility**, and visualizes price trends through an interactive chart interface.

This project demonstrates core software engineering practices including **API integration, backend data processing, analytics visualization, and frontend dashboard design**.

---

## Overview

Financial institutions and trading platforms rely heavily on data analytics dashboards to monitor asset performance and risk.
This project simulates a simplified version of such systems by:

* Fetching real-time cryptocurrency market data
* Computing statistical metrics
* Visualizing price trends and risk indicators
* Providing an interactive analytics dashboard for users

The system is designed with a **React frontend and Node.js backend**, following a simple API-based architecture.

---

## Key Features

* Fetches historical cryptocurrency price data from market APIs
* Calculates **average price and volatility metrics**
* Displays price trends using interactive charts
* Implements **moving average indicators** commonly used in financial analytics
* Provides **zoom and pan capabilities** for better chart exploration
* Uses dropdown selection to ensure valid asset queries and prevent API errors
* Clean dashboard-style user interface with responsive layout

---

## Tech Stack

### Frontend

* React.js
* Chart.js
* React ChartJS 2
* Axios
* CSS

### Backend

* Node.js
* Express.js
* Axios

### Data Source

* Cryptocurrency market data API from CoinGecko

### Deployment

* Frontend: Vercel
* Backend: Render

---

## System Architecture

```
User Interface (React Dashboard)
        |
        | HTTP Request
        v
Node.js Express API
        |
        | Fetch Market Data
        v
External Cryptocurrency API
        |
        | Process Data
        v
Statistical Analysis
(Average Price + Volatility)
        |
        v
Chart Visualization (Chart.js)
```

---

## Statistical Analysis Implemented

### Average Price

The average price across the dataset is computed using:

```
Average = Sum of Prices / Number of Observations
```

### Volatility

Volatility measures price fluctuation over time.

```
Variance = Σ(price − average)² / n
Volatility = √variance
```

### Moving Average

A short-term moving average is calculated to identify trend direction.

---

## Project Structure

```
crypto-risk-analyzer

backend
 ├── server.js
 ├── package.json

frontend
 ├── src
 │   ├── App.js
 │   ├── StockChart.js
 │   ├── App.css
 │   └── index.js
 ├── package.json
```
---

## Usage

1. Select a cryptocurrency from the dropdown menu
2. Click **Analyze**
3. The dashboard will display:

* Average asset price
* Volatility metric
* Interactive price trend chart
* Moving average trend

---

## Example Supported Assets

* Bitcoin
* Ethereum
* Solana
* Dogecoin
* Litecoin
* Cardano

---

## Future Improvements

Potential extensions include:

* Portfolio risk analysis
* Real-time market streaming
* Multi-asset comparison
* Sharpe ratio and advanced risk metrics
* Authentication and user dashboards
* Cloud-based data caching

---

## Learning Outcomes

This project helped demonstrate:

* API integration and asynchronous data fetching
* Backend statistical data processing
* Interactive data visualization
* Dashboard-oriented UI design
* Full-stack system architecture

---

## License

This project is for educational and portfolio purposes.

---

## Author

Priyanshu Tripathi
B.Tech, Information Technology, 2nd Year
Madan Mohan Malaviya University of Technology
