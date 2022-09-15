import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Row, Col } from "antd";
import {
	MoneyCollectOutlined,
	DollarCircleOutlined,
	FundOutlined,
	ExclamationCircleOutlined,
	StopOutlined,
	TrophyOutlined,
	CheckOutlined,
	NumberOutlined,
	ThunderboltOutlined,
} from "@ant-design/icons";
import {
	useGetCryptoDetailsQuery,
	useGetCryptoHistoryQuery,
} from "../../services/cryptoApi";
import LineChart from "../Chart/LineChart";
import Loader from "../Loader/Loader";
import {
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Table,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
// const { Title, Text } = Typography;
// const { Option } = Select;

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

	const stats = [
		{
			title: "Price to USD",
			value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
			icon: <DollarCircleOutlined />,
		},
		{ title: "Rank", value: cryptoDetails?.rank, icon: <NumberOutlined /> },
		{
			title: "24h Volume",
			value: `$ ${
				cryptoDetails?.volume && millify(cryptoDetails?.volume)
			}`,
			icon: <ThunderboltOutlined />,
		},
		{
			title: "Market Cap",
			value: `$ ${
				cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
			}`,
			icon: <DollarCircleOutlined />,
		},
		{
			title: "All-time-high(daily avg.)",
			value: `$ ${
				cryptoDetails?.allTimeHigh?.price &&
				millify(cryptoDetails?.allTimeHigh?.price)
			}`,
			icon: <TrophyOutlined />,
		},
	];

	const genericStats = [
		{
			title: "Number Of Markets",
			value: cryptoDetails?.numberOfMarkets,
			icon: <FundOutlined />,
		},
		{
			title: "Number Of Exchanges",
			value: cryptoDetails?.numberOfExchanges,
			icon: <MoneyCollectOutlined />,
		},
		{
			title: "Aprroved Supply",
			value: cryptoDetails?.supply?.confirmed ? (
				<CheckOutlined />
			) : (
				<StopOutlined />
			),
			icon: <ExclamationCircleOutlined />,
		},
		{
			title: "Total Supply",
			value: `$ ${
				cryptoDetails?.supply?.total &&
				millify(cryptoDetails?.supply?.total)
			}`,
			icon: <ExclamationCircleOutlined />,
		},
		{
			title: "Circulating Supply",
			value: `$ ${
				cryptoDetails?.supply?.circulating &&
				millify(cryptoDetails?.supply?.circulating)
			}`,
			icon: <ExclamationCircleOutlined />,
		},
	];

	if (isFetching) return <Loader />;

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

			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>
								{cryptoDetails.name} Value Statistics
							</TableCell>
							{stats.map(({ icon, title, value }) => {
								return (
									<TableCell>
										{icon} {title}{" "}
										{value === "$ undefined" ? (
											"no data available"
										) : (
											<p className="stats">{value}</p>
										)}
									</TableCell>
								);
							})}
						</TableRow>
					</TableHead>
				</Table>
			</TableContainer>

			<Col className="stats-container">
				<Col className="coin-value-statistics">
					<Col className="coin-value-statistics-heading">
						<h3 level={3} className="coin-details-heading">
							{cryptoDetails.name} Value Statistics
						</h3>
						<p>
							An overview showing the statistics of{" "}
							{cryptoDetails.name}, such as the base and quote
							currency, the rank, and trading volume.
						</p>
					</Col>
					{stats.map(({ icon, title, value }) => (
						<Col className="coin-stats">
							<Col className="coin-stats-name">
								<p>{icon}</p>
								<p>{title}</p>
							</Col>
							{value === "$ undefined" ? (
								"no data available"
							) : (
								<p className="stats">{value}</p>
							)}
						</Col>
					))}
				</Col>
				<Col className="other-stats-info">
					<Col className="coin-value-statistics-heading">
						<h3 level={3} className="coin-details-heading">
							Other Stats Info
						</h3>
						<p>
							An overview showing the statistics of{" "}
							{cryptoDetails.name}, such as the base and quote
							currency, the rank, and trading volume.
						</p>
					</Col>
					{genericStats.map(({ icon, title, value }) => (
						<Col className="coin-stats">
							<Col className="coin-stats-name">
								<p>{icon}</p>
								<p>{title}</p>
							</Col>
							<p className="stats">{value}</p>
						</Col>
					))}
				</Col>
			</Col>
			<Col className="coin-desc-link">
				<Row className="coin-desc">
					<h3 level={3} className="coin-details-heading">
						What is {cryptoDetails.name}?
					</h3>
					{HTMLReactParser(cryptoDetails.description)}
				</Row>
				<Col className="coin-links">
					<h3 level={3} className="coin-details-heading">
						{cryptoDetails.name} Links
					</h3>
					{cryptoDetails.links?.map((link) => (
						<Row className="coin-link" key={link.name}>
							<h3 level={5} className="link-name">
								{link.type}
							</h3>
							<a href={link.url} target="_blank" rel="noreferrer">
								{link.name}
							</a>
						</Row>
					))}
				</Col>
			</Col>
		</>
	);
};

export default CryptoDetails;
