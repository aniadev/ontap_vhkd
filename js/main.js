var level = 0;
var points = 0;
var submitButton = document.getElementById("submitButton");
var nextButton = document.getElementById("nextButton");
var answerChecker = document.getElementById("answerChecker");
var pointSpan = document.getElementById("pointSpan");

nextButton.onclick = (e) => {
  level++;
  if (level >= quizz.length) level = 0;
  a1.checked = a2.checked = a3.checked = a4.checked = false;
  submitButton.disabled = false;
  answerChecker.innerHTML = "";
  renderQuestion(level);
  renderLevel(level);
  nextButton.disabled = true;
};

submitButton.onclick = (e) => {
  // check answer
  var answer;
  if (a1.checked || a2.checked || a3.checked || a4.checked) {
    answer =
      (a1.checked && "A") ||
      (a2.checked && "B") ||
      (a3.checked && "C") ||
      (a4.checked && "D");
    // console.log(answer);
    submitButton.disabled = true;
    nextButton.disabled = false;
    // check correct
    if (answer === quizz[level].s) {
      answerChecker.innerHTML = "CORRECT";
      points++;
    } else {
      answerChecker.innerHTML = "INCORRECT, true answer: " + quizz[level].s;
    }
  } else {
    answerChecker.innerHTML = "No choice";
  }
  renderPoints();
};

renderQuestion(level);
nextButton.disabled = true;
renderLevel(level);
//================================================================
function renderQuestion(level) {
  document.getElementById("q").innerHTML = quizz[level].q;
  a1.labels[0].innerHTML = "A: " + quizz[level].a.A;
  a2.labels[0].innerHTML = "B: " + quizz[level].a.B;
  a3.labels[0].innerHTML = "C: " + quizz[level].a.C;
  a4.labels[0].innerHTML = "D: " + quizz[level].a.D;
}
//=============
function renderLevel(level) {
  document.getElementById("levelSpan").innerHTML = `${level + 1} / ${
    quizz.length
  }`;
}
//=============
function renderPoints() {
  pointSpan.innerHTML = `Correct: ${points} / ${level + 1}`;
}
