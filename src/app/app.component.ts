import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
	<h1> My Goals </h1>
	<p> My goal for today is {{goal}} </p>
  `
})
export class AppComponent {
  goal = 'Watch Finding Nemo';
}
