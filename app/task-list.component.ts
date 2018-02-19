import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
  <ul>
    <li *ngFor="let currentTask of childTaskList"><h3>{{currentTask.name}}</h3>{{currentTask.description}}<br>Priority: {{currentTask.priority}}<br>   <button (click)="editButtonHasBeenClicked(currentTask)">Edit!</button>      <button (click)="isComplete(currentTask)">Check Completeness</button></li>
  </ul>
  `
})

export class TaskListComponent {

  @Input() childTaskList: Task[];

  @Output() clickSender = new EventEmitter();

  isComplete(thingy: Task) {
    if(thingy.done === true) {
      alert("You have finished your task. Good work!");
    } else {
      alert("YOU HAVE NOT COMPLETED YOUR TASK, YOU IMBECILE!");
    }
  }

  priorityColor(currentTask){
    if (currentTask.priority > 7){
      return "bg-danger";
    } else if (currentTask.priority > 3) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }

  editButtonHasBeenClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }
}
