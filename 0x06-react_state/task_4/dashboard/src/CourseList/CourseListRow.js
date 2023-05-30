import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const row = { backgroundColor: "#f5f5f5ab" };
const header = { backgroundColor: "#deb5b545" };

export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
	const [isRowChecked, setIsRowChecked] = useState(false);
	const handleRowCheckbox = () => {
		setIsRowChecked(!isRowChecked);
	};

	const itemStyle = css(isHeader ? styles.th : styles.td, isRowChecked && styles.rowChecked);
	if (isHeader && textSecondCell === null) {
		return (
			<tr>
				<th colSpan={2}>{textFirstCell}</th>
			</tr>
		);
	} else if (isHeader && textSecondCell !== null) {
		return (
			<tr>
				<th className={itemStyle} style={header}>
					{textFirstCell}
				</th>
				<th className={itemStyle} style={header}>
					{textSecondCell}
				</th>
			</tr>
		);
	} else if (!isHeader) {
		return (
			<tr>
				<td className={itemStyle} style={row}>
					<input type="checkbox" onClick={handleRowCheckbox}></input>
					{textFirstCell}
				</td>
				<td className={itemStyle} style={row}>
					{textSecondCell}
				</td>
			</tr>
		);
	}
}

CourseListRow.defaultProps = {
	isHeader: false,
	textSecondCell: null,
};

CourseListRow.propTypes = {
	isHeader: PropTypes.bool,
	textFirstCell: PropTypes.string.isRequired,
	textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const styles = StyleSheet.create({
	th: {
		textAlign: "left",
		borderTop: "2px solid hsl(0, 0%, 86%)",
		borderBottom: "2px solid hsl(0, 0%, 86%)",
	},

	td: {
		marginTop: "2px",
	},

	rowChecked: {
		backgroundColor: "#e6e4e4",
	},
});
