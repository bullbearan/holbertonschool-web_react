import { selectCourse, unSelectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe("0x08 react - task 3", function () {
	it("0x08 react - task 3", function () {
		expect(selectCourse(1)).toEqual({ type: SELECT_COURSE, index: 1 });
	});
	it("0x08 react - task 3", function () {
		expect(unSelectCourse(1)).toEqual({ type: UNSELECT_COURSE, index: 1 });
	});
});
