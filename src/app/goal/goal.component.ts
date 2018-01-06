import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import {Goal} from '../goal'
import {Quote} from '../quote-class/quote'

import {GoalService} from '../goals/goal.service';
import {AlertsService} from '../alert-service/alerts.service'

import {StrikethroughDirective} from '../strikethrough.directive'


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  providers:[GoalService], //add the providers to the component
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

	goals:Goal[];
	alertService:AlertsService;
	quote:Quote;


	toogleDetails(index){
		this.goals[index].showDescription = !this.goals[index].showDescription;
	}

	deleteGoal(isComplete,index){
		if (isComplete){

			let toDelete=confirm(`Are you sure you want to delete ${this.goals[index].name}`)

			if(toDelete){
				this.goals.splice(index,1)
				this.alertService.alertMe("Goal has been deleted")
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

  constructor(goalService:GoalService,alertService:AlertsService,private http:HttpClient) {
  this.goals = goalService.getGoals();
  this.alertService = alertService;
   }

  ngOnInit() {
  	this.http.get("http://quotes.rest/qod.json").subscribe(data=>{
  		var result =data["contents"].quotes[0];
  		this.quote= new Quote(result.quote,result.author)
  	

  	},err=>{
  		this.quote= new Quote("Never, never, never give up.","winston churchill")
  		console.log("Error occured ")
  	})
  }

}
