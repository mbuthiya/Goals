import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {

	newGoal=new Goal(0,"","",new Date());



	// TODO: Remove this when we're done 
  get diagnostic() { return JSON.stringify(this.newGoal); }

  ngOnInit() {
  }

}
