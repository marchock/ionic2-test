import {Page, NavController} from 'ionic-angular';
import {forwardRef} from 'angular2/core';
import {PagePopPage} from '../page-pop/page-pop';
import {Share} from '../../components/share/share';
import {Test} from '../../components/test/test';
import {Quiz} from '../../models/quiz';



@Page({
  templateUrl: 'build/pages/page1/page1.html',
  directives: [forwardRef(() => Share), forwardRef(() => Test)]
})


export class Page1 {

    static get parameters(){
        return [[NavController]];
    }


    constructor(nav) {
        this.nav = nav;
        this.quiz = new Quiz();
        this.qIndex = 1;
        this.question = this.quiz.getQuestion(1);
        this.multipleChoice = this.quiz.getMultipleChoice(1);

    }

    goToPopPage() {
        this.nav.push(PagePopPage);
    }

    showAnswer(index) {
        var num = this.quiz.getAnswer(1);

        console.log(num, index)

        if (num === index) {
            alert('Correct');
        } else {
            alert('Try again');
        }
    }


}
