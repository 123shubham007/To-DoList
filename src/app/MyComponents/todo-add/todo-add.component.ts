import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {
  title!:string;
  desc!:string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  onSubmit(){
    const todo = {
      sno:8,
      title:this.title,
      desc:this.desc,
      active:true
    }
    this.todoAdd.emit(todo);
    this.title = '';
    this.desc = '';
  }
}
