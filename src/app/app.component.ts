import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
	goals: string[];

  constructor(){

  	this.goals = ["Watch Finding Nemo","Buy Cookies","Get new phone case"];
  }
}
