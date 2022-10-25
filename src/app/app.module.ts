import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddToDoComponent } from './add-to-do/add-to-do.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { DndModule } from 'ngx-drag-drop';
//import { DragDropModule } from '@angular/cdk/drag-drop';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { DndListModule } from 'ngx-drag-and-drop-lists';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop'; 
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer/timer.component';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    AddToDoComponent,
    TimerComponent,
    TodoDashboardComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DndModule,
    MatToolbarModule,
    MatSidenavModule,
    DragDropModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
