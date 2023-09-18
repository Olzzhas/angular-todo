import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Добавьте эту строку

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';

@NgModule({
  declarations: [AppComponent, TaskListComponent, AddTaskComponent],
  imports: [BrowserModule, FormsModule], // Добавьте FormsModule здесь
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
