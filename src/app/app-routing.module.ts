import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimerComponent } from './timer/timer.component';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';

const routes: Routes = [
  {path: 'dashboard', component: TodoDashboardComponent},
  {path: 'timer', component: TimerComponent},
  {path: '', component: TodoDashboardComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
