const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
  {
    question: "What is the best color?",
    answers: {
      a: "Black",
      b: "Midnight Blue",
      c: "White, obviously"
    },
    correctAnswer: "b"
  },
  {
    question: "What is the best site ever created?",
    answers: {
      a: "Facebook",
      b: "Bootstrap",
      c: "Trick question; quiz taker's preference is unknown"
    },
    correctAnswer: "c"
  },
  {
    question: "Where is Carmen Sandiego really?",
    answers: {
      a: "Antarctica",
      b: "Exploring the Pacific Ocean",
      c: "Around the world in 80 days",
      d: "Minding her own business, so stop asking"
    },
    correctAnswer: "d"
  }
];

function buildQuiz() {
  // we'll need a place to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {


      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
 }

function showResults() { }

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);