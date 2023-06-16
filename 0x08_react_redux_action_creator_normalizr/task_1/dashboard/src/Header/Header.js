import React, { Component } from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";
import { AppContext } from "../App/AppContext";

class Header extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { user, logOut } = this.context;

		return (
			<div className={css(styles.header)}>
				<img className={css(styles.img)} src={logo} alt="holberton logo" />
				<h1 className={css(styles.h1)}>School dashboard</h1>

				{user.isLoggedIn && (
					<p id="logoutSection">
						Welcome <b>{`${user.email} `}</b>
						<span onClick={logOut}>(logout)</span>
					</p>
				)}
			</div>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		display: "flex",
		alignItems: "center",
		borderBottom: "4px solid #e0374f",
	},

	img: {
		height: "250px",
	},

	h1: {
		fontSize: "40px",
		color: "#e0374f",
	},
});

Header.contextType = AppContext;

export default Header;
