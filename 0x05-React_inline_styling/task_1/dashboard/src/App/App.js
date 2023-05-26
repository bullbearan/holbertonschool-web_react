import React, { Component } from "react";
import Notifications from "../Notifications/Notifications.js";
import Login from "../Login/Login.js";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList.js";
import { getLatestNotification } from "../utils/utils";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import { StyleSheet, css } from "aphrodite";

const listCourses = [
	{ id: 1, name: "ES6", credit: 60 },
	{ id: 2, name: "Webpack", credit: 20 },
	{ id: 3, name: "React", credit: 40 },
];

const listNotifications = [
	{ id: 1, type: "default", value: "New course available" },
	{ id: 2, type: "urgent", value: "New resume available" },
	{ id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

export default class App extends Component {
	constructor(props) {
		super(props);
		this.handleCtrlH = this.handleCtrlH.bind(this);
	}

	handleCtrlH(e) {
		if (e.key === "h" && e.ctrlKey) {
			alert("Logging you out");
			this.props.logOut();
		}
	}

	componentDidMount() {
		document.addEventListener("keydown", this.handleCtrlH);
	}

	componentWillUnmount() {
		document.removeEventListener("keydown", this.handleCtrlH);
	}

	render() {
		const { isLoggedIn } = this.props;
		return (
			<React.Fragment>
				<Notifications listNotifications={listNotifications} />
				<div className={css(styles.all)}>
					<Header />
				</div>
				<div className={css(styles.body)}>
					{isLoggedIn ? (
						<BodySectionWithMarginBottom title="Course list">
							<CourseList listCourses={listCourses} />
						</BodySectionWithMarginBottom>
					) : (
						<BodySectionWithMarginBottom title="Log in to continue">
							<Login />
						</BodySectionWithMarginBottom>
					)}
				</div>
				<BodySection title="News from the School">
					<p>random text</p>
				</BodySection>
				<div className={css(styles.all, styles.footer)}>
					<Footer />
				</div>
			</React.Fragment>
		);
	}
}

App.defaultProps = {
	isLoggedIn: false,
	logOut: () => {},
};

App.propTypes = {
	isLoggedIn: PropTypes.bool,
	logOut: PropTypes.func,
};

const styles = StyleSheet.create({
	all: {
		padding: "0px",
		margin: "0px",
		boxSizing: "border-box",
	},

	body: {
		fontSize: "20px",
		height: "60vh",
		paddingTop: "80px",
		paddingLeft: "45px",
	},

	footer: {
		fontSize: '20px',
		textAlign: 'center',
		fontStlye: 'italic',
		padding: '20px',
		borderTop: '4px solid #e0374f',
	}
});
