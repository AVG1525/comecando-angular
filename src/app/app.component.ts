import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root', // <app-root>
  templateUrl: './app.component.html', // chama o arquivo html
//  template: '<p> meu template </p>', caso seja algo pequeno tem essa outra forma
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // any[] = []; => []
  // any[];      => undefined
  // any é qualquer coisa / public nome_variavel: tipo_variavel

  public todos: Todo[] = [];
  public title: String = 'Minhas Tarefas';
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    
    this.form = this.fb.group({
      title: ['Insira sua tarefa', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    });
    
    this.todos.push(new Todo(1, 'Passear com o cachorro', false));
    this.todos.push(new Todo(2, 'Ir ao supermercado', false));
    this.todos.push(new Todo(3, 'Cortar o cabelo', true));
  }

  remove(todo: Todo){
    const index = this.todos.indexOf(todo);
    if(index !== -1){
      this.todos.splice(index, 1);
    }
  }

  markAsDone(todo: Todo){
    todo.done = true; 
  }

  markAsUndone(todo: Todo){
    todo.done = false;
  }

}
