import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'new-task',
  template: `
    <h1>New Task</h1>
    <div class="new-task">
      <label>Enter Task Name:</label>
      <input type="text" #newName>
      <label>Enter Task Description:</label>
      <input type="text" #newDescription>
      <label>Enter Task Priority:</label>
      <br>
      <input type="number" #newPriority><br>
      <button (click)="submitForm(newName.value, newDescription.value, newPriority.value); newName.value=''; newDescription.value=''; newPriority.value=''">Finish</button>
    </div>
  `
})

export class NewTaskComponent {
  @Output() newTaskSender = new EventEmitter();

  submitForm(name: string, description: string, priority: number) {
    var newTaskToAdd: Task = new Task(name, description, priority);
    this.newTaskSender.emit(newTaskToAdd);
  }
}
