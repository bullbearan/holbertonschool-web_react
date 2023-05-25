import React from "react";
import { StyleSheet, css } from "aphrodite";

export default function Login() {
	return (
		<>
			<p className={css(styles.bodyP)}>Login to access the full dashboard</p>
			<label htmlFor="email">Email: </label>
			<input className={css(styles.bodyInput)} type="email" id="email" name="email"></input>
			<label htmlFor="password">Password: </label>
			<input
				className={css(styles.bodyInput)}
				type="password"
				id="password"
				name="password"></input>
			<button className={css(styles.bodyBtn)}>OK</button>
		</>
	);
}

const styles = StyleSheet.create({

	bodyP: {
		marginBottom: "14px",
	},

	bodyBtn: {
		padding: "3px 6px",
		backgroundColor: "transparent",
		boxShadow: "0 0 3px hsl(0, 0%, 0%, 0.5)",
		borderRadius: "4px",
		border: "none",
	},

	bodyInput: {
		marginInline: "10px",
	},
});
