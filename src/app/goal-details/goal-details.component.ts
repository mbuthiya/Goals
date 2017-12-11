import { Component, OnInit,Input } from '@angular/core';
import {Goal} from '../goal'

@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css']
})
export class GoalDetailsComponent implements OnInit {

  @Input() goal:Goal;
  constructor() { }

  ngOnInit() {
  }

}
