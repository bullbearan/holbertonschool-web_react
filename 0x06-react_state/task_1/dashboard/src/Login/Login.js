import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: props.isLoggedIn,
			email: "",
			password: "",
			enableSubmit: false,
		};
		this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
	}

	handleLoginSubmit(event) {
		event.preventDefault();
		this.setState({ isLoggedIn: true });
	}

	handleChangeEmail(event) {
		const { value } = event.target;
		const { password } = this.state;
		if (value === "" && password === "") this.setState({ enableSubmit: false });
		else this.setState({ enableSubmit: true });
		this.setState({ email: event.target.value });
	}

	handleChangePassword(event) {
		const { value } = event.target;
		const { email } = this.state;
		if (email === "" && value === "") this.setState({ enableSubmit: false });
		else this.setState({ enableSubmit: true });
		this.setState({ password: event.target.value });
	}

	render() {
		return (
			<>
				<p className={css(styles.bodyP)}>Login to access the full dashboard</p>
				<form action="" onSubmit={this.handleLoginSubmit}>
					<div className={css(styles.inline)}>
						<label htmlFor="email">Email: </label>
						<input
							className={css(styles.bodyInput)}
							type="email"
							id="email"
							name="email"
							value={this.state.email}
							onChange={this.handleChangeEmail}></input>
					</div>
					<div className={css(styles.inline)}>
						<label htmlFor="password">Password: </label>
						<input
							className={css(styles.bodyInput)}
							type="password"
							id="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChangePassword}></input>
					</div>
					<button
						type="submit"
						className={css(styles.bodyBtn)}
						disabled={!this.state.enableSubmit}>
						OK
					</button>
				</form>
			</>
		);
	}
}

const styles = StyleSheet.create({
	inline: {
		"@media (min-width: 900px)": {
			display: "inline-block",
		},
	},

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
		"@media (max-width: 900px)": {
			border: "none",
		},
	},
});

export default Login;
