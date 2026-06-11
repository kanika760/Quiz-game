const quizbox = document.querySelector(".quiz-box");
const questioncontainer = document.querySelector(".question-container")
const quizstartbutton = document.querySelector(".quiz-start-button");
const quizanswer = document.querySelectorAll(".quiz-answer");
const quizquestionshow = document.querySelector(".quiz-question-show");


const quizQuestions = [
  {
    question: " What is the tallest mountain in the world?",
    answers: [
      { text: "K2", correct: false },
      { text: "Mount Everest", correct: true },
      { text: "Kangchenjunga", correct: false },
      { text: "Lhotse", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Vincent van Gogh", correct: false },
      { text: "Pablo Picasso", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: " Claude Monet", correct: false },
    ],
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Banana", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
  },
];

const currentQuiz = 0;
const score = 0;


const loadquiz = () => {
    const {question,answers} = quizQuestions[currentQuiz];
    console.log(answers);
    quizquestionshow.innerText = question;
};



// Add question screen and add eventlistener in start button
 
quizstartbutton.addEventListener("click", () => {
  if(quizbox.style.display !== 'none'){
     quizbox.style.display = 'none';
     questioncontainer.classList.remove("remove-question");
  }
});


loadquiz();