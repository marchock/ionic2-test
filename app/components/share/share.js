import { Directive } from 'angular2/core';

@Directive({
  selector: '[share]' // <-- [my-dir] because it's an attribute
})
                 // Could be my-dir, [my-dir], .my-dir
export class Share {
  constructor(){ console.log("I'm alive!"); }
}

