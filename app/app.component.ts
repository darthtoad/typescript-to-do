import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>To Do List for {{month}}-{{day}}-{{year}}</h1>
    <h2>{{currentFocus}}</h2>
    <hr>
    <button (click)="poop()"> | </button>

    <task-list [childTaskList]="tasks" (clickSender)="editTask($event)"></task-list>
    <hr>
    <edit-task [childSelectedTask]="selectedTask" (doneButtonClickedSender)="finishedEditing()"></edit-task>
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
  selectedTask = null;

  tasks: Task[] = [new Task("Go to ReactNative meeting", "Meet new people, learn more about ReactNative", 3),
    new Task("Poop my pants", "It's fun", 4),
    new Task("I am Tosk", "I am Tosk", 9)];

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
    alert(`Holy shit you're going to edit a task! Your lucky number is ${this.luckyNumber}`);
  }

  finishedEditing() {
    this.selectedTask = null;
  }

  poop() {
    alert("poop");
  }

}
