import { Seq } from 'immutable';

export function capitalizetheletter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function printBestStudents(object) {
  const students = Seq(object)
    .filter((grade) => grade.score > 70)
    .map((student) => ({
      ...student,
      firstName: capitalizetheletter(student.firstName),
      lastName: capitalizetheletter(student.lastName),
    }))
    .toJS();
  console.log(students);
}
