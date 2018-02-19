import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>To Do List for {{month}}-{{day}}-{{year}}</h1>
    <h2>{{currentFocus}}</h2>
    <ul>
      <li *ngFor="let currentTask of tasks">{{currentTask.description}}   <button (click)="editTask()">Edit!</button>      <button (click)="isComplete(currentTask)">Check Completeness</button></li>
    </ul>
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


  editTask() {
    alert("Holy shit you're going to edit a task!");
  }

  isComplete(thingy: Task) {
    if(thingy.done === true) {
      alert("You have finished your task. Good work!");
    } else {
      alert("YOU HAVE NOT COMPLETED YOUR TASK, YOU IMBECILE!");
    }
  }
}

export class Task {
  public done: boolean = false;
  constructor(public name: string, public description: string, public priority: number) { }
}
