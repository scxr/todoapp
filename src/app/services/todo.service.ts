import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todos';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos_url:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5'
  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todos_url}${this.todosLimit}`);
  }
  toggleCompleted(todo:Todo):Observable<any>{
    const url = `${this.todos_url}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }
  deleteTodo(todo:Todo):Observable<Todo>{
    const url = `${this.todos_url}/${todo.id}`;
    return this.http.delete<Todo>(url,httpOptions)
  } 

  addTodo(todo:Todo):Observable<Todo> {
    return this.http.post(this.todos_url, todo, httpOptions);
  }  
}
