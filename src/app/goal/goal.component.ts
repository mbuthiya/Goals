import { Component, OnInit, Output,EventEmitter } from '@angular/core';

import {Goal} from '../goal'
import {Goals} from '../goals'
import {GoalService} from '../goals/goal.service';
import {StrikethroughDirective} from '../strikethrough.directive'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  providers:[GoalService], //add the providers to the component
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

	status:string='None';
	// April 14 2018 January = 0 

	goals = Goals;

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
	addNewGoal(goal){
		let goalLength = this.goals.length;
		goal.id=goalLength+1;
		goal.completeDate = new Date(goal.completeDate)
		console.log(goal.completeDate)
		console.log(this.goals[0].completeDate)

		this.goals.push(goal)

	}

  constructor() { }

  ngOnInit() {
  }

}
