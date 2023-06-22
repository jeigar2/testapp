var currentQuestionIndex = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;
var currentExplanation = "";

// Mostrar la pregunta actual
function showQuestion() {
  var questionContainer = document.getElementById("question");
  var optionsContainer = document.getElementById("options");
  var checkBtn = document.getElementById("checkBtn");
  var explanationBtn = document.getElementById("explanationBtn");
  var nextBtn = document.getElementById("nextBtn");
  var counterContainer = document.getElementById("counter");

  var totalQuestions = questions.length;
  counterContainer.innerHTML = "Preguntas: [" + (currentQuestionIndex+1) + " de " + totalQuestions + "]";

  var currentQuestion = questions[currentQuestionIndex];

  questionContainer.innerHTML = "<div class='question'>" + currentQuestion.question + "</div>";
  currentExplanation = currentQuestion.explanation;
  
  // Determinar si la pregunta es de una sola respuesta o múltiples respuestas
  var isSingleAnswerQuestion = questions[currentQuestionIndex].correctAnswers.length === 1;

  var letter = "A".charCodeAt(0);
  optionsContainer.innerHTML = "";
  for (var i = 0; i < currentQuestion.options.length; i++) {
    var option = currentQuestion.options[i];
    var answerInput = document.createElement("input");
    answerInput.setAttribute("type", isSingleAnswerQuestion ? "radio" : "checkbox");
    answerInput.setAttribute("name", "answer");
    answerInput.setAttribute("value", i);
    optionsContainer.appendChild(answerInput);

    var label = document.createElement("label");
    label.innerHTML = String.fromCharCode(letter) + ") " + option;
    letter += 1;
    optionsContainer.appendChild(label);

    optionsContainer.appendChild(document.createElement("br"));
    optionsContainer.classList.remove("correct", "incorrect");
  }

  checkBtn.style.display = "block";
  explanationBtn.style.display = "none";
  nextBtn.style.display = "none";
}

// Comprobar la respuesta seleccionada
function checkAnswer() {
  var selectedAnswers = document.querySelectorAll('input[name="answer"]:checked');
  if (selectedAnswers.length === 0) {
    return; // No se seleccionó ninguna respuesta
  }

  var selectedAnswerIndices = Array.from(selectedAnswers).map(function (answer) {
    return parseInt(answer.value);
  });

  var currentQuestion = questions[currentQuestionIndex];

  // Verificar si las respuestas seleccionadas son todas las correctas
  var isCorrect = selectedAnswerIndices.length === currentQuestion.correctAnswers.length &&
    currentQuestion.correctAnswers.every(function (correctAnswer) {
      return selectedAnswerIndices.includes(correctAnswer);
    });

  if (isCorrect) {
    selectedAnswers.forEach(function (answer) {
      answer.nextSibling.classList.add("correct");
    });
    correctAnswers++;
  } else {
    selectedAnswers.forEach(function (answer) {
      answer.nextSibling.classList.add("incorrect");
    });
    incorrectAnswers++;
  }

  var checkBtn = document.getElementById("checkBtn");
  var explanationBtn = document.getElementById("explanationBtn");
  var nextBtn = document.getElementById("nextBtn");

  checkBtn.style.display = "none";
  explanationBtn.style.display = "block";
  nextBtn.style.display = "block";
}

// Mostrar la explicación de la respuesta
function showExplanation() {
  var explanation = document.getElementById("explanation");
  explanation.innerHTML = currentExplanation.replaceAll("\n", "<br>");
  explanation.style.display = "block";
}

// Deshabilitar las opciones después de seleccionar una respuesta
function disableOptions() {
  var options = document.querySelectorAll('input[name="answer"]');
  for (var i = 0; i < options.length; i++) {
    options[i].disabled = true;
  }
}

// Pasar a la siguiente pregunta
function nextQuestion() {
  var nextBtn = document.getElementById("nextBtn");
  var explanationBtn = document.getElementById("explanationBtn");
  var questionContainer = document.getElementById("question");
  var optionsContainer = document.getElementById("options");
  var explanation = document.getElementById("explanation");
  explanation.style.display = "none";

  nextBtn.style.display = "none";
  explanationBtn.style.display = "none";
  var totalQuestions = questions.length;
  if (currentQuestionIndex === totalQuestions - 1) {
    showSummary();
  } else {
    currentQuestionIndex++;
    questionContainer.innerHTML = "";
    optionsContainer.innerHTML = "";
    showQuestion();
  }
}

// Mostrar el resumen de preguntas acertadas y equivocadas
function showSummary() {
  var summaryContainer = document.getElementById("summary");
  summaryContainer.innerHTML = "<h2>Resumen</h2>" +
    "<p>Preguntas correctas: " + correctAnswers + "</p>" +
    "<p>Preguntas incorrectas: " + incorrectAnswers + "</p>" +
    "<button onclick='repeatIncorrectQuestions()'>Repetir preguntas incorrectas</button>";
  summaryContainer.style.display = "block";
}

// Repetir las preguntas incorrectas
function repeatIncorrectQuestions() {
  questions = questions.filter(function (question, index) {
    return index < currentQuestionIndex || !question.correctAnswers.every(function (correctAnswer) {
      return selectedAnswerIndices.includes(correctAnswer);
    });
  });

  currentQuestionIndex = 0;
  correctAnswers = 0;
  incorrectAnswers = 0;
  document.getElementById("summary").style.display = "none";
  showQuestion();
}

showQuestion();
