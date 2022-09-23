import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/system";
import Navbar from "./components/Navigation/Navbar";
import Homepage from "./components/Homepage/Hompage";
import Favorites from "./components/Favorites/Favorites";
import CryptoDetails from "./components/CryptoDetails/CryptoDetails";
import NewsList from "./components/NewsList/NewsList";
import CoinList from "./components/CoinList/CoinList";

function App() {
	return (
		<div className="App">
			<header>
				<Navbar />
			</header>
			<main>
				<Container>
					<Routes>
						<Route path="/" element={<Homepage />}></Route>
						<Route
							path="/favorites"
							element={<Favorites />}
						></Route>
						<Route
							path="/cryptocurrencies"
							element={<CoinList />}
						></Route>
						<Route
							path="/crypto/:coinId"
							element={<CryptoDetails />}
						></Route>
						<Route path="/news" element={<NewsList />}></Route>
					</Routes>
				</Container>
			</main>
		</div>
	);
}

export default App;
