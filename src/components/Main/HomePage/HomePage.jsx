import React from "react";
import CoinItem from "../../CoinItem/CoinItem";
import "./HomePage.scss";

const HomePage = ({ coins }) => {
	return (
		<section className="section">
			<h1>Coins</h1>
			<div className="section__coins-list">
				{coins.map((coin) => {
					return <CoinItem key={coin.id} coin={coin} />;
				})}
			</div>
		</section>
	);
};

export default HomePage;
