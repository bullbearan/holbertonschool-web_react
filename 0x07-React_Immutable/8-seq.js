import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const students = Seq(object)
    .filter((grade) => grade.score > 70)
    .map((student) => ({
      score: student.score,
      firstName: capitalize(student.firstName),
      lastName: capitalize(student.lastName),
    }))
    .toObject();
  
  console.log(students);
}
