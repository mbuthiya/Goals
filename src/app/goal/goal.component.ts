import { Component, OnInit, Output,EventEmitter } from '@angular/core';

import {Goal} from '../goal'
import {StrikethroughDirective} from '../strikethrough.directive'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

	status:string='None';

	goals = [
		new Goal(1,'Watch Finding Nemo','Find an online version and watch merlin find his son'),
		new Goal(2,'Buy Cookies','I have to buy cookies for the parrot'),
		new Goal(3, 'Get new Phone Case','Diana has her birthday coming up soon'),
		new Goal(4, 'Get Dog Food','Pupper likes expensive sancks'),
		new Goal(5, 'Solve math homework','Damn Math'),
		new Goal(6, 'Plot my world domination plan','Cause I am an evil overlord'),

	]


	toogleDetails(index){
		this.goals[index].showDescription = !this.goals[index].showDescription;
	}

	deleteGoal(isComplete,index){
		if (isComplete){

			let toDelete=confirm(`Are you sure you want to delete ${this.goals[index].name}`)

			if(toDelete){
				this.goals.splice(index,1)
			}

		}
	}

  constructor() { }

  ngOnInit() {
  }

}
