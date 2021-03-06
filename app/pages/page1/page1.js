import {Page, NavController} from 'ionic-angular';
import {forwardRef} from 'angular2/core';
import {PagePopPage} from '../page-pop/page-pop';
// import {Share} from '../../components/share/share';
// import {Test} from '../../components/test/test';
import {Quiz} from '../../components/quiz/quiz';


@Page({
  templateUrl: 'build/pages/page1/page1.html',
  directives: [forwardRef(() => Quiz)]
})


export class Page1 {

    static get parameters(){
        return [[NavController]];
    }

    constructor(nav) {
        this.nav = nav;
    }

    goToPopPage() {
        this.nav.push(PagePopPage);
    }
}
