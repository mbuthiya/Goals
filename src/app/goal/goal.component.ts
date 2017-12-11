import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

	goals = [
		new Goal(1,'Watch Finding Nemo'),
		new Goal(2,'Buy Cookies'),
		new Goal(3, 'Get new Phone Case'),
		new Goal(4, 'Get Dog Food'),
		new Goal(5, 'Solve math homework'),
		new Goal(6, 'Plot my world domination plan'),

	]

  constructor() { }

  ngOnInit() {
  }

}
