import { Injectable } from '@angular/core';
import {Goals} from "../goals"

@Injectable()
export class GoalService {

  getGoals(){
  	return Goals;
  }

}
