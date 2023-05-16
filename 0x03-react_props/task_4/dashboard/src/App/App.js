import React from "react";
import Notifications from "../Notifications/Notifications.js";
import Login from "../Login/Login.js";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList.js";

export default function App({ isLoggedIn }) {
	return (
		<React.Fragment>
			<Notifications />
			<div className="App">
				<Header />
				<div className="App-body">{isLoggedIn ? <CourseList /> : <Login />}</div>
				<div className="App-footer">
					<Footer />
				</div>
			</div>
		</React.Fragment>
	);
}

App.defaultProps = {
	isLoggedIn: false,
};

App.propTypes = {
	isLoggedIn: PropTypes.bool,
};
