let grade, output;
grade = parseInt(grade);
grade = prompt("Пожалуйста, введите оценку по 100 бальной шкале");
if (isNaN(grade)) {
  document.getElementById("grade").innerHTML = "Пожалуйста, введите число";
} else if (grade > 100) {
  output = "Значение оценки не может быть больше 100 баллов";
} else if (grade >= 80) {
  output = "A";
} else if (grade >= 70) {
  output = "B";
} else if (grade >= 60) {
  output = "C";
} else if (grade >= 50) {
  output = "D";
} else if (grade >= 0) {
  output = "F";
} else if (grade < 0) {
  output = "Значение оценки не может быть меньше 0 баллов";
}
//document.write(output);
export default output;
