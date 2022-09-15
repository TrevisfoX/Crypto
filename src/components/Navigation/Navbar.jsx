import * as React from "react";
import { AppBar, IconButton, Container } from "@mui/material";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import LoginIcon from "@mui/icons-material/Login";

const Navbar = () => {
	return (
		<AppBar
			position="static"
			sx={{
				p: 2,
			}}
		>
			<Container
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-evenly",
				}}
			>
				<Link to="/">
					<IconButton sx={{}}>
						<HomeOutlinedIcon
							sx={{
								color: "white",
							}}
						/>
					</IconButton>
				</Link>
				<Link to="/cryptocurrencies">
					<IconButton>
						<BusinessCenterOutlinedIcon
							sx={{
								color: "white",
							}}
						/>
					</IconButton>
				</Link>
				<Link to="/favorites">
					<IconButton>
						<FavoriteOutlinedIcon
							sx={{
								color: "white",
							}}
						/>
					</IconButton>
				</Link>
				<Link to="/news">
					<IconButton>
						<NewspaperOutlinedIcon
							sx={{
								color: "white",
							}}
						/>
					</IconButton>
				</Link>
				<IconButton>
					<LoginIcon
						sx={{
							color: "white",
						}}
					/>
				</IconButton>
			</Container>
		</AppBar>
	);
};

export default Navbar;
