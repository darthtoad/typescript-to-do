import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'edit-task',
  template: `
    <div *ngIf="childSelectedTask" class="selected">
      <h3>{{childSelectedTask.description}}</h3>
      <p>Task Complete? {{childSelectedTask.done}}</p>
      <hr>
      <h3>Edit Task</h3>
      <label>Enter Task Name:</label>
      <input [(ngModel)]="childSelectedTask.name">
      <label>Enter Task Description:</label>
      <input [(ngModel)]="childSelectedTask.description">
      <label>Enter Task Priority:</label>
      <br>
      <input type="number" [(ngModel)]="childSelectedTask.priority" id="set-priority"><br>
      <button (click)="doneButtonClicked()">Finish</button>
    </div>
  `
})

export class EditTaskComponent {
  @Input() childSelectedTask: Task;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
