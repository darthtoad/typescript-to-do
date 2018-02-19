import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
  <select (change)="onChange($event.target.value)"  id="select-task">
    <option value="allTasks">All Tasks</option>
    <option value="completedTasks">Completed Tasks</option>
    <option value="incompleteTasks"  selected="selected">Incomplete Tasks</option>
  </select>

  <ul>
    <li *ngFor="let currentTask of childTaskList | completeness:filterByCompleteness"><h3>{{currentTask.name}}</h3>{{currentTask.description}}<br>Priority: {{currentTask.priority}}<br>
    Complete?
    <input *ngIf="currentTask.done === true" type="checkbox" checked (click)="toggleDone(currentTask, false)"/>
    <input *ngIf="currentTask.done === false" type="checkbox" (click)="toggleDone(currentTask, true)"/><br>
    <button (click)="editButtonHasBeenClicked(currentTask)">Edit!</button></li>
  </ul>
  `
})

export class TaskListComponent {

  @Input() childTaskList: Task[];

  @Output() clickSender = new EventEmitter();

  filterByCompleteness: string = "incompleteTasks";

  onChange(optionFromMenu) {
    this.filterByCompleteness = optionFromMenu;
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

  toggleDone(clickedTask: Task, setCompleteness: boolean) {
   clickedTask.done = setCompleteness;
  }
}
