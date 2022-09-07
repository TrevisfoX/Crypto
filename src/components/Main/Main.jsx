import React from "react";
import DescriptionPage from "./DescriptionPage/DescriptionPage";
import HomePage from "./HomePage/HomePage";
import FavoritesPage from "./FavoritesPage/FavoritesPage";
import { Routes, Route } from "react-router-dom";

const Main = ({ coins }) => {
	return (
		<main>
			<Routes>
				<Route path="/" element={<HomePage coins={coins} />} />
				<Route
					path="/description"
					element={<DescriptionPage coins={coins} />}
				/>
				<Route path="/favorites" element={<FavoritesPage />} />
			</Routes>
		</main>
	);
};

export default Main;
