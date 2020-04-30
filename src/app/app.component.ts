import { Component } from '@angular/core';
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

  constructor() {
    this.todos.push(new Todo(1, 'Passear com o cachorro', false));
    this.todos.push(new Todo(2, 'Ir ao supermercado', false));
    this.todos.push(new Todo(3, 'Cortar o cabelo', true));
  }
}
