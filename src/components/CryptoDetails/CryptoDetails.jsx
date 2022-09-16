import React, { useState } from "react";
import { useParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import millify from "millify";
import {
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Typography,
	Grid,
} from "@mui/material";

import {
	useGetCryptoDetailsQuery,
	useGetCryptoHistoryQuery,
} from "../../services/cryptoApi";
import LineChart from "../Chart/LineChart";
import Loader from "../Loader/Loader";

const CryptoDetails = () => {
	const { coinId } = useParams();
	const [timePeriod, setTimePeriod] = useState("7d");
	const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
	const { data: coinHistory } = useGetCryptoHistoryQuery({
		coinId,
		timePeriod,
	});
	const cryptoDetails = data?.data?.coin;

	const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

	if (isFetching) return <Loader />;
	console.log(cryptoDetails);

	return (
		<>
			<Box>
				<Typography
					sx={{
						textAlign: "center",
						my: 4,
						fontSize: 36,
						fontWeight: "bold",
					}}
				>
					{cryptoDetails.name} ({cryptoDetails.symbol}) Price
				</Typography>

				<FormControl
					variant="standard"
					sx={{
						width: "25%",
					}}
				>
					<InputLabel
						sx={{
							fontSize: 18,
						}}
					>
						Select a time interval
					</InputLabel>
					<Select
						className="select-timeperiod"
						placeholder="Select time period"
						defaultValue="7d"
						onChange={(value) => setTimePeriod(value)}
					>
						{time.map((value) => {
							return <MenuItem key={value}>{value}</MenuItem>;
						})}
					</Select>
				</FormControl>
				<LineChart
					coinHistory={coinHistory}
					currentPrice={millify(cryptoDetails?.price)}
					coinName={cryptoDetails?.name}
				/>
			</Box>
			<Box>
				<Typography
					sx={{
						textAlign: "center",
						my: 4,
						fontSize: 28,
						fontWeight: "bold",
					}}
				>
					{cryptoDetails.name} base statistics
				</Typography>
				<Typography>Price to USD: {cryptoDetails.price}</Typography>
				<Typography>Rank: {cryptoDetails.rank}</Typography>
				<Typography>
					24h Volume:{" "}
					{cryptoDetails.volume
						? cryptoDetails.volume
						: "no data available"}
				</Typography>
				<Typography>Market Cap: {cryptoDetails.marketCap}</Typography>
				<Typography>
					All-time-high: {cryptoDetails.allTimeHigh.price}
				</Typography>
			</Box>
			<Box>
				<Typography
					sx={{
						textAlign: "center",
						my: 4,
						fontSize: 28,
						fontWeight: "bold",
					}}
				>
					Other stats info
				</Typography>
				<Typography>
					Number Of Markets: {cryptoDetails.numberOfMarkets}
				</Typography>
				<Typography>
					Number Of Exchanges: {cryptoDetails.numberOfExchanges}
				</Typography>
				<Typography>
					Total Supply: {cryptoDetails.supply.total}
				</Typography>
				<Typography>
					Circulating Supply: {cryptoDetails.supply.circulating}
				</Typography>
			</Box>
			<Box>
				<Typography
					sx={{
						textAlign: "center",
						fontSize: 28,
						fontWeight: "bold",
						my: 3,
					}}
				>
					What is {cryptoDetails.name}?
				</Typography>
				<Typography>
					{HTMLReactParser(cryptoDetails.description)}
				</Typography>
			</Box>
			<Box
				sx={{
					textAlign: "center",
					pb: 5,
				}}
			>
				<Typography
					sx={{
						textAlign: "center",
						fontSize: 28,
						fontWeight: "bold",
						my: 3,
					}}
				>
					{cryptoDetails.name} links
				</Typography>
				<Grid container spacing={3}>
					{cryptoDetails.links?.map((link) => (
						<Grid item key={link.name} md={4}>
							<Typography>{link.type}</Typography>
							<a href={link.url}>{link.name}</a>
						</Grid>
					))}
				</Grid>
			</Box>
		</>
	);
};

export default CryptoDetails;
