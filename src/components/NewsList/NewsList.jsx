import React from "react";
import { Grid } from "@mui/material";
import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";
import Loader from "../Loader/Loader";
import NewsItem from "../NewsItem/NewsItem";

const News = ({ simplified }) => {
	const { data: cryptoNews } = useGetCryptoNewsQuery({
		count: simplified ? 6 : 12,
	});

	if (!cryptoNews?.value) return <Loader />;

	return (
		<>
			<Grid
				container
				spacing={5}
				sx={{
					mt: 5,
					pb: 6,
				}}
			>
				{cryptoNews.value.map((news) => (
					<Grid item md={12} key={news.name}>
						<NewsItem news={news} />
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default News;
