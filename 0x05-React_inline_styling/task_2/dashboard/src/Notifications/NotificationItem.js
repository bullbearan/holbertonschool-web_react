import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const NotificationItem = React.memo(function NotificationItem({
	type,
	value,
	html,
	markAsRead,
	id,
}) {
	let typeStyle = css(type === "default" ? styles.default : styles.urgent);
	return (
		<>
			{value && (
				<li
					className={typeStyle}
					data-notification-type={type}
					onClick={() => markAsRead(id)}>
					{value}
				</li>
			)}
			{!value && (
				<li
					className={typeStyle}
					data-notification-type={type}
					dangerouslySetInnerHTML={html}
					onClick={() => markAsRead(id)}
				/>
			)}
		</>
	);
});

NotificationItem.defaultProps = {
	type: "default",
	value: "",
	html: { __html: "" },
	markAsRead: () => {},
	id: NaN,
};

NotificationItem.propTypes = {
	type: PropTypes.string,
	value: PropTypes.string,
	html: PropTypes.shape({
		__html: PropTypes.string,
	}),
	markAsRead: PropTypes.func,
	id: PropTypes.number,
};

const styles = StyleSheet.create({
	default: {
		color: "blue",
		marginTop: "15px",
		marginLeft: "40px",
	},

	urgent: {
		color: "red",
		marginLeft: "40px",
	},
});

export default NotificationItem;
