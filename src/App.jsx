import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import axios from "axios";
import "./App.scss";

function App() {
	const [coins, setCoins] = useState([]);

	useEffect(() => {
		axios
			.get(
				`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
			)
			.then((res) => {
				setCoins(res.data);
			});
	}, []);

	return (
		<div className="App">
			<Header />
			<Main coins={coins} />
			<Footer />
		</div>
	);
}

export default App;
