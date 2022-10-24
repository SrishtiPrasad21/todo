import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { AddToDoComponent } from './add-to-do/add-to-do.component';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  bsModalRef: BsModalRef | undefined;

  todaysDate = new Date();

  toDoList = [
    {
      header: 'Pay Electricity Bill',
      body: 'Pay electricity bill by 21 Oct.',
      dueDate: new Date(this.todaysDate.getFullYear(), this.todaysDate.getMonth(), this.todaysDate.getDay() + 2)
    },
    {
      header: 'Collect book from library',
      body: 'GET RDBMS book from library on 30 Oct.',
      dueDate: new Date(this.todaysDate.getFullYear(), this.todaysDate.getMonth(), this.todaysDate.getDay() + 3)
    }
  ];

  progressList = [
    {
      header: 'Write a Program',
      body: 'Write string manipulation program in Python language.',
      dueDate: new Date(this.todaysDate.getFullYear(), this.todaysDate.getMonth(), this.todaysDate.getDay())
    }
  ];

  doneList = [
    {
      header: 'Submit Assignment',
      body: 'Submit SPA assignment before due date.',
      dueDate: new Date(this.todaysDate.getFullYear(), this.todaysDate.getMonth(), this.todaysDate.getDay() - 3)
    },
    {
      header: 'Celebrate Diwali',
      body: 'Celebrate Diwali festival with family and friends.',
      dueDate: new Date(this.todaysDate.getFullYear(), this.todaysDate.getMonth(), this.todaysDate.getDay() - 2)
    }
  ];
  currentTheme = 'theme1';

  constructor(private modalService: BsModalService) {
    
  }

  showAddToDo() {
    const initialState = {
      header: '',
      body: '',
      type: 'add'
    };
    this.bsModalRef = this.modalService.show(AddToDoComponent, {initialState});
    this.bsModalRef.content.modalRef = this.bsModalRef;
    this.bsModalRef.content.addEditSubject.subscribe((result: any) => {
      this.toDoList.push(result);
    });
  }

  showEditToDo(param: any) {
    const initialState = {
      header: param.header,
      body: param.body,
      type: 'edit'
    };
    this.bsModalRef = this.modalService.show(AddToDoComponent, {initialState});
    this.bsModalRef.content.modalRef = this.bsModalRef;
    this.bsModalRef.content.addEditSubject.subscribe((result: any) => {
      const selectedObj = this.toDoList.filter(obj => obj.header === result.header);
      if (selectedObj.length > 0) {
        selectedObj[0].header = result.header;
        selectedObj[0].body = result.body;
      }
    });
    this.bsModalRef.content.deleteSubject.subscribe((header: string) => {
      let objIndex;
      this.toDoList.forEach((obj, index) => {
        if (obj.header === header) {
          objIndex = index;
        }
      });
      if (objIndex) {
        this.toDoList.splice(objIndex, 1);
      }
    });
  }

  onDraggableMoved(param: any): void {
    console.log(param);
  }

  drop(event: CdkDragDrop<any>) :void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  applyTheme(themeName: string): void {
    this.currentTheme = themeName;
  }

  getTheme(): string {
    return this.currentTheme;
  }
}
