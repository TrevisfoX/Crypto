import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import Loader from "../Loader/Loader";
import {
	Card,
	CardContent,
	Typography,
	CardActions,
	Grid,
	TextField,
	Box,
	IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

const Cryptocurrencies = ({ simplified }) => {
	const count = simplified ? 12 : 100;
	const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
	const [cryptos, setCryptos] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		const filteredData = cryptosList?.data?.coins.filter((coin) =>
			coin.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setCryptos(filteredData);
	}, [cryptosList, searchTerm]);

	if (isFetching) return <Loader />;

	return (
		<>
			{!simplified && (
				<Box
					component="form"
					sx={{
						"& > :not(style)": { my: 3, width: "31%" },
					}}
					noValidate
				>
					<TextField
						id="standard-basic"
						label="Search coin..."
						variant="standard"
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</Box>
			)}

			<Grid container spacing={5}>
				{cryptos?.map((currency) => (
					<Grid item md={4}>
						<Card
							key={currency.uuid}
							sx={{
								minHeight: 255,
							}}
						>
							<CardContent>
								<Typography
									gutterBottom
									variant="h5"
									component="h5"
									sx={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										gap: 2,
										pb: 2,
										mb: 2,
										fontWeight: "bold",
										borderBottom: 0.5,
										borderColor: "silver",
									}}
								>
									<img
										src={currency.iconUrl}
										alt="Coin icon"
										width="50"
										height="50"
									/>
									{currency.name}
								</Typography>
								<Typography
									variant="body2"
									color="text.secondary"
									sx={{
										fontSize: 16,
										color: "grey",
										mb: 1,
									}}
								>
									Rank: {currency.rank}
								</Typography>
								<Typography
									variant="body2"
									color="text.secondary"
									sx={{
										fontSize: 16,
										color: "grey",
										mb: 1,
									}}
								>
									Price: {millify(currency.price)} $
								</Typography>
								<Typography
									variant="body2"
									color="text.secondary"
									sx={{
										fontSize: 16,
										color: "grey",
										mb: 1,
									}}
								>
									Market Cap: {millify(currency.marketCap)}
								</Typography>
								<Typography
									variant="body2"
									color="text.secondary"
									sx={{
										fontSize: 16,
										color: "grey",
									}}
								>
									Daily Change: {millify(currency.change)}%
								</Typography>
							</CardContent>
							<CardActions
								sx={{
									display: "flex",
									justifyContent: "flex-end",
									bgcolor: "#1976d2",
								}}
							>
								<Link to={""}>
									<IconButton
										sx={{
											color: "white",
										}}
									>
										<AddIcon />
									</IconButton>
								</Link>
								<Link to={`/crypto/${currency.uuid}`}>
									<IconButton
										sx={{
											color: "white",
										}}
									>
										<ReadMoreIcon />
									</IconButton>
								</Link>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default Cryptocurrencies;
