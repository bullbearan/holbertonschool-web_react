import React from "react";
import PropTypes from "prop-types";

const row = { backgroundColor: "#f5f5f5ab" };
const header = { backgroundColor: "#deb5b545" };

export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
	if (isHeader && textSecondCell === null) {
		return (
			<tr>
				<th colSpan={2}>{textFirstCell}</th>
			</tr>
		);
	} else if (isHeader && textSecondCell !== null) {
		return (
			<tr>
				<th style={header}>{textFirstCell}</th>
				<th style={header}>{textSecondCell}</th>
			</tr>
		);
	} else if (!isHeader) {
		return (
			<tr>
				<td style={row}>{textFirstCell}</td>
				<td style={row}>{textSecondCell}</td>
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
