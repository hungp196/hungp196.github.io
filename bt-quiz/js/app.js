function populate() {
  if (quiz.isEnded()) {
      showScore();
  }else {

    //showquestion
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    //showanswers
    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var el = document.getElementById("choice" + i);
      el.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }
  }
}

function showScore() {
  if(quiz.score==quiz.questions.length){
    window.location.assign("happy.html");
  }else {
    window.location.assign("sorry.html");
  }
}

function guess(id,guess) {
  var button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    populate();
  }
}

var questions = [
  new Question ("Quê bạn ở đâu?",["Hà Nội","Ninh Bình","Phú Thọ","Cao Bằng"],"Ninh Bình"),
  new Question ("Bạn tên là gì?", ["Hùng","Huy","Khánh","Cường"],"Hùng"),
  new Question ("Bạn làm nghề gì?", ["Graber","Developer","Tester","Coder"],"Graber")
];

var quiz = new Quiz(questions);

populate();
