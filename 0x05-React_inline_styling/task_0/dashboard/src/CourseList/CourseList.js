import React from "react";
import CourseListRow from "./CourseListRow.js";
import CourseShape from "./CourseShape";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

export default function CourseList({ listCourses }) {
	return (
		<table id="CourseList" className={css(styles.CourseList)}>
			<thead>
				<CourseListRow textFirstCell="Available courses" isHeader={true} />
				<CourseListRow
					textFirstCell="Course name"
					textSecondCell="Credit"
					isHeader={true}
				/>
			</thead>
			<tbody>
				{listCourses.length === 0 && (
					<CourseListRow textFirstCell="No course available yet" isHeader={false} />
				)}

				{listCourses.map((course) => (
					<CourseListRow
						key={course.id}
						textFirstCell={course.name}
						textSecondCell={course.credit}
						isHeader={false}
					/>
				))}
			</tbody>
		</table>
	);
}

CourseList.defaultProps = {
	listCourses: [],
};

CourseList.propTypes = {
	listCourses: PropTypes.arrayOf(CourseShape),
};

const styles = StyleSheet.create({
	CourseList: {
		border: "1px solid hsl(0,0%,86%)",
		width: "92%",
	},
});
