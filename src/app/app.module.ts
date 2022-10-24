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

@NgModule({
  declarations: [
    AppComponent,
    AddToDoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DndModule,
    DragDropModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
