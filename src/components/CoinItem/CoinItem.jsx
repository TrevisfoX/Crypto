import React from "react";
import "./CoinItem.scss";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

const CoinItem = ({ coin }) => {
	console.log(coin);
	return (
		<div className="coin">
			<h2 className="coin__name">{coin.name}</h2>
			<img className="coin__icon" src={coin.image} alt="coin image" />
			<Link className="link" to={"/description"}>
				<ReadMoreIcon />
			</Link>
			<button>
				<AddIcon />
			</button>
		</div>
	);
};

export default CoinItem;
