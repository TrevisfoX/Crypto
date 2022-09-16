import React from "react";
import millify from "millify";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import Cryptocurrencies from "../Cryptocurrencies/Cryptocurrencies";
import News from "../News/News";
import Loader from "../Loader/Loader";
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";

const Hompage = () => {
	const { data, isFetching } = useGetCryptosQuery(12);
	const globalStats = data?.data?.stats;
	if (isFetching) return <Loader />;
	return (
		<>
			<TableContainer>
				<Typography
					sx={{
						my: 6,
						fontSize: 36,
						fontWeight: "bold",
						textAlign: "center",
					}}
					component="h1"
				>
					Global crypto stats
				</Typography>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell
								sx={{
									textAlign: "center",
									fontSize: 18,
								}}
							>
								Total Cryptocurrencies
							</TableCell>
							<TableCell
								sx={{
									textAlign: "center",
									fontSize: 18,
								}}
							>
								Total Exchanges
							</TableCell>
							<TableCell
								sx={{
									textAlign: "center",
									fontSize: 18,
								}}
							>
								Total Market Cap
							</TableCell>
							<TableCell
								sx={{
									textAlign: "center",
									fontSize: 18,
								}}
							>
								Total 24h Valume
							</TableCell>
							<TableCell
								sx={{
									textAlign: "center",
									fontSize: 18,
								}}
							>
								Total Markets
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell
								sx={{
									textAlign: "center",
									fontSize: 18,
								}}
							>
								{globalStats.total}
							</TableCell>
							<TableCell
								sx={{
									textAlign: "center",
									fontSize: 18,
								}}
							>
								{millify(globalStats.totalExchanges)}
							</TableCell>
							<TableCell
								sx={{
									textAlign: "center",
									fontSize: 18,
								}}
							>
								{millify(globalStats.totalMarketCap)}
							</TableCell>
							<TableCell
								sx={{
									textAlign: "center",
									fontSize: 18,
								}}
							>
								{millify(globalStats.total24hVolume)}
							</TableCell>
							<TableCell
								sx={{
									textAlign: "center",
									fontSize: 18,
								}}
							>
								{millify(globalStats.totalMarkets)}
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
			<div>
				<Typography
					sx={{
						my: 6,
						fontSize: 36,
						fontWeight: "bold",
						textAlign: "center",
					}}
					component="h1"
				>
					Top 12 Cryptocurrencues in the World
				</Typography>
			</div>
			<Cryptocurrencies simplified />
			<div className="home-heading-container">
				<Typography
					sx={{
						my: 6,
						fontSize: 36,
						fontWeight: "bold",
						textAlign: "center",
					}}
					component="h1"
				>
					News
				</Typography>
			</div>
			<News simplified />
		</>
	);
};

export default Hompage;
