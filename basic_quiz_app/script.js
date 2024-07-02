// Quiz questions and answers
const quizData = [
    {
        question: "Which instrument is known as the 'king of instruments'?",
        answers: {
            a: "Piano",
            b: "Guitar",
            c: "Organ"
        },
        correctAnswer: "c"
    },
    {
        question: "Who is known as 'The King of Pop'?",
        answers: {
            a: "Elvis Presley",
            b: "Michael Jackson",
            c: "Prince"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the standard tuning of a guitar from the lowest string to the highest?",
        answers: {
            a: "EADGBE",
            b: "EBGDAE",
            c: "DADGBE"
        },
        correctAnswer: "a"
    },
    {
        question: "Which famous composer wrote 'Für Elise'?",
        answers: {
            a: "Johann Sebastian Bach",
            b: "Ludwig van Beethoven",
            c: "Wolfgang Amadeus Mozart"
        },
        correctAnswer: "b"
    }
    // Add more questions as needed
];

// Variables to store quiz state
let currentQuestion = 0;
let score = 0;

// DOM elements
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

// Function to display quiz questions and options
function displayQuiz() {
    const question = quizData[currentQuestion];
    const answers = [];

    for (option in question.answers) {
        answers.push(
            `<label>
                <input type="radio" name="question${currentQuestion}" value="${option}">
                ${question.answers[option]}
            </label>`
        );
    }

    quizContainer.innerHTML = `
        <div class="question">${question.question}</div>
        <div class="answers">${answers.join('')}</div>
    `;
}

// Function to handle quiz submission
function checkAnswer() {
    const answerInputs = document.querySelectorAll(`input[name="question${currentQuestion}"]:checked`);
    let userAnswer = '';

    for (input of answerInputs) {
        userAnswer = input.value;
    }

    if (userAnswer === quizData[currentQuestion].correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        displayQuiz();
    } else {
        showResults();
    }
}

// Function to display quiz results
function showResults() {
    quizContainer.style.display = 'none';
    resultsContainer.innerHTML = `You scored ${score} out of ${quizData.length} questions.`;
}

// Event listener for submit button
submitButton.addEventListener('click', checkAnswer);

// Initial display of quiz
displayQuiz();