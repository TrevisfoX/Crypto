import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
	return (
		<header className="header">
			<nav className="nav">
				<img className="nav__logo" src="" alt="Logo" />
				<ul className="nav__list">
					<li className="nav__item">
						<Link className="nav__link" to={"/"}>
							Home
						</Link>
					</li>
					<li className="nav__item">
						<Link className="nav__link" to={"/favorites"}>
							Your coins
						</Link>
					</li>
				</ul>
				<div>
					<button>Log In</button>
				</div>
			</nav>
		</header>
	);
};

export default Header;
