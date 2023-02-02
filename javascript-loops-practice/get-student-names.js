/* exported getStudentNames */
function getStudentNames(students) {
  var newStudents = [];
  for (var i = 0; i < students.length; i++) {
    var newList = students[i].name;
    newStudents.push(newList);
  }
  return newStudents;
}
