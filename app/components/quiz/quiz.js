import { Component } from 'angular2/core';
import {QuizModel} from '../../models/quiz-model';
import {IONIC_DIRECTIVES} from 'ionic-angular';
// import {forwardRef} from 'angular2/core';


//forwardRef(() => IONIC_DIRECTIVES)

@Component({
    selector: 'quiz',
    template: `
        <div class="quiz">
            <h3>Question: {{qIndex}} of {{ numOfQuestions }}</h3>
            <p>{{ question }}</p>
            <div class="answers" *ngFor="#choice of multipleChoice; #i = index" (click)="showAnswer(i)">{{choice}}</div>
            <ion-row>
                <ion-col width-50><ion-icon name="checkmark"></ion-icon> Correct: {{ numOfCorrect }}</ion-col>
                <ion-col width-50><ion-icon name="close"></ion-icon> Wrong {{ numOfIncorrect }}</ion-col>
            </ion-row>
        </div>
    `,
    directives: [IONIC_DIRECTIVES]
})

export class Quiz {

    constructor() {
        this.quizModel = new QuizModel();
        this.qIndex = 0;
        this.numOfCorrect = 0;
        this.numOfIncorrect = 0;
        this.numOfQuestions =  this.quizModel.getNumOfQuestions();

        this.nextQuestion();
    }

    nextQuestion() {
        this.question = this.quizModel.getQuestion(this.qIndex);
        this.multipleChoice = this.quizModel.getMultipleChoice(this.qIndex);
    }

    showAnswer(index) {

        if (this.numOfQuestions > this.qIndex) {
            this.score(index);
            this.qIndex++
            this.nextQuestion();
        }

        this.isGameOver(this.qIndex);
    }

    score(index) {
        var num = this.quizModel.getAnswer(this.qIndex);
        if (num === index) {
            this.numOfCorrect += 1;
        } else {
            this.numOfIncorrect += 1;
        }
        
    }

    isGameOver(index) {
        if (index >= this.numOfQuestions) {
            console.log('game is over')
        }
    }
}

