import React, { Component } from "react";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

class Notifications extends Component {
	constructor(props) {
		super(props);
		this.markAsRead = this.markAsRead.bind(this);
	}

	shouldComponentUpdate(nextProps) {
		return (
			nextProps.listNotifications.length > this.props.listNotifications.length ||
			nextProps.displayDrawer !== this.props.displayDrawer
		);
	}

	markAsRead(id) {
		console.log(`Notification ${id} has been marked as read`);
	}

	render() {
		const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer } =
			this.props;
		const check = css(displayDrawer ? styles.hidenoP : styles.noP);
		return (
			<>
				<div id="openNotification" className={check} onClick={handleDisplayDrawer}>
					<p>Your notifications</p>
				</div>
				{displayDrawer && (
					<div className={css(styles.Notifications)}>
						<button
							id="closeBtn"
							className={css(styles.closeBtn)}
							style={{
								position: "absolute",
								top: "10px",
								right: "15px",
								width: "20px",
								height: "20px",
								border: "none",
								cursor: "pointer",
							}}
							aria-label="Close"
							onClick={handleHideDrawer}></button>
						<p>Here is the list of notifications</p>
						<ul className={css(styles.nopadding)}>
							{listNotifications.length === 0 && (
								<NotificationItem value="No new notification for now" />
							)}

							{listNotifications.map((notification) => (
								<NotificationItem
									key={notification.id}
									type={notification.type}
									value={notification.value}
									html={notification.html}
									markAsRead={this.markAsRead}
								/>
							))}
						</ul>
					</div>
				)}
			</>
		);
	}
}

Notifications.defaultProps = {
	displayDrawer: false,
	listNotifications: [],
	handleDisplayDrawer: () => {},
	handleHideDrawer: () => {},
};

Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape),
	handleDisplayDrawer: PropTypes.func,
	handleHideDrawer: PropTypes.func,
};

const opacityKeyframes = {
	from: {
		opacity: 0.5,
	},

	to: {
		opacity: 1,
	},
};

const translateKeyframes = {
	"0%": {
		transform: "translateY(0)",
	},

	"50%": {
		transform: "translateY(-5px)",
	},

	"75%": {
		transform: "translateY(5px)",
	},

	"100%": {
		transform: "translateY(0)",
	},
};

const styles = StyleSheet.create({
	nopadding: {
		"@media (max-width: 900px)": {
			padding: "0px",
			listStyle: "none",
		},
	},

	Notifications: {
		position: "absolute",
		border: "2px dashed #e0374f",
		padding: "25px 15px",
		marginBottom: "16px",
		marginTop: "10px",
		width: "480px",
		right: "15px",
		"@media (max-width: 900px)": {
			fontSize: "20px",
			width: "100vw",
			height: "100vh",
			backgroundColor: "white",
			padding: "0px",
			margin: "0px",
			right: "0",
			top: "0",
			border: "none",
		},
	},

	closeBtn: {
		":after": {
			display: "inline-block",
			content: '"X"',
			color: "black",
			"font-weight": "300",
		},
	},

	noP: {
		textAlign: "right",
		paddingRight: "15px",
		float: "right",
		backgroundColor: "#fff8f8",
		":hover": {
			cursor: "pointer",
			animationName: [opacityKeyframes, translateKeyframes],
			animationDuration: "1s, 0.5s",
			animationIterationCount: 3,
		},
	},
	hidenoP: {
		display: "none",
	},
});

export default Notifications;
