import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { AddToDoComponent } from './add-to-do/add-to-do.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  bsModalRef: BsModalRef | undefined;

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
}
