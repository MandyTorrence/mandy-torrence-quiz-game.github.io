var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("timer").innerHTML = d.toLocaleTimeString();
}
var pos = 0, quiz, quiz_status, question, choice, choices, ansA, ansB, ansC, ansD, correct = 0;
var questions = [
  ['What Gryffindor student and their brother sneak back into the castle to help fight in the final battle?', 'Piers Polkiss', 'Colin Creevey', 'Peter Pettigrew', 'Leta LaStrange', 'B'],
  ['Which house ghost met their end after people grew suspicious of their ability to cure the pox?', 'The Bloody Baron', 'Nearly-Headless Nick', 'The Fat Friar', 'Moaning Myrtle', 'C'],
  ['The Gray Lady was the daughter of which Hogwarts founder?', 'Helga Hufflepuff', 'Godric Gryffindor', 'Salazar Slytherin', 'Rowena Ravenclaw', 'D'],
  ['Along with Harry who was attacked by the dementors?', 'Dudley Dursley', 'Stan Shunpike', 'Padma Patil', 'Cho Chang', 'A'],
  ['Which Slytherin wanted to turn Harry over to Voldemort?', 'Gellert Grindelwald', 'Piers Polkiss', 'Pansy Parkinson', 'Gregory Goyle', 'C'],
  ['What Quidditch team does Cho Chang support?', 'Holyhead Harpies', 'Chudley Cannons', 'Kenmare Kestrels', 'Tutshill Tornados', 'D'],
  ['Who was not really themselves when Harry first met them?', 'Cho Chang', 'Bathilda Bagshot', 'Stan Shunpike', 'Parvati Patil', 'B'],
  ['Which was the only staff member not to fight in the battle of Hogwarts?', 'Filius Flitwick', 'Minerva McGonagall', 'Poppy Pomfrey', 'Severus Snape', 'D'],
  ["Who spoke at Dobby's funeral?", 'Luna Lovegood', 'Cho Chang', 'Padma Patil', 'Colin Creevey', 'A'],
  ["Which Hogwarts founder's descendant founded the American wizarding school, Ilvermorny?", 'Helga Hufflepuff', 'Godric Gryffindor', 'Salazar Slytherin', 'Rowena Ravenclaw', 'D']
];

function get(x) {
  return document.getElementById(x);
}
var quiz = get("#quiz");
function renderQuestion() {

  if (pos >= questions.length) {
    quiz.append("You got " + correct + " of " + questions.length + " questions correct");
    $('#quiz_status').append("Quiz Completed");
    pos = 0;
    correct = 0;
    return false;
  }
  $('#quiz_status').append("Question " + (pos + 1) + " of " + questions.length);
  var question = questions[pos][0];
  var ansA = questions[pos][1];
  var ansB = questions[pos][2];
  var ansC = questions[pos][3];
  var ansD = questions[pos][4];
  $("#quiz").append("<h4>" + question + "</h4>");
  $("#quiz").append("<input type='radio' name='choices' value='A'> " + ansA + "<br>");
  $("#quiz").append("<input type='radio' name='choices' value='B'> " + ansB + "<br>");
  $("#quiz").append("<input type='radio' name='choices' value='C'> " + ansC + "<br>");
  $("#quiz").append("<input type='radio' name='choices' value='D'> " + ansD + "<br><br>");
  $("#quiz").append("<button onclick='checkAnswer()'>Submit</button>");
}
function checkAnswer() {
  choices = document.getElementsByName("choices");
  var scoreUpdate = $(document).find("#quiz")
  $(scoreUpdate).text(question);
  for (var i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      choice = choices[i].value;
    }
  }
  if (choice == questions[pos][5]) {
    correct++;
  }

  pos++;
  $("#quiz_status").empty();
  $("#quiz").empty();
  renderQuestion();
}
window.addEventListener("load", renderQuestion, false);