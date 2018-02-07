import { Component } from '@angular/core';
import { from } from 'rxjs/observable/from';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

const source = from([
  { name: 'Joe', age: 30 },
  { name: 'Frank', age: 20 },
  { name: 'Ryan', age: 50 }
]);

const example = source.pipe(map(person => person.name))

// const x_source = map(source$ => number)
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    example.subscribe(x => {
      console.log(x)
    })
  }

}
