import React, { useState } from "react";
import moment from "moment/moment";
import {
	CardActions,
	CardContent,
	Grid,
	Typography,
	Card,
	MenuItem,
	FormControl,
	InputLabel,
	Select,
	Box,
	IconButton,
} from "@mui/material";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import demoImage from "../../assets/image/th.jpg";
import Loader from "../Loader/Loader";

const News = ({ simplified }) => {
	const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
	const { data } = useGetCryptosQuery(100);
	const { data: cryptoNews } = useGetCryptoNewsQuery({
		newsCategory,
		count: simplified ? 6 : 12,
	});
	if (!cryptoNews?.value) return <Loader />;

	return (
		<>
			{!simplified && (
				<FormControl variant="standard" sx={{ my: 5, minWidth: "25%" }}>
					<InputLabel>Select a coin</InputLabel>
					<Select
						showSearch
						optionFilterProp="children"
						onChange={(value) => setNewsCategory(value)}
						filterOption={(input, option) =>
							option.children
								.toLowerCase()
								.indexOf(input.toLowerCase()) >= 0
						}
					>
						<MenuItem value="Cryptocurency">
							<em>None</em>
						</MenuItem>
						{data?.data?.coins?.map((currency) => (
							<MenuItem value={currency.name}>
								{currency.name}
							</MenuItem>
						))}
					</Select>
				</FormControl>
				// <Col span={24}>
				// 	<Select
				// 		showSearch
				// 		className="select-news"
				// 		placeholder="Select a Coin"
				// 		optionFilterProp="children"
				// 		onChange={(value) => setNewsCategory(value)}
				// 		filterOption={(input, option) =>
				// 			option.children
				// 				.toLowerCase()
				// 				.indexOf(input.toLowerCase()) >= 0
				// 		}
				// 	>
				// 		<Option value="Cryptocurency">Cryptocurrency</Option>
				// 		{data?.data?.coins?.map((currency) => (
				// 			<Option value={currency.name}>
				// 				{currency.name}
				// 			</Option>
				// 		))}
				// 	</Select>
				// </Col>
			)}
			<Grid
				container
				spacing={5}
				sx={{
					pb: 6,
				}}
			>
				{cryptoNews.value.map((news, i) => (
					<Grid item md={12}>
						<Card hoverable className="news-card">
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
										src={
											news?.image?.thumbnail
												?.contentUrl || demoImage
										}
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
											news.provider[0]?.image?.thumbnail
												?.contentUrl || demoImage
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
										{moment(news.datePublished)
											.startOf("ss")
											.fromNow()}
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
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default News;
