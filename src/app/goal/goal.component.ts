import { Component, OnInit, Output,EventEmitter } from '@angular/core';


import {Goal} from '../goal'
import {Quote} from '../quote-class/quote'
import { Router} from '@angular/router';

import {GoalService} from '../goals/goal.service';
import {AlertsService} from '../alert-service/alerts.service'
import {QuoteRequestService} from '../quote-http/quote-request.service'

import {StrikethroughDirective} from '../strikethrough.directive'



@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  providers:[GoalService,QuoteRequestService], //add the providers to the component
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

	goals:Goal[];
	alertService:AlertsService;
	quote:Quote;
	


	goToUrl(id){

		this.router.navigate(['/goals',id])

	}

	deleteGoal(index){
		

			let toDelete=confirm(`Are you sure you want to delete ${this.goals[index].name}`)

			if(toDelete){
				this.goals.splice(index,1)
				this.alertService.alertMe("Goal has been deleted")
			

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

  constructor(goalService:GoalService,alertService:AlertsService,private quoteService:QuoteRequestService,private router:Router) {
  this.goals = goalService.getGoals();
  this.alertService = alertService;
   }



  ngOnInit() {
  	this.quoteService.quoteRequest()
  	this.quote=this.quoteService.quote
  	
  }


}
