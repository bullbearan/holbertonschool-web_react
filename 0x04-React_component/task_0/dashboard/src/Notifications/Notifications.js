import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

const Notifications = ({ displayDrawer, listNotifications }) => {
	return (
		<React.Fragment>
			<div className="menuItem">
				<p>Your notifications</p>
			</div>
			{displayDrawer && (
				<div className="Notifications">
					<button
						style={{
							position: "absolute",
							top: "10px",
							right: "15px",
							width: "20px",
							height: "20px",
							border: "none",
						}}
						aria-label="Close"
						onClick={() => {
							console.log("Close button has been clicked");
						}}>
						<img src={closeIcon} alt="close icon" className="btn-close"></img>
					</button>
					<p>Here is the list of notifications</p>
					<ul>
						{listNotifications.length === 0 && (
							<NotificationItem value="No new notification for now" />
						)}

						{listNotifications.map((notification) => (
							<NotificationItem
								key={notification.id}
								type={notification.type}
								value={notification.value}
								html={notification.html}
							/>
						))}
					</ul>
				</div>
			)}
		</React.Fragment>
	);
};

Notifications.defaultProps = {
	displayDrawer: false,
	listNotifications: [],
};

Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
