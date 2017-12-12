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
	// April 14 2018 January = 0 

	goals = [
		new Goal(1,'Watch Finding Nemo','Find an online version and watch merlin find his son',new Date(2018,3,14) ),
		new Goal(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2018,6,9) ),
		new Goal(3, 'Get new Phone Case','Diana has her birthday coming up soon',new Date(2018,1,12) ),
		new Goal(4, 'Get Dog Food','Pupper likes expensive sancks',new Date(2018,0,18) ),
		new Goal(5, 'Solve math homework','Damn Math',new Date(2018,2,14) ),
		new Goal(6, 'Plot my world domination plan','Cause I am an evil overlord',new Date(2018,3,14) ),

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
