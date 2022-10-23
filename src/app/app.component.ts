import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  toDoList = [
    {
      header: 'Pay Electricity Bill',
      body: 'Pay electricity bill by 21 Oct.'
    },
    {
      header: 'Collect book from library',
      body: 'GET RDBMS book from library on 30 Oct.'
    }
  ];

  progressList = [
    {
      header: 'Write a Program',
      body: 'Write string manipulation program in Python language.'
    }
  ];

  doneList = [
    {
      header: 'Submit Assignment',
      body: 'Submit SPA assignment before due date.'
    },
    {
      header: 'Celebrate Diwali',
      body: 'Celebrate Diwali festival with family and friends.'
    }
  ];
}
