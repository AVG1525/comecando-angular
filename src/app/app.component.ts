// ANGULAR
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// MEU
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root', // <app-root>
  templateUrl: './app.component.html', // chama o arquivo html
//  template: '<p> meu template </p>', caso seja algo pequeno tem essa outra forma
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  // any[] = []; => []
  // any[];      => undefined
  // any é qualquer coisa / public nome_variavel: tipo_variavel
  public mode = 'list';
  public todos: Todo[] = [];
  public title = 'Minhas Tarefas';
  public form: FormGroup;

  constructor(private fb: FormBuilder) {    
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required,
      ])]
    });
    this.load()
  }

  add(){
    // this.form.value => { title: 'Titulo' }
    const title = this.form.controls['title'].value;
    const id = this.todos.length + 1;
    
    this.todos.push(new Todo(id, title, false));
    this.save();
    this.clear();
  }

  clear(){
    this.form.reset();
  }
  
  remove(todo: Todo){
    const index = this.todos.indexOf(todo);
    if(index !== -1){
      this.todos.splice(index, 1);
    }
    this.save();
  }

  markAsDone(todo: Todo){
    todo.done = true; 
    this.save();
  }

  markAsUndone(todo: Todo){
    todo.done = false;
    this.save();
  }

  save(){
    const data = JSON.stringify(this.todos);

    localStorage.setItem('todos', data);
  }

  load(){
    const data = localStorage.getItem('todos');
    
    if(data) this.todos = JSON.parse(data);
    else this.todos = [];
  }

  changeMode(mode:string){
    this.mode = mode;
  }
}
