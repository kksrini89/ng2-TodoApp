import { FirebaseListObservable } from 'angularfire2';
import { Firebaseauth } from './../../services/firebaseauth';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  title: string = '';
  description: string = '';
  todos: FirebaseListObservable<any>;

  constructor(private firebaseDb: Firebaseauth) { }

  ngOnInit() {
    this.todos = this.firebaseDb.getTodos();
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
