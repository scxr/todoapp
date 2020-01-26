import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todos';
import { TodoService } from '../../services/todo.service'


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  // set dynamic classes

  setClasses(){
    let classes= {
      todo:true,
      'is-complete': this.todo.completed
    }
    return classes;
  }

  onToggle(todo) {
    console.log('toggle');
    // UI TOGGLE
    todo.completed = !todo.completed;
    // Server toggle
    this.todoService.toggleCompleted(todo).subscribe(todo => 
      console.log(todo));
  }
  onDelete(todo) {
    this.deleteTodo.emit(todo);

  }

}
