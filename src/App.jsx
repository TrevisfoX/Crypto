import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/system";
import Navbar from "./components/Navigation/Navbar";
import Homepage from "./components/Homepage/Hompage";
import Favorites from "./components/Favorites/Favorites";
import Cryptocurrencies from "./components/Cryptocurrencies/Cryptocurrencies";
import CryptoDetails from "./components/CryptoDetails/CryptoDetails";
import News from "./components/News/News";

function App() {
	return (
		<div className="App">
			<header>
				<Navbar />
			</header>
			<main>
				<Container>
					<div className="rotes">
						<Routes>
							<Route path="/" element={<Homepage />}></Route>
							<Route
								path="/favorites"
								element={<Favorites />}
							></Route>
							<Route
								path="/cryptocurrencies"
								element={<Cryptocurrencies />}
							></Route>
							<Route
								path="/crypto/:coinId"
								element={<CryptoDetails />}
							></Route>
							<Route path="/news" element={<News />}></Route>
						</Routes>
					</div>
				</Container>
			</main>
		</div>
	);
}

export default App;
