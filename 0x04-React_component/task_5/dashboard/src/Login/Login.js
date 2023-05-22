import "./Login.css";
import React from "react";

export default function Login() {
	return (
		<React.Fragment>
			<p>Login to access the full dashboard</p>
			<label htmlFor="email">Email: </label>
			<input type="email" id="email" name="email"></input>
			<label htmlFor="password">Password: </label>
			<input type="password" id="password" name="password"></input>
			<button>OK</button>
		</React.Fragment>
	);
}
