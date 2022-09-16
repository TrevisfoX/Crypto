import React from "react";
import { Line } from "react-chartjs-2";
import {
	Chart,
	LineController,
	LineElement,
	PointElement,
	LinearScale,
	CategoryScale,
} from "chart.js";
import {
	TableCell,
	TableContainer,
	TableRow,
	Typography,
	Table,
} from "@mui/material";

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
	Chart.register(
		LineController,
		LineElement,
		PointElement,
		LinearScale,
		CategoryScale
	);
	const coinPrice = [];
	const coinTimestamp = [];
	for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
		coinPrice.push(coinHistory?.data?.history[i].price);
	}
	for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
		coinTimestamp.push(
			//Incorrect time data in API
			// new Date(
			// 	coinHistory?.data?.history[i].timestamp
			// ).toLocaleDateString()
			new Date().toLocaleDateString()
		);
	}
	const data = {
		labels: coinTimestamp,
		datasets: [
			{
				label: "Price In USD",
				data: coinPrice,
				fill: false,
				backgroundColor: "#0071bd",
				borderColor: "#0071bd",
			},
		],
	};
	const options = {
		scales: {
			y: [
				{
					ticks: {
						beginAtZero: true,
					},
				},
			],
		},
	};

	return (
		<>
			<TableContainer>
				<Table>
					<TableRow>
						<Typography>{coinName} Price Chart </Typography>
						<TableCell>
							<Typography>
								Change: {coinHistory?.data?.change}%
							</Typography>
							<Typography>
								Current {coinName} Price: $ {currentPrice}
							</Typography>
						</TableCell>
					</TableRow>
				</Table>
			</TableContainer>
			<Line data={data} options={options} />
		</>
	);
};

export default LineChart;
