import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import {RouterModule,Routes} from '@angular/router'

import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';


import {AlertsService} from './alert-service/alerts.service'


import { AppComponent } from './app.component';
import { GoalDetailsComponent } from './goal-details/goal-details.component';
import { GoalComponent } from './goal/goal.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Defining routes
const routes:Routes=[
  {path:"goals",component:GoalComponent},
  {path:"about",component:AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    GoalDetailsComponent,
    GoalComponent,
    StrikethroughDirective,
    DateCountPipe,
    GoalFormComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AlertsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
