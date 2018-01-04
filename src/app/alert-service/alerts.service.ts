import { Injectable } from '@angular/core';

@Injectable()
export class AlertsService {

  alertMe(message:string){
  	alert(message)
  }

}
