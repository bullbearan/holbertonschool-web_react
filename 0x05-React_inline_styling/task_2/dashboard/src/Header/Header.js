import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";

export default function Header() {
	return (
		<div className={css(styles.header)}>
			<img className={css(styles.img)} src={logo} alt="holberton logo" />
			<h1 className={css(styles.h1)}>School dashboard</h1>
		</div>
	);
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
