import finalGrade from "./task1.js";
let message;

switch (finalGrade) {
  case "A":
    message += finalGrade + " и у Вас отличная уcпеваемость!";
    break;
  case "B":
    message += finalGrade + " и у Вас хорошая уcпеваемость!";
    break;
  case "C":
    message += finalGrade + " и у Вас удовлетворительная уcпеваемость!";
    break;
  case "D":
    message +=
      finalGrade +
      " и у Вас так себе уcпеваемость, подучите предмет и приходите пересдавать лабораторку!";
    break;
  case "F":
    message +=
      finalGrade +
      " и Вам прийдется  ооочень постараться, чтоб пересдать лабораторку!";
    break;
  default:
    message = "Введите корректную оценку";
}
document.write(message);
