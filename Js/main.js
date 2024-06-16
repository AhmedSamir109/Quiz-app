import Questions from "./questions.js";
import Quiz from "./quiz.js";

export const quizOptions = document.querySelector('.quiz-options');
export const categoryMenu = document.getElementById('categoryMenu');
export const difficultyLevel = document.getElementById('difficultyLevel');
export const questionsNum = document.getElementById('questionsNum');
const startBtn = document.getElementById('StartBtn');
export const questionsContainer = document.querySelector('.questions-container');

export let questions = []
export let newQuiz ={};

startBtn.addEventListener('click' , async function(){

    newQuiz = new Quiz(categoryMenu.value , difficultyLevel.value , questionsNum.value)

    questions =await newQuiz.GetQuestions()

    questionsContainer.classList.replace('d-none' , 'd-block')

    quizOptions.classList.replace("d-block", "d-none");

    console.log(questions)

    const newQuestion = new Questions(0)
    console.log(newQuestion.question);
    newQuestion.DisplayQuestion();
})


