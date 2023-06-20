// Definir las preguntas y respuestas
    var questions = [
      {
        question: `A company is planning to replace its physical on-premises compute servers with AWS serverless compute services. The company wants to be able to take advantage of advanced technologies quickly after the migration.
Which pillar of the AWS Well-Architected Framework does this plan represent?`,
        options: ["Security", "Performance efficiency", "Operational excellence", "Reliability"],
        correctAnswers: [1],
        explanation: `Community vote distribution: B (79%) + C (21%)

B: Performance efficiency: The performance efficiency pillar focuses on the efficient use of computing resources to meet requirements, and how to maintain efficiency as demand changes and technologies evolve.

Operational Excellence: The operational excellence pillar includes how your organization supports your business objectives, your ability to run workloads effectively, gain insight into their operations, and to continuously improve supporting processes and procedures to deliver business value.

I understand why you could think it is C, but I believe the correct answer is B (key part: as demand changes and technologies evolve)

C: The Operational Excellence pillar of the AWS Well-Architected Framework focuses on running and managing systems to deliver business value, and continuously improving processes and procedures. The plan to replace physical on-premises compute servers with AWS serverless compute services represents a shift toward a more operationally efficient model, with benefits such as increased agility, faster time-to-market, and lower maintenance costs. Taking advantage of advanced technologies quickly after the migration further supports the idea of continuously improving processes and procedures to deliver business value.

The Performance Efficiency pillar (option B) focuses on optimizing the use of computing resources to ensure that a system can meet performance requirements at the lowest possible cost.`
      },
      {
        question: `A company is planning to run a global marketing application in the AWS Cloud. The application will feature videos that can be viewed by users. The company must ensure that all users can view these videos with low latency.
Which AWS service should the company use to meet this requirement?`,
        options: ["AWS Auto Scaling", "Amazon Kinesis Video Streams", "Elastic Load Balancing", "Amazon CloudFront"],
        correctAnswers: [3],
        explanation: "The best option for the company to ensure that users can view videos with low latency would be to use Amazon CloudFront. CloudFront is a content delivery network (CDN) that speeds up the delivery of static and dynamic web content, such as HTML, CSS, JavaScript, and images, as well as videos."
      },
      {
        question: "Which pillar of the AWS Well-Architected Framework refers to the ability of a system to recover from infrastructure or service disruptions and dynamically acquire computing resources to meet demand?",
        options: ["Security", "Reliability", "Performance efficiency", "Cost optimization"],
        correctAnswers: [1],
        explanation: `The reliability pillar focuses on workloads performing their intended functions and how to recover quickly from failure to meet demands. Key topics include distributed system design, recovery planning, and adapting to changing requirements.

https://aws.amazon.com/architecture/well-architected/`
      },
      {
        question: `Which AWS services or features provide disaster recovery solutions for Amazon EC2 instances? (Choose two.)`,
        options: ['2¡|*| Reserved Instances',"EC2 Amazon Machine Images (AMIs)", "Amazon Elastic Block Store (Amazon EBS) snapshots", "AWS Shield", "Amazon GuardDuty"],
        correctAnswers: [1,2],
        explanation: `The AWS services or features that provide disaster recovery solutions for Amazon EC2 instances are:

C. Amazon Elastic Block Store (Amazon EBS) snapshots: Amazon EBS is a block storage service for use with Amazon EC2 instances. EBS snapshots are point-in-time copies of an EBS volume that can be used to create a new volume or restore an existing volume. EBS snapshots can be used to recover data in the event of an instance failure, or to create a new instance in a different region or Availability Zone.

B. Amazon Machine Images (AMIs): An AMI is a pre-configured virtual machine image that contains the operating system, application software, and any other required components needed to launch an instance. AMIs can be used to create new instances in the same or a different region, which can be useful for disaster recovery purposes.

BC: AMI can help us to launch another instance with the same configurations. It uses the snapshot of root volume of the instance and other EBS volumes to create machine images.`
      }
    ];

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

  if (currentQuestionIndex === questions.length - 1) {
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
