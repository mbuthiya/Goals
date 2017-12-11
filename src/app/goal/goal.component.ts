import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {Goal} from '../goal'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
