import React from "react";
import moment from "moment/moment";
import {
	CardActions,
	CardContent,
	Typography,
	Card,
	Box,
	IconButton,
} from "@mui/material";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import demoImage from "../../assets/image/th.jpg";

const NewsItem = ({ news }) => {
	return (
		<Card hoverable="true">
			<CardContent>
				<Typography
					sx={{
						textAlign: "center",
						fontSize: 20,
						fontWeight: "bold",
						mb: 2,
						pb: 1,
						borderBottom: 0.5,
						borderColor: "silver",
					}}
				>
					{news.name}
				</Typography>
				<Box
					sx={{
						display: "flex",
					}}
				>
					<img
						height="100"
						width="100"
						src={news?.image?.thumbnail?.contentUrl || demoImage}
						alt="green iguana"
					/>
					<Typography
						sx={{
							ml: 2,
							fontSize: 18,
						}}
					>
						{news.description}
					</Typography>
				</Box>
			</CardContent>
			<CardActions
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					p: 2,
					bgcolor: "#1976d2",
					color: "white",
				}}
			>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
					}}
				>
					<img
						src={
							news.provider[0]?.image?.thumbnail?.contentUrl ||
							demoImage
						}
						width="50"
						height="50"
						alt=""
					/>
					<Typography
						sx={{
							ml: 2,
							fontSize: 20,
							fontWeight: "bold",
						}}
					>
						{news.provider[0]?.name}
					</Typography>
				</Box>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						gap: 1.5,
					}}
				>
					<Typography>
						{moment(news.datePublished).startOf("ss").fromNow()}
					</Typography>
					<a
						href={news.url}
						target="_blank"
						rel="noreferrer"
						title="Get more information about the news"
					>
						<IconButton
							sx={{
								color: "white",
							}}
						>
							<ReadMoreIcon />
						</IconButton>
					</a>
				</Box>
			</CardActions>
		</Card>
	);
};

export default NewsItem;
