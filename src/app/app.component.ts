import { Todo } from './models/todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  todos: Todo[];
  InputTodo: string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [];
  }

  doneTask(id) {
    this.todos.map(
      (value, i) => {
        if (i === id) {
          value.completed = !value.completed;
        }
      }
    )
  }

  deleteTask(i) {
    this.todos.splice(i, 1);
  }

  addTask() {
    if (this.InputTodo.length !== 0) {
      this.todos.push(
        { content: this.InputTodo, completed: false }
      );
      this.InputTodo = '';
    }
  }

}
