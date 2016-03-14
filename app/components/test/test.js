import { Component } from 'angular2/core';

@Component({
  selector: 'my-component',
  template: `<h1>Hello World</h1>

  <p>THIS IS GREAT</p>


  `,
})
          // Unnecessary because MyService is in App's providers
export class Test {
  // id is 1, s is a different MyService instance than MyApp
    constructor() {
        console.log("my-component ");
    }
}

