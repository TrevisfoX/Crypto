import React from "react";
import { Link } from "react-router-dom";
import {
	Card,
	CardContent,
	Typography,
	CardActions,
	IconButton,
} from "@mui/material";
import millify from "millify";
import AddIcon from "@mui/icons-material/Add";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

const CoinItem = ({ currency }) => {
	return (
		<Card
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
				<IconButton
					sx={{
						color: "white",
					}}
				>
					<AddIcon />
				</IconButton>
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
	);
};

export default CoinItem;
