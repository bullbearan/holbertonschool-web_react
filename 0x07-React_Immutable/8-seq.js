import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const capitalizetheletter = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const students = Seq(object)
    .filter((grade) => grade.score > 70)
    .map((student) => ({
      score: student.score,
      firstName: capitalizetheletter(student.firstName),
      lastName: capitalizetheletter(student.lastName),
    }))
    .toJS();
  
  console.log(students);
}
