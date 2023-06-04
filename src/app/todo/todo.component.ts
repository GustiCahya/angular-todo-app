import { Component } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  todos: Todo[] = [];

  addTodo(title: string): void {
    const todo: Todo = {
      id: this.todos.length + 1,
      title,
      completed: false
    };
    this.todos.push(todo);
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
