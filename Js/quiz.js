
export default class Quiz{
    constructor(category , difficulty , questionsNum){
        this.category = category ;
        this.difficulty = difficulty;
        this.questionsNum = questionsNum;
        this.score = 0;
    };

    async GetQuestions(){
        const response = await fetch(`https://opentdb.com/api.php?amount=${this.questionsNum}&category=${this.category}&difficulty=${this.difficulty}`);
        const data = await response.json();
        return data.results;


    };

    EndQuiz(){
        return`
        <div class="shadow-lg p-4 rounded-3 d-flex flex-column justify-content-center align-items-center  bg-light">
        
        <h2 class=" h4 text-center py-4">your score is ( ${this.score} ) </h2>  

        <button type="button" class="btn btn-primary  w-100 rounded-pill" id="try-again"> <i class="fa-solid fa-arrows-rotate"></i> try Again</button>

        
               
      </div>
        `
    }

    
}