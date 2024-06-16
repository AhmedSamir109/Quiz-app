import { categoryMenu, difficultyLevel, newQuiz, questions, questionsContainer, questionsNum, quizOptions } from "./main.js";
import Quiz from "./quiz.js";

 
 export default class Questions{
    isAnswered = false ;
    constructor(index){
        this.index = index ;
        this.question = questions[index].question;
        this.correct = questions[index].correct_answer;
        this.wrong = questions[index].incorrect_answers;
        this.category = questions[index].category;
        this.allAnswers = this.GetAnswers();
        

    }


    GetAnswers() {
        const allAnswers = [...this.wrong , this.correct];
        return allAnswers.sort();
      };


    DisplayQuestion(){
        const questionMarkUp = `
    <div
      class="question shadow-lg p-4 rounded-3 d-flex flex-column justify-content-center align-items-center gap-3 bg-light"
    >
      <div class="w-100 d-flex justify-content-between">
        <span class="btn btn-category bg-warning text-light fw-medium">${this.category}</span>
        <span class="fs-6 btn btn-questions bg-primary text-light">${this.index + 1} of ${
      questions.length
    } Questions</span>
      </div>
      <h2 class="text-capitalize h4 text-center py-3">${this.question}</h2>  
      <ul class="choices w-100 list-unstyled m-0 d-flex flex-wrap text-center pb-4">
      ${this.allAnswers.map((choice) => `<li>${choice}</li>`).join("")}
      </ul>
             
    </div>
  `;

  questionsContainer.innerHTML = questionMarkUp;

  const allChoise = document.querySelectorAll('.choices li');

  allChoise.forEach((choise)=>{
    choise.addEventListener('click' , (e)=>{
        console.log(e.target.innerHTML)
        this.checkAnswer(e.target)
    })

  })

    }



    checkAnswer(answer){
        if(!this.isAnswered){
            this.isAnswered=true;

            if(answer.innerHTML == this.correct){
                console.log('true');
                answer.classList.add('bg-success', 'text-light', 'border-0' , 'animate__animated','animate__flipInY')
                newQuiz.score +=1;
            }else{
                console.log('false');
                answer.classList.add('bg-danger' ,'text-light', 'border-0' , 'animate__animated', 'animate__shakeX')
    
            }

            this.delayNextQuestion(answer)
        }
        
    }

    nextQuestion(){
        this.index++;
        if(this.index < questions.length){
            const nextQuestion = new Questions(this.index)
            questionsContainer.classList.replace( "animate__bounceOutRight" ,"animate__bounceIn");
            nextQuestion.DisplayQuestion();
            
            return;
        }

        questionsContainer.classList.replace( "animate__bounceOutRight" ,"animate__bounceIn");

        questionsContainer.innerHTML = newQuiz.EndQuiz();

        const tryAgain = document.getElementById('try-again')

        tryAgain.addEventListener('click' , function(){
            questionsContainer.classList.replace('d-block' , 'd-none')
            quizOptions.classList.replace('d-none' , 'd-block')
            categoryMenu.value = 'Choose Category'
            difficultyLevel.value = 'Choose Difficulty Level'
            questionsNum.value = ''
        })
    }


    delayNextQuestion(element){
        setTimeout(()=>{

            questionsContainer.classList.replace("animate__bounceIn" , "animate__bounceOutRight");

           
        } , 1200)

         setTimeout(()=>{
                this.nextQuestion()

            } , 2400)

    }
 }