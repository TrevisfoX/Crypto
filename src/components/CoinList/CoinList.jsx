import React, { useState, useEffect } from "react";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import Loader from "../Loader/Loader";
import { Grid, TextField, Box } from "@mui/material";
import CoinItem from "../CoinItem/CoinItem";

const CoinList = ({ simplified }) => {
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
				{cryptos?.map((currency, index) => (
					<Grid item md={4} key={index}>
						<CoinItem currency={currency} />
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default CoinList;
