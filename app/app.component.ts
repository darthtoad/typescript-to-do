import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>To Do List for {{month}}-{{day}}-{{year}}</h1>
    <h2>{{currentFocus}}</h2>
    <ul>
      <li [class]="priorityColor(currentTask)" *ngFor="let currentTask of tasks">{{currentTask.description}}   <button (click)="editTask(currentTask)">Edit!</button>      <button (click)="isComplete(currentTask)">Check Completeness</button></li>
    </ul>
    <hr>
    <div class="selected">
      <h3>{{selectedTask.description}}</h3>
      <p>Task Complete? {{selectedTask.done}}</p>
      <h3>Edit Task</h3>
      <label>Enter Task Description:</label>
      <input [(ngModel)]="selectedTask.description">
      <label>Enter Task Priority:</label>
      <br>
      <input type="number" [(ngModel)]="selectedTask.priority" id="set-priority"><br>
    </div>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Already doing my Angular weekend homework on Thursday like a boss!';
  now = new Date();
  month: number = this.now.getMonth() + 1;
  day: number = this.now.getDate();
  year: number = this.now.getFullYear();
  luckyNumber: number = Math.floor(this.now.getTime() * Math.random() / 420);
  tasks: Task[] = [new Task("Go to ReactNative meeting", "Meet new people, learn more about ReactNative", 3), new Task("Poop my pants", "It's fun", 4), new Task("I am Tosk", "I am Tosk", 9)];
  selectedTask: Task = this.tasks[0];


  editTask(clickedTask) {
    alert("Holy shit you're going to edit a task!");
    this.selectedTask = clickedTask;
  }

  isComplete(thingy: Task) {
    if(thingy.done === true) {
      alert("You have finished your task. Good work!");
    } else {
      alert("YOU HAVE NOT COMPLETED YOUR TASK, YOU IMBECILE!");
    }
  }

  priorityColor(currentTask){
    if (currentTask.priority > 8){
      return "bg-danger";
    } else if (currentTask.priority > 3) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }
}

export class Task {
  public done: boolean = false;
  constructor(public name: string, public description: string, public priority: number) { }
}
